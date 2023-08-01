//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require("fs");
const time = require("node-get-time");
const util = require("util");
const path = require("path");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Logger Function

const logPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "logs",
  "rcon",
  `${process.pid}-rcon.log`
);

let log_file = fs.createWriteStream(logPath, { flags: "w" });

module.exports = async (d) => {
  log_file.write("[" + time.now() + "] " + util.format(d) + "\n");
};
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
