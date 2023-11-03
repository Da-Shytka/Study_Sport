const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

module.exports = router;
