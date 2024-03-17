const express = require("express");
const router = express.Router();
const dividaController = require("../controllers/dividaController");

router
  .route("/")
  .get(dividaController.getAllDividas)
  .post(dividaController.createDivida);

module.exports = router;
