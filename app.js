//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require("fs");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const router = require("./router");

const app = express();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Colors

magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Access Log Stream

let date = new Date();
let formatedDate = date.toISOString().split("T")[0];
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access", `${formatedDate}-access.log`),
  { flags: "a", interval: "1d" }
);

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//MiddleWares

app.use(cors({ methods: ["GET", "POST"] }));
app.use(bodyParser.json()); //Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(morgan("common")); //Console Logger
app.use(morgan("common", { stream: accessLogStream })); //Access File Log
app.use(router);
app.use("*", (req, res) => {
  res
    .status(401)
    .send({
      status: 401,
      error: "Unauthorized",
      message: "client failed to authenticate with the server",
    });
});

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Server StartUP

app.listen(process.env.PORT, async () => {
  console.log(magenta, "[📶]Server Is Running Properly ....");
  console.log(cyan, " [⚙️]Port : ", process.env.PORT);
});

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
