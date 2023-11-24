const mongoose = require('mongoose')

const ConsultasSchema = new mongoose.Schema({
  medicoID: String,
  pacienteID: String,
  status: String
});

module.exports =  mongoose.model("Consultas", ConsultasSchema);
