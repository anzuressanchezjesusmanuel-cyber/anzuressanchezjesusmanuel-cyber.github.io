//definicion de la clase Persona
class Persona {
    //Metodo Constructor
    constructor(x,y){
        this.nombre = x;
        this.edad = y;
}

saludar(){
    return"Hola mi nombre es $(this.nombre) y tengo $(this.edad)";
   }
}

const personal = new Persona("Juan", 20);

document.getElementById("resultado").innerHTML = personal.saludar();