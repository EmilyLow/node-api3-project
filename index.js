// code away!
require('dotenv').config();
const server = require("./server.js");

const port = process.env.PORT || 5000;


server.listen(port, () => {
  console.log("Server listening on port 5000...");
});

//Why do we have both index.js and server.js here? Is it because you can only put the location in index.js?