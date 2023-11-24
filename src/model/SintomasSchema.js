const mongoose = require('mongoose')

const sintomasSchema = new mongoose.Schema({
  especialidade: String,
  sintomaId: String,
  sintoma: String,
  parteCorpo: String,
  regiaoCorpo: String
});

module.exports = mongoose.model("Sintomas", sintomasSchema);
