//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const router = express.Router();

const getData = require("../src/getData");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router

router.get("/", async (req, res) => {
  gameplayerid = req.query.id;

  if (gameplayerid.length == 17) {
    try {
      const data = await getData(gameplayerid);
      if (data.status === 200)
        res.status(200).send({ status: 200, data: data.data });
      else {
        return res.status(404).json({
          status: 404,
          error: "the requested player does not exist",
          message: "faceit account not found",
        });
      }
    } catch (error) {
      return res
        .status(408)
        .json({ status: 408, error: error, message: "api is currently down" });
    }
  } else {
    return res
      .status(400)
      .json({ status: 400, error: "Bad Request", message: "invalid query" });
  }
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
