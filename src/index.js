// import { createCipher } from "crypto";

/* Llamamos un evento para que el botón ver nos imprima en la pantalla
     lo que se ingresa en el input type password*/
document.getElementById('see').addEventListener('click', () => {
    let vewPass = document.getElementById('user_text').value;
    document.getElementById('yourPass').innerHTML = `${vewPass}`;
})

/* Evento que imprime en la pantalla eltexto cifrado, 
     mediante el botón "btn_encode"*/
document.getElementById('btn_encode').addEventListener('click', () => {
    let numEnc = document.getElementById('offset').value;
    let textEnc = document.getElementById('user_text').value;
    let resultEncode = window.cipher.encode(numEnc, textEnc);
        document.getElementById('result').innerHTML = `${resultEncode}`;
})

/* Evento que imprime en la pantalla eltexto descifrado, 
     mediante el botón "btn_decode"*/
document.getElementById('btn_decode').addEventListener('click', () => {
    let numDec = document.getElementById('offset').value;
    let textDec = document.getElementById('user_text').value;
    let resultDecode = window.cipher.decode(numDec, textDec);
        document.getElementById('result').innerHTML = `${resultDecode}`;
})