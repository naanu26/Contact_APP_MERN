const express = require('express');
const app = express();
const cors = require("cors");
const { config } = require("dotenv");
const users = require('./models/userSchema');
const router = require('./router/route')

/** connection file */
const connect = require('./database/conn');

/** middlewares */
app.use(cors());
app.use(express.json());
config();

/** PORT */
const port = 8080;

/** routes */
app.use("/api", router);

connect()
  .then(() => {
    try {
      app.listen(8080, () => {
        console.log(`Server listening on port ${port}`);
      });
    } catch (err) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection", error);
  });
