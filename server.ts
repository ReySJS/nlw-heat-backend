// -----------------------------------------------------------------------------------------------//
// Archive: server.ts
// Description: File responsible for configuring the application (Back-End)
// Data: 2021/10/23
// Author: Rey
// -----------------------------------------------------------------------------------------------//
import "dotenv/config"
import { app } from './src/app';

// ----------------------------------------------------------------------------//
// --------------------------------server-port---------------------------------//
app.listen(process.env.PORT, (err: void) => {
  if (err = undefined) console.log(err);
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
});

// app.listen(4000, process.env.HOST, () => {
//   console.log(`🚀 Server listening on port 4000`);
// });
// --------------------------------server-port---------------------------------//
// ----------------------------------------------------------------------------//
