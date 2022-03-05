import axios from 'axios'
import { prismaClient } from '../prisma'
/**
 * Receber code(string)
 * Recuperar o acess_token no github
 * Verificar se o usuário existe no DB
 * ----SIM = Gera um token
 * ----NÃO = Cria no DB, gera um token
 * Retornar o token com as infor do user
 */

type IAccessTokenResponse = {
  access_token: string
}

type IUserResponse = {
  avatar_url: string
  login: string
  id: number
  name: string
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {  
          Accept: 'application/json',
        },
      })

    const response = await axios.get<IUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,  
        },
      },
    )

    const { login, id, avatar_url, name } = response.data

    const user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    })

    return response.data
  }
}

export { AuthenticateUserService }
