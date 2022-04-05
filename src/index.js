const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mailController = require("./controllers/mail.controller");
app.use("/mail", mailController);

app.listen(8000, () => {
  console.log("server is live @ 8000");
});
