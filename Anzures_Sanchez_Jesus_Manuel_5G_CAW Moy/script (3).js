//defincicion de la calse persona
class Persona {
    //metodo Constructor
    constructor(x, y) {
        this.nombre = x;
        this.edad = y;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`;
    }
}

const persona1 = new Persona("Juan", 20);

document.getElementById("resultado").textContent = persona1.saludar(); 