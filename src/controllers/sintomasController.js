const Sintomas = require("../model/SintomasSchema")
const Medicos = require("../model/MedicoSchema")
const Funcoes = require("../service/Util")

class SintomasController {
  async index(req, res) {

    const sintomas = [];
    const setSintomas = new Set();
    const listasSintomas = await Sintomas.find();

    listasSintomas.forEach((s) =>{
      sintomas.push({
        sintoma: s.sintoma,
        sintomaId: s.sintomaId
      })
    })

    const sintomasFiltrados = sintomas.filter((s) =>{
      const duplicatedPerson = setSintomas.has(s.sintomaId);
      setSintomas.add(s.sintomaId);
      return !duplicatedPerson;
    })

    return res.json(sintomasFiltrados);
  }

  async findSitomas(req, res) {
    const especialidades = [];
    let especialidade = {
      especialidade: "",
      contador: 0,
    };

    const { id } = req.params;
    const sintomasRequest = id.split(",");

    const listasSintomas = await Sintomas.find({
      "sintomaId":{ $in: sintomasRequest },
    });

    listasSintomas.forEach((sintoma) => {
      const verificacao = Funcoes.verificaArray(
        especialidades,
        sintoma.especialidade
      );

      if (verificacao.resultado) {
        especialidades[verificacao.index].contador++;
      } else {
        especialidades.push({
          especialidade: sintoma.especialidade,
          contador: 1,
        });
      }
    });

    for (let index = 0; index < especialidades.length; index++) {
      if (especialidades[index].contador > especialidade.contador) {
        especialidade = especialidades[index];
      } else if (especialidades[index].contador === especialidade.contador) {
        especialidade = {
          especialidade: "Clinico geral",
          contador: especialidades[index].contador,
        };
      }
    }

    const listasMedicos = await Medicos.find({
      "especialidade": especialidade.especialidade
    })

    const retorno = {
      especialidade,
      listasMedicos
    }

    return res.json(retorno);
  }
}
module.exports =  new SintomasController();
