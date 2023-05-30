
function encriptar() {
    let tex = document.getElementById("texto").value;
    let Mensaje = document.getElementById("mensaje-principal");
    let parrafo = document.getElementById("parrafo-in");
    let imagen = document.querySelector(".img-encrip");

    let textoCifrado = tex
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (tex.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        Mensaje.textContent = "texto Encriptado con Exito";
        parrafo.textContent = "";
        imagen.src = "/img/idea.jpg";
    } else {
        imagen.src = "/img/img-deco.png";
        Mensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingresa el Texto que deseas desencriptar";
        alert("Ingresa algun texto");
    }

}

function desencriptar() {
    let tex = document.getElementById("texto").value;
    let Mensaje = document.getElementById("mensaje-principal");
    let parrafo = document.getElementById("parrafo-in");
    let imagen = document.querySelector(".img-encrip");

    
    let textoCifrado = tex
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (tex.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        Mensaje.textContent = "texto Desencriptado con Exito";
        parrafo.textContent = "";
        imagen.src = "/img/fun.jpg";
    } else {
        imagen.src = "/img/img-deco.png";
        Mensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingresa el Texto que deseas desencriptar";
        alert("Ingresa algun texto");
    }
}