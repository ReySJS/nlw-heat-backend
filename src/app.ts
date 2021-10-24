// -----------------------------------------------------------------------------------------------//
// Archive: app.js
// Description: File responsible for configuring the application (Back-End)
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//

import express from 'express';
import { routes } from './routes/index';

export const app = express();

app.use(routes); // => require all routes created on index.routes.js