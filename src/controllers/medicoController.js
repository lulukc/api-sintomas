const Medicos = require( "../model/MedicoSchema")

class MedicosController {
  async findMedico(req, res) {

    const { especialidade } = req.params;
    const listasMedicos = await Medicos.find({
      "especialidade": especialidade
    })
    return res.json(listasMedicos);
  }

  async findById(req, res) {

    const { id } = req.params;
    const listasMedicos = await Medicos.findById(id)
    return res.json(listasMedicos);
  }
}
module.exports =  new MedicosController();