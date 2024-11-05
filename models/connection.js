//Requirements
const mongoose = require("mongoose");
//Connection String
const connectionString = process.env.CONNECTION_STRING;

//Fonction
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
