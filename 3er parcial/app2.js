class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        return '$(this.nombre) hace un sonido.';
    }

    comer() {
        return '·$(this.nombre) està comiendo.';
    }
    
    moverse(){
        return '·$(this.nombre) se està moviendo.';
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); //Llama al constructor de la clase padre
        this.raza = raza;
    }

    hacerSonido() {
        return '·$(this.nombre) ladra.';
    }
    
    salta(){
        return '·$(this.nombre) salta.';
    }
}

const miAnimal = new Animal('Animal generico');
const miPerro = new Perro ('Firulais', 'Corriente cruzado con callejero');

document.write("<p>" + miAnimal.hacerSonido() + "<p>");
document.write("<p>" + miAnimal.hacerSonido() + "<p>");
document.write("<p>" + miAnimal.comer() + "<p>");
document.write("<p>" + miAnimal.moverse() + "<p>");
document.write("<p>" + miAnimal.salta() + "<p>");
