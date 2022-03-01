import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";


let peticionApi = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((respuesta) => respuesta.json()).then((json) => {
            resolve(json);
        }).catch((error) => {
            reject(error);
        })
    })
}

let animalPreview = (() => {
    const getImage = async () => {
        const { animales } = await peticionApi("http://localhost:5500/animales.json");
        console.log(animales);

        $("#animal").change(() => {
            const animal = $("#animal").val();
            const imagenAnimal = animales.find((item) => item.name == animal).imagen;
            $("#preview").css("background-image", `url("assets/imgs/${imagenAnimal}")`)
            console.log($("#preview").css("background-image"));
        })

    }
    return {
        showImage: () => {
            return getImage();
        }
    }
})();



let modulo = (() => {
    let listaAnimales = [];
    
    window.mostrarModal = (index) => {
        let animalModal = listaAnimales[index]
        $("#exampleModal .modal-body").html("");
        $("#exampleModal .modal-body").html(`
            <img src="assets/imgs/${animalModal.img}" width="100%">
            <div class="text-center text-light">
                <p>${animalModal.edad}</p>
                <p>Comentarios</p>
                <br>
                <p>${animalModal.comentarios}</p>
            </div>
        `);
        $("#exampleModal").modal("show");
    }

    let crearTarjeta = () => {
        $("#Animales").html('');
        listaAnimales.forEach((item, indice) => {
            $("#Animales").append(`
                <div class="card h-30 mx-1" style="width: 14rem;">
                    <img src="assets/imgs/${item.img}" class="card-img-top" alt="${item.nombre}" onClick="mostrarModal(${indice})">
                    <div class="card-footer">
                        <audio controls class="w-100">
                            <source src="${item.sonido}">
                        </audio>
                    </div>
                </div>
            `)
        })
    }

    let agregar = animal => {
        listaAnimales.push(animal);
        crearTarjeta();
    }

    return {
        agregarAnimal: animal => {
            agregar(animal);
        }
    }
})();

$(() => {

    animalPreview.showImage();

    $("#btnRegistrar").click(evento => {
        evento.preventDefault();

        var nombre = $("#animal").val();
        let edad = $("#edad").val();
        let comentarios = $("#comentarios").val();
        let sonido = "";

        switch (nombre) {
            case "Leon":
                var animal = new Leon(nombre, edad, "Leon.png", comentarios, sonido);
                animal.Rugir();
                break;

            case "Lobo":
                var animal = new Lobo(nombre, edad, "Lobo.jpg", comentarios, sonido);
                animal.Aullar();
                break;

            case "Oso":
                var animal = new Oso(nombre, edad, "Oso.jpg", comentarios, sonido);
                animal.Gruñir();
                break;

            case "Serpiente":
                var animal = new Serpiente(nombre, edad, "Serpiente.jpg", comentarios, sonido);
                animal.Sisear();
                break;

            case "Aguila":
                var animal = new Aguila(nombre, edad, "Aguila.png", comentarios, sonido);
                animal.Chillar();
                break;
        }

        if (nombre && edad && comentarios) {
            modulo.agregarAnimal(animal);
        } else {
            alert("Faltan datos por llenar")
        }
    })
});