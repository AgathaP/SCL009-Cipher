/* Llamamos un evento para que el botón ver nos imprima en la pantalla
     lo que se ingresa en el input type password*/

document.getElementById('see').addEventListener('click', () => {
    let vewPass = document.getElementById('userText').value;
    document.getElementById('yourPass').innerHTML = `${vewPass}`;
})
