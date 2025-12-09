class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        return `${this.nombre} hace un sonido.`;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); //Llama al constructor de la clase padre
        this.raza = raza; 
    }

    hacerSonido() {
        return `${this.nombre} ladra.`;
    }

    comer() {
        return `${this.nombre} esta comiendo .`;
    }

    moverse() {
        return `${this.nombre} se estta moviendo.`;
    }

    salta() {
        return `${this.nombre} esta saltando.`;
    }
}

const miAnimal = new Animal('Animal generico');
const miPerro = new Perro('Firulais', 'Corriente cruzado con caallejero');

document.write("<p>" + miAnimal.hacerSonido() + "</p>");
document.write("<p>" + miPerro.hacerSonido() + "</p>");
document.write("<p>" + miPerro.comer() + "</p>");
document.write("<p>" + miPerro.moverse() + "</p>");
document.write("<p>" + miPerro.salta() + "</p>");