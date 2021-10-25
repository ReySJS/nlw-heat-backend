"use strict";
// -----------------------------------------------------------------------------------------------//
// Archive: routes/login.routes.js
// Description: File responsible for api routes related to 'session' class
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var session_controller_1 = __importDefault(require("../controllers/session.controller"));
// import { signinCallback } from "../controllers/session.controller";
// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
router.get("/github", session_controller_1.default.github);
router.get("/signin/callback", session_controller_1.default.signinCallback);
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//
exports.default = router;
