import { Request, Response } from 'express'
import 'dotenv/config'

const github = async (request: Request, response: Response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  )
}

const signinCallback = async (request: Request, response: Response) => {
  const { code } = request.query

  response.json(code)
}

export default { github, signinCallback }
