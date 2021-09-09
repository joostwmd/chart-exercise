const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");

/* GET home page */
router.get("/", (req, res, next) => {
  axios.get("http://api.coindesk.com/v1/bpi/historical/close.json")
     .then(response => {
       console.log(response.data.bpi)
       const values = response.data.bpi
       res.render("index", {values})
     })
;
});

module.exports = router;
