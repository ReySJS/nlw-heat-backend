"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------------------------------------//
// Archive: server.ts
// Description: File responsible for configuring the application (Back-End)
// Data: 2021/10/23
// Author: Rey
// -----------------------------------------------------------------------------------------------//
require("dotenv/config");
var app_1 = require("./app");
// ----------------------------------------------------------------------------//
// --------------------------------server-port---------------------------------//
app_1.app.listen(process.env.PORT, function (err) {
    if (err = undefined)
        console.log(err);
    console.log("\uD83D\uDE80 Server listening on port " + process.env.PORT);
});
// app.listen(4000, process.env.HOST, () => {
//   console.log(`🚀 Server listening on port 4000`);
// });
// --------------------------------server-port---------------------------------//
// ----------------------------------------------------------------------------//
