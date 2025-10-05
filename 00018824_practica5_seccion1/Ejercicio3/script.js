const estanteria = {
    Libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false,
    },
    {
        nombre: 'Harry Potter y el cali',
        autor: 'J.K. Rowling',
        leido: true,
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
    },
    {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
    },
    {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    }],
    log() {
        const { Libros } = this;
        let resultado = ''
        for (const libro of Libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado} ${prefijo} leido ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado);
    },
    sugerenccia() {
        const noLeidos = this.Libros.filter(libro => !libro.leido);
        const random = Math.floor(Math.random() * noLeidos.length);
        const elementoRandom = noLeidos[random];
        console.log(`Te sugerimos leer ${elementoRandom.nombre} de ${elementoRandom.autor}`);
    }
}

console.log('Listado de libros:');
console.log(estanteria.Libros);
console.log('Estado de lectura:');
estanteria.log();
console.log('Sugerencia de lectura:');
estanteria.sugerenccia();


