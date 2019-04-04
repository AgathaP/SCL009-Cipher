// CARRUSEL
// posición actual reprsentada por los circulos
let currentImage = 0;
function showDot(n) {
    let btn = document.getElementsByClassName('dot');
    for(let i=0; i<btn.length; i++){
        if (btn[i].className.includes('active')){
            btn[i].className = btn[i].className.replace('active', '');
            break;
        }
    }
    btn[n].className += ' active';
}
function showImage(n) {
    // nos devuelve un array con los elementos que contengan el class images.
    let images = document.getElementsByClassName('image');
    // iteramos la clase
    for(let i=0; i<images.length; i++){
        if (images[i].className.includes('current')) {
            images[i].className = images[i].className.replace('current', '');
            break;
        }
    }
    current = n;
    images[n].className += ' current';
    showDot(n);
}

// permite que llegando a la úlima imagen vuelva a mostrarl la primera.
function next() {
    current++;
    if(current > 2){
        current = 0;
    }
    return showImage(current);
}
// ONLOAD
function previous() {
    current--;
    if(current < 0){
        current = 2;
    }
    return showImage(current);
}

// velocidad de intervalos
let speed = 2000;
let play = setInterval('next()', speed);
// cierre del carrusel.

//Al HOME
window.onload

// document.getElementsByClassName('go_home').addEventListener('click', () => {
    let home = document.getElementById('screen').innerHTML = 
    ` 
    <!-- CARRUSEL -->
    <section class="carousel">
       <div class="image current">
         <img src="img/cuentas.jpg" alt="persona con varias cuentas"/>
         <button type="submit" class="btnlink">ññññ</button>
         <div class="text">probando probando 10-4</div>  
       </div>

       <div class="image">
         <img src="img/contraseña-segura.jpg" alt="contraseña"/>
         <button type="submit" class="btnlink">cifra aquí</button>
         <div class="text">probando probando 10-4</div>    
       </div>

       <div class="image">
         <img src="img/El-gatoto.png" alt="app Cipher Chat"/>
         <button type="submit" class="btnlink">Ir a Cipher Chat</button>
         <div class="text">También puedes probar con Cipher Chat.<br> 
           una divertida web de mensajería cifrada</div>  
       </div>

   <!-- flechas -->
       <a href="#" class="previous" onclick="previous();">&#10094;</a>
       <a href="#" class="next" onclick="next();">&#10095;</a>

       <div class="dots">
         <span class="dot active" onclick="showImage(0);"></span>
         <span class="dot" onclick="showImage(1);"></span>
         <span class="dot" onclick="showImage(2);"></span>
       </div>
   <!-- cierre del carousel -->
     </section>
   <button id="go_cipher">ir al cifrado</button>
 </section>
 `;

document.documentElement.scrollTop=0;
// })

//Evento que me lleva a la pantalla de cifrado.
document.getElementById('go_cipher').addEventListener('click', () => {
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
         document.documentElement.scrollTop=0; 
}) 
     
    //  //Evento que me lleva a pantalla "About".
    //  document.getElementById('').addEventListener('click', () => {
    //      document.getElementById('screen').innerHTML = 
    //      `
    //      <h1>About</h1>
    //      <p></p>
    //      `
    //  })





