const opcionesMostrarCursos = {
};

const opcionesPreinscripcion = {
    cedula: {
        demand: true,
        alias: 'c'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    curso: {
        demand: true,
        alias: 'i'
    }
};

const argv = require('yargs')
        .command('mostrar-cursos', 'Lista de cursos disponible', opcionesMostrarCursos)
        .command('preinscripcion', 'Preinscripcion cursos', opcionesPreinscripcion)
        .argv;

const misCursos = require('./cursos');

//console.log(argv);
switch(argv._[0]) {
    case 'preinscripcion':
        misCursos.preinscripcion(argv.curso, {cedula: argv.cedula, nombre: argv.nombre})
        break;    
    default:
        misCursos.mostrarCursos(2000);
        break;
}
