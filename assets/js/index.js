import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";

$(() => {

    let nombreImagen = (() => {
        const getImage = async () => {
            const url = "http://localhost:5500/animales.json";
            const response = await fetch(url);
            const data = await response.json();
            const animalArray = data.animales;
            console.log(animalArray);
            
            $("#animal").change(() => {
                const animal = $("#animal").val();
                const imagenAnimal = animalArray
                .find((item) => item.name == animal)
                .imagen;
                let imagenDinamica = `assets/imgs/${imagenAnimal}`
                $("#preview").css("background-image", "url(" + imagenDinamica + ")")
            })

        }

        return {
            showImage: () => {
                return getImage();
            }
        }
    })();

    nombreImagen.showImage();


    let modulo = (() => {
        let listaAnimales = [];

        let mostrar = () => {

        }

        let agregar = animal => {
            listaAnimales.push(animal)
            mostrar();
        }

        return {
            agregarAnimal: animal => {
                agregar(animal);
            }
        }
    })();


    $("#btnRegistrar").click(evento => {
        evento.preventDefault();

        let nombre = $("#animal").val();
        let instanciaImg = "";
        let instanciaSonido = "";
        let edad = $("#edad").val();
        let img = `assets/imgs/${instanciaImg}`;
        let comentarios = $("").val();
        let sonido = `assets/sounds/${instanciaSonido}`;

        switch (nombre) {
            case "Leon":
                var animal = new Leon(nombre, edad, img, comentarios, sonido);
            break;

            case "Lobo":
                var animal = new Lobo(nombre, edad, img, comentarios, sonido);
            break;

            case "Oso":
                var animal = new Oso(nombre, edad, img, comentarios, sonido);
            break;

            case "Serpiente":
                var animal = new Serpiente(nombre, edad, img, comentarios, sonido);
            break;

            case "Aguila":
                var animal = new Aguila(nombre, edad, img, comentarios, sonido);
            break;
        }

        if (nombre = "") {
            alert("Debe seleccionar un animal");
        }else if (edad = "") {
            alert("Debe seleccionar un rango de edad");
        }else if (comentarios = "") {
            alert("Debe ingresar un comentario");
        }else modulo.agregarAnimal(animal);
    })
});