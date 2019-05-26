const express = require('express')
const app = express()
const misCursos = require('./cursos');

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

const opcionesMostrarCursos = {
};



const argv = require('yargs')
        .command('mostrar-cursos', 'Lista de cursos disponible', opcionesMostrarCursos)
        .command('preinscripcion', 'Preinscripcion cursos', opcionesPreinscripcion)
        .argv;


//console.log(argv);
switch(argv._[0]) {
    case 'preinscripcion':
        misCursos.preinscripcion(argv.curso, {cedula: argv.cedula, nombre: argv.nombre})
        break;    
    default:
        misCursos.mostrarCursos(2000);
        break;
}

app.get('/cursos', function (req, res) {
    res.send(misCursos.mostrarCursos(0))
  })

  app.get('/preinscripcion', function (req, res) {
    res.send(misCursos.preinscripcion(argv.curso, {cedula: argv.cedula, nombre: argv.nombre}))
  })

  app.get('/preinscripcion2', function (req, res) {
      req.
    res.send(misCursos.preinscripcion(req.query.curso, {cedula: req.query.cedula, nombre: req.query.nombre}))
  })

  app.get('/preinscritos', function (req, res) {
    res.send(misCursos.mostrarPreinscritos())
  })

  app.use(express.static(__dirname +  '/public')); 
  app.listen(3000)
  