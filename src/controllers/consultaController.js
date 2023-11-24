const Consultas = require("../model/ConsultasSchema")
const Medicos = require( "../model/MedicoSchema")

class ConsultasController {
  async criar(req, res) {

    const reque = req.body 

    const consulta = Consultas.create({
      medicoID: "6560852d418a4708377f34d8",
      pacienteID: "65608a5d418a4708377f34e9",
      status: "agendada"
    })

    return res.json(consulta);
      
  }

  async find(req, res) {

    const { id } = req.params;
    const listasConsultas = await Consultas.find({
      "pacienteID": id
    })

    return res.json(listasConsultas);
  }
}
module.exports =  new ConsultasController();