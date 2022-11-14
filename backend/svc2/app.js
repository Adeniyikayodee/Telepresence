const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
PORT = process.env.PORT;

const route = require("./route");

app.use("/svc2", route);

app.listen(PORT, () => {
  console.log(`SVC 2 service running on PORT, ${PORT}`);
  // console.log(process.env.DB_USER_NAME);
});
