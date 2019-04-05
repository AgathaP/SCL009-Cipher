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
    // Cifrado con números.
  if(asciiText >= 48 && asciiText <= 57) {
      asciiText = String.fromCharCode((parseInt(asciiText) - 48 + (parseInt(num))) % 10 + 48);
    }
      result += asciiText
    }  
    return result;
  },

  //Función descifra un texto 
  decode: (num, text) => {
    let result='';
    let asciiText='';
for(let i = 0; i < text.length; i++){
  asciiText = text.charCodeAt(i);
      // Descifrado con mayúscula.
  if(asciiText >= 65 && asciiText <= 90){
     asciiText = String.fromCharCode((asciiText + 65 - (parseInt(num))) % 26 + 65);
      }
      // Descifrado con minúsculas.
  if(asciiText >= 97 && asciiText <= 122) {
    asciiText = String.fromCharCode((asciiText + 97 - (parseInt(num))) % 26 + 97);
     }
      result += asciiText
    }  
    return result;
  }
};
