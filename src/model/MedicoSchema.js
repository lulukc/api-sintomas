const mongoose = require('mongoose')


const medicoSchema = new mongoose.Schema({

  especialidade: String,
  nome: String,
  crm: String,
});

module.exports =  mongoose.model("Medicos", medicoSchema);
