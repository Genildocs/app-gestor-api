const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const receitaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  type: String,
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

receitaSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketnums",
  start_seq: 500,
});

module.exports = mongoose.model("Receita", receitaSchema);
