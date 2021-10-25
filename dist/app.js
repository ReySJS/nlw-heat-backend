"use strict";
// -----------------------------------------------------------------------------------------------//
// Archive: app.js
// Description: File responsible for configuring the application (Back-End)
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
exports.app = (0, express_1.default)();
exports.app.use(index_1.routes); // => require all routes created on index.routes.js
