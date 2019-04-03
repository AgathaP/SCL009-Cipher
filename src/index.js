
//Al HOME
document.getElementById('home').addEventListener('click', () => {
    document.getElementById('screen').innerHTML =``;
})
//Evento que me lleva a la pantalla de cifrado.
document.getElementById('change_screen_cipher').addEventListener('click', () => {
        document.getElementById('screen').innerHTML =
        
    `      
     <section id="cipherScreen">
         <h1>ingresa tu número</h1>
       <form>
         <input type="number" name="offset" min="1" max="99" placeholder="N°" id="offset">
       </form>
     
         <input type="password" name="usertext" id="user_text"> 
         <button id="see">ver</button> <br> 
         <p id="yourPass"></p>
         <button type="submit" name="convertir" id="btn_encode">codificar</button>
         <button type="submit" name="convertir" id="btn_decode">decodificar</button>
       <div id="result"></div>
     </section>   
    `
     
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
}) 
     
     //Evento que me lleva a pantalla "About".
     document.getElementById('').addEventListener('click', () => {
         document.getElementById('screen').innerHTML = ``
     })





