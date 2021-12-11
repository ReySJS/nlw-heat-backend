// -----------------------------------------------------------------------------------------------//
// Archive: routes/login.routes.js
// Description: File responsible for api routes related to 'session' class
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'
import { AuthenticateUserController } from '../controllers/AuthenticateUserController'
import session from '../controllers/session.controller'

const routes = Router()

// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
routes.get('/github', session.github)
routes.get('/signin/callback', session.signinCallback)
routes.post('/authenticate', new AuthenticateUserController().handle)
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default routes
