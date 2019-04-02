window.cipher = {

  // Función de cifrado
  encode: (num, text) => {
    // convertir letra a ascii y luego aplicar formula
    let result='';
    let asciiText='';
for(let i = 0; i < text.length; i++){
  asciiText = text.charCodeAt(i);
      // cifrado con mayúscula.
  if(asciiText >= 65 && asciiText <= 90){
     asciiText = String.fromCharCode((asciiText - 65 + (parseInt(num))) % 26 + 65);
      }
      // Cifrado con minúsculas.
  if(asciiText >= 97 && asciiText <= 122) {
     asciiText = String.fromCharCode((asciiText - 97 + (parseInt(num))) % 26 + 97);
      }
      result += asciiText
    }  
    return result;
  },

  //Función descifra un texto 
  decode: () => {
    /* Acá va tu código */
  }
};
