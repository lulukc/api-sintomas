const mongoose = require('mongoose')

const pacientesSchema = new mongoose.Schema({
  nome: String,
});

module.exports = mongoose.model("Pacientes", pacientesSchema);
