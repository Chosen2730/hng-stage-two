require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const personRouter = require("./Routes/personRoute");

app.use(cors());
app.use(express.json());

app.use("/api", personRouter);
app.get("/", (req, res) =>
  res.send(
    `<h1> HNG Stage 2 Backend Task</h1> <h4>by Robinson_Simon </h4> <a href="https://github.com/Chosen2730/hng-stage-two/blob/main/documentation.md">Check Documentation</a> `
  )
);

app.use(notFound);
app.use(errorHandler);

const port = 3000 || process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App is running on ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
