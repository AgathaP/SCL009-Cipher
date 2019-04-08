// // CARRUSEL
// // posición actual reprsentada por los circulos
// let current;
// let currentImage = 0;
// function carousel () {
// function showDot(n) {
//     let btn = document.getElementsByClassName('dot');
//     for(let i=0; i<btn.length; i++){
//         if (btn[i].className.includes('active')){
//             btn[i].className = btn[i].className.replace('active', '');
//             break;
//         };
//     };
//     btn[n].className += ' active';
// };

// function showImage(n) {
//     // nos devuelve un array con los elementos que contengan el class images.
//     let images = document.getElementsByClassName('image');
//     // iteramos la clase
//     for(let i=0; i<images.length; i++){
//         if (images[i].className.includes('current')) {
//             images[i].className = images[i].className.replace('current', '');
//             break;
//         };
//     };
  
//     current = n;
//     images[n].className += ' current';
//     showDot(n);
// };

// // permite que llegando a la úlima imagen vuelva a mostrarl la primera.
// function next() {
//     current++;
//     if(current > 2){
//         current = 0;
//     };
//     return showImage(current);
// };
// // ONLOAD
// function previous() {
//     current--;
//     if(current < 0){
//         current = 2;
//     };
//     return showImage(current);
// };

// // velocidad de intervalos
// let speed = 2000;
// let play = setInterval('next()', speed);
// // cierre del carrusel.
// };

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
         <form method="LINK" action="https://agathap.github.io/SCL008-Cipher/src/">
          <button type="submit" class="btnlink">Ir a Cipher Chat</button>
         </form>
         <div class="text">También puedes probar con Cipher Chat.<br> 
           una divertida web de mensajería cifrada</div>  
       </div>

   <!-- flechas -->
       <a href="#" id="previous" onclick="previous();">&#10094;</a>
       <a href="#" id="next" onclick="next();">&#10095;</a>

       <div class="dots">
         <span class="dot active" onclick="showImage(0);"></span>
         <span class="dot" onclick="showImage(1);"></span>
         <span class="dot" onclick="showImage(2);"></span>
       </div>
   <!-- cierre del carousel -->
 </section>
 `;

document.getElementById('next').addEventListener('click', () => {
  
})
document.documentElement.scrollTop=0;

  // trying to make a modal
//Evento que me lleva a la pantalla de cifrado.
document.getElementById('go_modal').addEventListener('click', () => {
      document.getElementById('my_modal').style.display = 'block';
    })

    // cerrando el modal.
document.getElementById('close').addEventListener('click', () => {
      document.getElementById('my_modal').style.display = 'none';
    })

document.getElementById('my_modal').addEventListener('click', () => {
  document.getElementById('my_modal').style.display = 'none';
})

  // Evento que me lleva a la pantalla de cifrado.
document.getElementById('go_cipher').addEventListener('click', () => {
        document.getElementById('screen').innerHTML =
        
    `      
      <h1>ingresa tu número</h1>
      <p id="error_messege"></p>
    <form>
      <input type="number" min="1" max="99" placeholder="N°" id="offset">
    </form>
      <p class="max_characters">18 carácteres máximo
      <input type="password" maxlength="18" id="user_text"> 
      <button id="see">ver</button></p>
    <div id="your_pass"></div>
      <button type="submit" class="convert" id="btn_encode">codificar</button>
      <button type="submit" class="convert" id="btn_decode">decodificar</button>
    <div id="result"></div>

    <button id="delete">Borrar</button>
    `
let errorNumb = 'Tienes que ingresar un número de desplazamiento';
let errorText = 'Tienes que ingresar un texto';
let empty = '';
     
     /* Llamamos un evento para que el botón ver nos imprima en la pantalla
          lo que se ingresa en el input type password*/
          document.getElementById('see').addEventListener('click', () => {
             let vewPass = document.getElementById('user_text').value;
             document.getElementById('your_pass').innerHTML = `${vewPass}`;
             if(vewPass === ''){
              document.getElementById('error_messege').innerHTML = `${errorText}`;
             }else{
               document.getElementById('error_messege').innerHTML = `${empty}`;
             }
         });
     
     /* Evento que imprime en la pantalla eltexto cifrado, 
          mediante el botón "btn_encode"*/
          document.getElementById('btn_encode').addEventListener('click', () => {
             let numEnc = document.getElementById('offset').value;
             let textEnc = document.getElementById('user_text').value;
             let resultEncode = window.cipher.encode(numEnc, textEnc);
                 document.getElementById('result').innerHTML = `${resultEncode}`;
                 //  Mensajes de error
                 if(numEnc === ''){
                  document.getElementById('error_messege').innerHTML = `${errorNumb}`;
                } else if(textEnc === ''){
                  document.getElementById('error_messege').innerHTML = `${errorText}`;
                 }else{
                   document.getElementById('error_messege').innerHTML =`${empty} `;
                 }
         })
    
     /* Evento que imprime en la pantalla eltexto descifrado, 
          mediante el botón "btn_decode"*/
          document.getElementById('btn_decode').addEventListener('click', () => {
             let numDec = document.getElementById('offset').value;
             let textDec = document.getElementById('user_text').value;
             let resultDecode = window.cipher.decode(numDec, textDec);
                 document.getElementById('result').innerHTML = `${resultDecode}`;
                 if(numDec === ''){
                  document.getElementById('error_messege').innerHTML = `${errorNumb}`;
                 }
                  else if(textDec === ''){
                  document.getElementById('error_messege').innerHTML = `${errorText}`;
                 } else {
                  document.getElementById('error_messege').innerHTML = `${empty}`;
                 }
         })   

         document.getElementById('delete').addEventListener('click', () => {
           document.getElementById('offset').value = `${empty}`;
           document.getElementById('user_text').value = `${empty}`;
           document.getElementById('your_pass').innerHTML = `${empty}`;
           document.getElementById('result').innerHTML = `${empty}`;
           document.getElementById('error_messege').innerHTML = `${empty}`;
         })
         document.documentElement.scrollTop=0; 
})

     //Eventos que me llevan a pantalla principal "Home".
document.getElementById('go_home').addEventListener('click', () => {
    document.getElementById('screen').innerHTML = 
      `
      ${home}
      `;
})

document.getElementById('logo').addEventListener('click', () => {
  document.getElementById('screen').innerHTML = 
`
${home}
`;
})

    // Evento que me lleva a pantalla about.
document.getElementById('go_about').addEventListener('click', () =>{
  document.getElementById('screen').innerHTML = 
  `
  <h1>About</h1>
  <p>
    En tiempos dónde todo lo manejamos a través de dispositivos tecnológicos, una de las principales 
    preocupaciones es no olvidar las constraseñas que nos permiten ingresar a nuestras cuentas en distintos 
    citios web, desde foros, facebook, hasta cosas aún más importantes de proteger, como cuentas en páginas 
    de instituciones bancarias. Son demasiadas las contraseñas que debemos manejar a diario, y es además, 
    poco seguro ponerle una misma contraseña a todas nuestras cuentas. Por lo que esta aplicación está 
    pensada en hacer que una misma contraseña sirva para todas nuestras cuentas de manera segura.
  </p>

  <p>
    Como ya sabemos, menejar una misma clave para todas nuestras cuentas en la red, es inseguro, sin embargo, 
    hoy en día nos manejamos casi en su totalidad por medio de internet, por lo que recordar claves distintas
    para todas nuestras cuentas en citios web, se torna complicado. Es por está razón que ***** ofrece 
    simplicidad y seguridad. El usuario deberá recordar una unica clave, ya que lo unico que cambiará en sus 
    contraseñas, entre una página y otra, será el número de desplazamiento que usó al momento de codificarla 
    en nuestro citio. Incluso si recordar esto parece difícil, pensémos en que aunque anontacemos nuestro 
    numero de desplazamiento en un papel, no necesitariamos anotar la contraseña, por lo que aún así nuestras 
    cuentas estarían protegidas.
  </p>
  `
  document.documentElement.scrollTop=0; 
})