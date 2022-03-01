import Animal from "./animal.js";

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        this.setSonido("assets/sounds/Chillido.mp3");
    }
}