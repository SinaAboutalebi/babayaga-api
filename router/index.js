//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const rconRouter = require("./rcon");
router.use("/rcon", rconRouter);

const faceitRouter = require("./faceit");
router.use("/faceit", faceitRouter);

const steamidRouter = require("./steamid");
router.use("/steamid", steamidRouter);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
