const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

// esto es un ejemplo , no se hace
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// leer flags de la consola
// console.log(process.argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(`Archivo creado: ${archivo.rainbow}`))
  .catch((err) => console.log(err));
