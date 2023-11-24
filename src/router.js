const express = require('express')
const SintomasController = require("./controllers/sintomasController")
const MedicosController = require("./controllers/medicoController")
const ConsultaController = require("./controllers/consultaController")

const PacienteController = require("./controllers/PacienteController")

const routes  =  new express.Router();

routes.get("/", SintomasController.index);
routes.get("/filtro/:id", SintomasController.findSitomas);
routes.get("/medico/:especialidade", MedicosController.findMedico);
routes.get("/medico/find/:id", MedicosController.findById);

routes.get("/paciente/find/:id", PacienteController.findById);

routes.get("/consulta/:id", ConsultaController.find);
routes.post("/consulta", ConsultaController.criar);

module.exports = routes ;