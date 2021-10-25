// -----------------------------------------------------------------------------------------------//
// Archive: routes/index.ts
// Description: File responsible for loading all routes
// Data: 2021/10/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'
import session from './session.routes'

const router = Router()

// ------------------------------------------------------------//
// ------------------------general-routes----------------------//
router.use(session)

// ------------------------general-routes----------------------//
// ------------------------------------------------------------//
export { router }
