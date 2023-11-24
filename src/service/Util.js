class Funcoes {
    verificaArray(especialidades, especialidade) {
      for (let index = 0; index < especialidades.length; index++) {
        if (especialidade === especialidades[index].especialidade) {
          return { index, resultado: true };
        }
      }
      return {
        index: -1,
        resultado: false,
      };
  }
}
module.exports =  new Funcoes();