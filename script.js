const diccionarioCifrado = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const diccionarioDescifrado = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

// Función para cifrado del texto 
function cifrar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i);
        if (diccionarioCifrado.hasOwnProperty(letra)) {
            resultado += diccionarioCifrado[letra];
        } else {
            resultado += letra;
        }
    }
    return resultado;
}

// Función para descifrar el texto
function descifrar(texto) {
    let resultado = '';
    for (let clave in diccionarioDescifrado) {
        let valor = diccionarioDescifrado[clave];
        while (texto.includes(clave)) {
            texto = texto.replace(clave, valor);
        }
    }
    resultado = texto;
    return resultado;
}

function mostrarBotonCopiar() {
    document.getElementById('copiar').style.display = 'block';
}

document.getElementById('cifrar').addEventListener('click', function() {
    let texto = document.getElementById('entrada').value;
    let resultado = cifrar(texto);


    document.getElementById('resultado').value = resultado;

    mostrarBotonCopiar();
});


document.getElementById('descifrar').addEventListener('click', function() {
    let texto = document.getElementById('entrada').value;
    let resultado = descifrar(texto);


    document.getElementById('resultado').value = resultado;

    mostrarBotonCopiar();
});

document.getElementById('copiar').addEventListener('click', function() {
    let resultado = document.getElementById('resultado').value;


    let elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = resultado;
    document.body.appendChild(elementoTemporal);


    elementoTemporal.select();
    document.execCommand('copy');


    document.body.removeChild(elementoTemporal);


    document.getElementById('pegar').style.display = 'block';
});


document.getElementById('pegar').addEventListener('click', function() {
    navigator.clipboard.readText().then(text => {
        document.getElementById('entrada').value = text;
    });

    document.getElementById('pegar').style.display = 'none';
});

document.getElementById('clear-input').addEventListener('click', function() {
    const entradaField = document.getElementById('entrada');
    const resultadoField = document.getElementById('resultado');

    entradaField.value = '';
    resultadoField.value = '';

    document.getElementById('copiar').style.display = 'none';
    document.getElementById('pegar').style.display = 'none';
    document.getElementById('clear-input').style.display = 'none';
});
