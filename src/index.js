// import { createCipher } from "crypto";

/* Llamamos un evento para que el botón ver nos imprima en la pantalla
     lo que se ingresa en el input type password*/

document.getElementById('see').addEventListener('click', () => {
    let vewPass = document.getElementById('userText').value;
    document.getElementById('yourPass').innerHTML = `${vewPass}`;
})

document.getElementById('btnEncode').addEventListener('click', () => {
    let numEnc = document.getElementById('offset').value;
    let textEnc = document.getElementById('userText').value;
    let resultEncode = window.cipher.encode(numEnc, textEnc);
        document.getElementById('result').innerHTML = `${resultEncode}`;
})

document.getElementById('btnDecode').addEventListener('click', () => {
    let numDec = document.getElementById('offset').value;
    let textDec = document.getElementById('userText').value;
    let resultDecode = window.cipher.decode(numDec, textDec);
        document.getElementById('result').innerHTML = `${resultDecode}`;
})