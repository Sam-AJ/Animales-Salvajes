export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getSonido = () => _sonido;

        this.setComentarios = (nuevoComentarios) => _comentarios = nuevoComentarios;
        this.setSonido = (nuevoSonido) => _sonido = nuevoSonido;

    }

    get nombre() {
        return this.getNombre();
    }

    get edad() {
        return this.getEdad();
    }
    
    get img() {
        return this.getImg();
    }

    get sonido() {
        return this.getSonido();
    }

    set comentarios(nuevo_comentarios) {
        this.setComentarios(nuevo_comentarios);
    }

    set sonido(nuevo_sonido) {
        this.setSonido(nuevo_sonido);
    }
}