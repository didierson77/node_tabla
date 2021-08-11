const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./configuracion/yargs');

require('colors');

// console.log(process.argv); /* muestra la ruta donde se encuentra node*/
// console.log(argv);          /* muestra la ruta donde se encuentra nuestra app*/

//valor por defecto =1
// const [, , arg3 = 'base=1'] = process.argv;
//console.log(arg3);
// const [, nuevaBase] = arg3.split('=');

//console.log(nuevaBase);

// console.log('base de yargs: ', argv.base);
// console.log('listar de yargs: ', argv.listar);

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));