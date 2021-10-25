"use strict";
// -----------------------------------------------------------------------------------------------//
// Archive: routes/index.ts
// Description: File responsible for loading all routes
// Data: 2021/10/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var session_routes_1 = __importDefault(require("./session.routes"));
exports.routes = (0, express_1.default)();
// ------------------------------------------------------------//
// ------------------------general-routes----------------------//
exports.routes.use(session_routes_1.default);
// ------------------------general-routes----------------------//
// ------------------------------------------------------------//
