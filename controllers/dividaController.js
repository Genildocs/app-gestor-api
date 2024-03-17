const Divida = require("../models/dividaModel");
const asyncHandler = require("express-async-handler");
// @desc Get all dividas
const getAllDividas = asyncHandler(async (req, res) => {
  const dividas = await Divida.find();
  res.status(200).json({
    success: "sucess",
    data: dividas,
  });
});

const createDivida = asyncHandler(async (req, res) => {
  const divida = await Divida.create(req.body);
  if (!title || !value) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.status(200).json({
    success: "sucess",
    data: divida,
  });
});

module.exports = {
  getAllDividas,
  createDivida,
};
