"use strict";

var argv = require('yargs').option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Es la base de la tabla de multiplicar'
}).option('l', {
  alias: 'listar',
  type: 'boolean',
  "default": false,
  describe: 'Muestra la tabla en pantalla'
}).option('h', {
  alias: 'hasta',
  type: 'number',
  "default": 10,
  describe: 'Limite hasta el cual se muestra la tabla del numero base'
}).check(function (argv, options) {
  if (isNaN(argv.b)) {
    throw 'La base tiene que ser un número';
  }

  if (isNaN(argv.h)) {
    throw 'El parametro hasta debe ser un numero';
  }

  return true;
  /*si no hay error regresa true */
  // console.log('yargs ', argv);
}).argv;

module.exports = argv;