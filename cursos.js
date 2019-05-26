const cursos = [
    {
        id: 101,
        nombre: 'Introduccion a la Mecanica Quantica',
        duracion: '10 semanas',
        valor: 25000,
        preinscritos: []
    },
    {
        id: 203,
        nombre: 'Teoria de Cuerdas                  ',
        duracion: '20 semanas',
        valor: 33000,
        preinscritos: []
    },
    {
        id: 401,
        nombre: 'Computacion Quantica               ',
        duracion: ' 8 semanas',
        valor: 15000,
        preinscritos: []
    },
    {
        id: 402,
        nombre: 'operadores Quanticas              ',
        duracion: ' 6 semanas',
        valor: 38000,
        preinscritos: []
    }
]

let cursoActual = 0;
function mostrarCursos(interval) {

    var res = '------------------------------------------<br/>';
    res +=`Cursos Disponible ${new Date()}<br/>`;
    res +='------------------------------------------<br/>';
    cursos.forEach((curso) => {
        res +=`${curso.id}\t${curso.nombre}\t${curso.duracion}\t${curso.valor}<br/>`        
    });
    res +='------------------------------------------<br/>';
    return res;
}

function mostrarPreinscritos() {
    var res ='------------------------------------------<br/>';
    res +=`Cursos Disponible ${new Date()}<br/>`;
    res +='------------------------------------------<br/>';
    cursos.forEach((curso) => res +=`${curso.id}\t${curso.nombre}\t${curso.preinscritos.length}<br/>`);
    res +='------------------------------------------<br/>';
    return res;
}

function preinscripcion(codigoCurso, estudiante) {
    var msg = "";
    var id = parseInt(codigoCurso);
    const curso = cursos.find((x) => x.id === id);
    if(curso) {
        curso.preinscritos.push(estudiante);
        msg = `Estudiante: (${estudiante.cedula}) ${estudiante.nombre}<br/>
        Curso: (${curso.id}) ${curso.nombre}<br/>
        Duracion: ${curso.duracion}<br/>
        Valor: ${curso.valor}<br/>
        `;

    } else {
        msg = `Curso: ${codigoCurso} no existe\nSeleccione uno de los siguientes<br/>`;
        msg += mostrarCursos(0);
    }
    return msg;
}

module.exports = {
    mostrarCursos,
    mostrarPreinscritos,
    preinscripcion
};