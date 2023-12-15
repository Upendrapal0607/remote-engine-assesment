const express = require("express");
const { connection } = require("./db/db");
const cors = require("cors");
const { ClintRoute } = require("./routes/Clint.route");
const { DeveloperRoute } = require("./routes/Developer.route");

require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", ClintRoute);
app.use("/developer", DeveloperRoute);
app.get("/", (req, res) => {
  res.send("welcome to back-end let's start");
});
app.listen(port, async () => {
  console.log(`Server is running on port 8080`);
  try {
    await connection;
    console.log("connected to the database");
  } catch (error) {
    console.log({ error });
  }
});
