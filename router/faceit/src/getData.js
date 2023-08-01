//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const axios = require("axios");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Get Players Faceit Data By ID

module.exports = async (gameplayerid) => {
  const options = {
    method: "get",
    url: `https://open.faceit.com/data/v4/players?game=csgo&game_player_id=${gameplayerid}`,
    headers: { Authorization: process.env.FACEIT_API }, //Faceit APi Authorization
  };

  let faceitdata = await axios(options).catch((reason) => {
    if (reason.response.status === 400)
      return {
        status: 404,
        error: "the requested player does not exist",
        message: "faceit account not found",
      };
  });

  if (!faceitdata)
    return {
      status: 404,
      error: "the requested player does not exist",
      message: "faceit account not found",
    };
  else {
    return { status: 200, data:faceitdata.data };
  }
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
