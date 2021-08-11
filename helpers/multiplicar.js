const fs = require('fs');

const colors = require('colors');

//console.clear();

const crearArchivo = async(base = 1, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let salida1 = '';

        salida = `${'==================================='.green}
        TABLA DEL: ${colors.blue(base)}
${'==================================='.green}
    \n`;

        salida1 = `${'==================================='}
    TABLA DEL: ${base}
${'==================================='}
\n`;

        for (let cont = 1; cont <= hasta; cont++) {
            salida = salida + `${base} ${'x'.green} ${cont} ${'='.green}  ${cont*base} \n`;
            salida1 = salida1 + `${base} x ${cont} =  ${cont*base} \n`;

        }
        if (listar) {
            console.log(salida);
        }
        //TODO: try, catch al utilizar la siguiente funcion
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida1);


        //SI NO HAY ERROR
        // console.log(`tabla-${base}.txt creado`);
        return (`Archivo: tabla-${base}.txt `);

    } catch (error) {
        throw error;
    }







    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     //SI NO HAY ERROR
    //     console.log(`tabla-${base}.txt creado`);

    // });
};


//
module.exports = {
    crearArchivo,
};