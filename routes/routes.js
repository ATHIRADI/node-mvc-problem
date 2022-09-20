const express = require("express");
const router = express.Router();

const middleware = require("../middlewars/middle");
const {
  home,
  homePost,
  company,
  companyPost,
} = require("../controller/controls");

router.get("/", home);
router.post("/", middleware, homePost);

router.get("/company", middleware, company);
router.post("/company", middleware, companyPost);

module.exports = router;
