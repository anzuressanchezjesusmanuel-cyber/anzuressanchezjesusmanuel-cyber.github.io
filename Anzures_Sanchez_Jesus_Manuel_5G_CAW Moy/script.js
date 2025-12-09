class Animal {
    constructor(nombre, especie, edad  = 0) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        thies.energia = 10;

    }

    hacersonido(sonidos) {
        document.write(`<p>${this.nombre} es un ${this.especie} que hace: ${sonido}`);
    }

    comer() {
        this.energia += 5;
        document.write(`<p>${this.nombre} ha comido, su energia ahora es: ${this.energia}`);
    }

    jugar() {
        if(this.emergia >= 4) {
            this.energia -= 4;
            document.write(`<p>¡yuhu! ${this.nombre} esta jugando, le queda: ${this.energia}`);
        } else {
            document.write(`<p>${this.nombre} esta demasiado cansado para jugar, necesita comer.</p>`);
        
        }
    }

    describir() {
        document.write(`<h3>--- ficha de ${this.nombre} ---</h3>`);
        document.write(`<li>Especie: ${this.especie}</li>`);
        document.write(`<li>Edad: ${this.edad}</li>`);
        document.write(`<li>Energia: ${this.energia}</li>`);
        document.write("<li>-------------------------</li>");
    }
}


const tortuga = new Animal("Spenser", "Tortuga" , 15);
const cuyo = new Animal("felipe", "cuyo", 1);
const perro = new Animal("fitu", "perro", 4);
const gato = new Animal("Michi", "Gato");

//tortuga.hacersonido("Glu glu");
//cuyo.hacersonido("cui cul");
//perro.hacersonido("Guau guau");
//gato.hacersonido("Miau miau");


//tortuga.describir();
//cuyo.describir();
//perro.describir();
//gato-describir();

tortuga.describir();
tortuga.comer();
tortuga.describir();