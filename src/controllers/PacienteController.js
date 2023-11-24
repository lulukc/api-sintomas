const Pacientes = require( "../model/PacienteSchema")

class PacientesController {
  async findById(req, res) {

    const { id } = req.params;
    const listasPacientes = await Pacientes.findById(id)
    return res.json(listasPacientes);
  }
}
module.exports =  new PacientesController();