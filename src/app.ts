// -----------------------------------------------------------------------------------------------//
// Archive: app.js
// Description: File responsible for configuring the application (Back-End)
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//

import express from 'express'
import { router } from './routes/routes'

export const app = express()
app.use(express.json())

app.use(router) // => require all routes created on index.routes.js
