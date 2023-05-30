
function encriptar(){
    let tex = document.getElementById("texto").value;
    // let Mensaje = document.getElementById("mensaje-principal");
    // let parrafo = document.getElementById("parrafo-in");
    // let imagen = document.querySelector(".img-encrip");

    let textoCifrado = tex
                        .replace (/e/gi, "enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi, "ufat");
                        
        if (document.getElementById("texto").value.length !=0){
            document.getElementById("texto").value = textoCifrado;
            document.getElementById("mensaje-principal").textContent ="texto Encriptado con Exito";
            document.getElementById("parrafo-in").textContent = "";
            document.querySelector(".img-encrip").src = "/img/idea.jpg";
        }else{
            document.querySelector(".img-encrip").src = "/img/img-deco.png";
            alert("Ingresa algun texto");
        }

}