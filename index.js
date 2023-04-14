// Tomamos los elementos necesarios para el programa
var textoOrigen = document.getElementById("encrypt-text");
var textoEncriptado = document.getElementById("decrypt-text");
var accionEncriptar = document.querySelector("#encrypt");
var accionDesencriptar = document.querySelector("#desencriptar");
var accionCopiar = document.querySelector("#copy")
// Desactivamos la escritura en el segundo textArea
textoEncriptado.disabled = true


//creamos la funcion que encriptara el codigo y funcionara con el boton Encriptar
accionEncriptar.onclick = function() {
    //Creamos una variable que solo funcionara en la funcion
    // El valor del textArea lo pasamos a una variable local
    // Nos aseguramos que sea en minuscula
    var textoEncriptado = textoOrigen.value.toLowerCase();
    // Utilizamos el replace para cambiar las vocales
    let resultadotexto = textoEncriptado.replace (/[aeiou]/g, function (letra) { 
        switch(letra) {
            case 'a':
                return "ai"
            case 'e':
                return "enter"
            case 'i':
                return "imes"
            case 'o':
                return "ober";
            case 'u':
                return "ufat"
            default:
                break;
        }
    })        

    //insertamos el texto encriptado en el área de texto
    document.getElementById("decrypt-text").value = resultadotexto;
    // Quitamos el texto encriptado
    document.getElementById("encrypt-text").value = "";
};

accionDesencriptar.onclick = function() {
    //Creamos una variable que solo funcionara en la funcion
    // El valor del textArea lo pasamos a una variable local
    // Nos aseguramos que sea en minuscula
    var textoEncriptado = textoOrigen.value.toLowerCase();
    // Utilizamos el replace para cambiar las vocales
    let resultadotexto = textoEncriptado.replace(/(ai|enter|imes|ober|ufat)/g, function (letra) { 
        switch(letra) {
            case 'ai':
                return "a"
            case 'enter':
                return "e"
            case 'imes':
                return "i"
            case 'ober':
                return "o";
            case 'ufat':
                return "u"
            default:
                break;
        }
    })    
        //insertamos el texto desencriptado en el área de texto
        document.getElementById("decrypt-text").value = resultadotexto;

        //limpiamos el textarea
        document.getElementById("encrypt-text").crypt-text
};

// Hacemos la funcion de copiar

accionCopiar.onclick = function () {
    //creamos una variable donde guardar el texto
    var copiarEncriptado = document.getElementById("decrypt-text").value
    navigator.clipboard.writeText(copiarEncriptado);
    //Se copia el texto al primer textarea y se elimina el texto del segundo
    document.getElementById("encrypt-text").value = copiarEncriptado
    document.getElementById("decrypt-text").value = "";
}