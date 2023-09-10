const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000 || process.env.PORT;
app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App is running on ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
