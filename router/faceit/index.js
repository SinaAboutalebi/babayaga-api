//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const faceitidRouter = require('./routers/faceitid.js'); //check player faceit id 
router.use('/id', faceitidRouter)

const playerRouter = require('./routers/player.js'); //Print Player Datas
router.use('/player', playerRouter)

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//