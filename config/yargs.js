const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Mostrar tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "multiplicar hasta el numero",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base debe ser un numero");
    }
    return true;
  }).argv;

module.exports = argv;
