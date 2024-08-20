let textoCifradoDesencriptado = ''; 

function encriptar() {
    let texto = document.getElementById("texto").value;
    let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    textoCifradoDesencriptado = cifrarCesar(texto, desplazamiento);
    document.getElementById("resultado").textContent = "Texto Cifrado: " + textoCifradoDesencriptado;
    document.getElementById("copiarBtn").style.display = 'inline';
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    textoCifradoDesencriptado = descifrarCesar(texto, desplazamiento);
    document.getElementById("resultado").textContent = "Texto Desencriptado: " + textoCifradoDesencriptado;
    document.getElementById("copiarBtn").style.display = 'inline';
}

function copiarTexto() {
    navigator.clipboard.writeText(textoCifradoDesencriptado).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}

function cifrarCesar(texto, desplazamiento) {
    let resultado = '';
    
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char >= 'A' && char <= 'Z') {
            let nuevoCodigo = (char.charCodeAt(0) - 65 + desplazamiento) % 26 + 65;
            resultado += String.fromCharCode(nuevoCodigo);
        } else if (char >= 'a' && char <= 'z') {
            let nuevoCodigo = (char.charCodeAt(0) - 97 + desplazamiento) % 26 + 97;
            resultado += String.fromCharCode(nuevoCodigo);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

function descifrarCesar(texto, desplazamiento) {
    return cifrarCesar(texto, -desplazamiento);
}
