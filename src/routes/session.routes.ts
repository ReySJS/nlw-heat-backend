// -----------------------------------------------------------------------------------------------//
// Archive: routes/login.routes.js
// Description: File responsible for api routes related to 'session' class
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//

import express from "express";

const router = express.Router();
import  session  from "../controllers/session.controller";
// import { signinCallback } from "../controllers/session.controller";

// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
router.get("/github", session.github);
router.get("/signin/callback", session.signinCallback);
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default router;