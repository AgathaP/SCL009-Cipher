// import { createCipher } from "crypto";

/* Llamamos un evento para que el botón ver nos imprima en la pantalla
     lo que se ingresa en el input type password*/

document.getElementById('see').addEventListener('click', () => {
    let vewPass = document.getElementById('userText').value;
    document.getElementById('yourPass').innerHTML = `${vewPass}`;
})

document.getElementById('btnConvert').addEventListener('click', () => {
    let numUser = document.getElementById('offset').value;
    let textUser = document.getElementById('userText').value;
    let resultEncode = cipher.encode(numUser, textUser);
        document.getElementById('result').innerHTML = `${resultEncode}`;
})