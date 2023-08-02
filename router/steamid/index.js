//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const router = express.Router();

const steamidResolver = require("steamid-resolver");
const SteamIDpack = require("steamid");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router

router.get("/", async (req, res) => {
  var url = req.query.url; //Url Query Param ?url=
  var id = req.query.id; //id Query Param ?id=

  if (!url && !id) {
    //Check Query Params
    return res
      .status(400)
      .json({ status: 400, error: "Bad Request", message: "invalid query" });
  }
  if (url && id) {
    //Check Query Params
    return res
      .status(400)
      .json({ status: 400, error: "Bad Request", message: "too many queries" });
  } else {
    if (!id && url) {
      if (url.includes("steamcommunity.com/id")) {
        //Basic Url Validator
        steamidResolver.customUrlToFullInfo(
          url.toString(),
          async function (err, result) {
            //Get Profile Data By CustomUrl

            if (err)
              return res
                .status(500)
                .json({
                  status: 500,
                  error: "Internal Server Error",
                  message: err,
                });
            if (!result)
              return res
                .status(404)
                .json({
                  status: 404,
                  error: "Not Found",
                  message: "the requested profile not found",
                });

            let sid = new SteamIDpack(result.steamID64.toString()); //SteamID Pack

            return res.status(200).json({
              //Return Profile Data
              status: 200,
              nickname: result.steamID.toString(),
              avatarUrl: result.avatarFull.toString(),
              memberSince: result.memberSince.toString(),
              onlineState: result.onlineState.toString(),
              privacyState: result.privacyState.toString(),
              fullUrl: `https://steamcommunity.com/profiles/${result.steamID64}`,
              steam64id: result.steamID64.toString(),
              steam2id: sid.getSteam2RenderedID(true),
              steam3id: sid.getSteam3RenderedID(),
            });
          }
        );
      } else if (url.includes("steamcommunity.com/profiles")) {
        //Basic Url Validator
        steamidResolver.steamID64ToFullInfo(url, async function (err, result) {
          //Get Profile Data By Steam64ID

          if (err)
            return res
              .status(500)
              .json({
                status: 500,
                error: "Internal Server Error",
                message: err,
              });
          if (!result)
            return res
              .status(404)
              .json({
                status: 404,
                error: "Not Found",
                message: "the requested profile not found",
              });

          let sid = new SteamIDpack(result.steamID64.toString()); //SteamID Pack

          return res.status(200).json({
            //Return Profile Data
            status: 200,
            nickname: result.steamID.toString(),
            avatarUrl: result.avatarFull.toString(),
            memberSince: result.memberSince.toString(),
            onlineState: result.onlineState.toString(),
            privacyState: result.privacyState.toString(),
            fullUrl: `https://steamcommunity.com/profiles/${result.steamID64}`,
            steam64id: result.steamID64.toString(),
            steam2id: sid.getSteam2RenderedID(true),
            steam3id: sid.getSteam3RenderedID(),
          });
        });
      } else {
        return res
          .status(404)
          .json({
            status: 404,
            error: "Not Found",
            message: "the requested profile not found",
          });
      }
    } else if (!url && id) {
      steamidResolver.steamID64ToFullInfo(id, async function (err, result) {
        //Get Profile Data By Steam64ID

        if (err)
          return res
            .status(500)
            .json({
              status: 500,
              error: "Internal Server Error",
              message: err,
            });
        if (!result)
          return res
            .status(404)
            .json({
              status: 404,
              error: "Not Found",
              message: "the requested profile not found",
            });

        let sid = new SteamIDpack(result.steamID64.toString()); //SteamID Pack

        return res.status(200).json({
          //Return Profile Data
          status: 200,
          nickname: result.steamID.toString(),
          avatarUrl: result.avatarFull.toString(),
          memberSince: result.memberSince.toString(),
          onlineState: result.onlineState.toString(),
          privacyState: result.privacyState.toString(),
          fullUrl: `https://steamcommunity.com/profiles/${result.steamID64}`,
          steam64id: result.steamID64.toString(),
          steam2id: sid.getSteam2RenderedID(true),
          steam3id: sid.getSteam3RenderedID(),
        });
      });
    }
  }
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
