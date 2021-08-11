"use strict";

var fs = require('fs');

var colors = require('colors'); //console.clear();


var crearArchivo = function crearArchivo() {
  var base,
      listar,
      hasta,
      salida,
      salida1,
      cont,
      _args = arguments;
  return regeneratorRuntime.async(function crearArchivo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          base = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          listar = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          hasta = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
          _context.prev = 3;
          salida = '';
          salida1 = '';
          salida = "".concat('==================================='.green, "\n        TABLA DEL: ").concat(colors.blue(base), "\n").concat('==================================='.green, "\n    \n");
          salida1 = '==================================='.concat("\n    TABLA DEL: ", base, "\n", '===================================', "\n\n");

          for (cont = 1; cont <= hasta; cont++) {
            salida = salida + "".concat(base, " ").concat('x'.green, " ").concat(cont, " ").concat('='.green, "  ").concat(cont * base, " \n");
            salida1 = salida1 + "".concat(base, " x ").concat(cont, " =  ").concat(cont * base, " \n");
          }

          if (listar) {
            console.log(salida);
          } //TODO: try, catch al utilizar la siguiente funcion


          fs.writeFileSync("./salida/tabla-".concat(base, ".txt"), salida1); //SI NO HAY ERROR
          // console.log(`tabla-${base}.txt creado`);

          return _context.abrupt("return", "Archivo: tabla-".concat(base, ".txt "));

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          throw _context.t0;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 14]]);
}; //


module.exports = {
  crearArchivo: crearArchivo
};