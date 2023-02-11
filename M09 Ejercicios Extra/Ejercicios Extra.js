/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let Array = [];
   Array = Object.entries(objeto)
   return Array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arreglo = string.split('');
   arreglo = arreglo.sort();
   let objeto = {};
   for (i in arreglo) {
      objeto[arreglo[i].toLowerCase()] = (objeto[arreglo[i]]||0) + 1;
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arrestr = string.split('');
   let nuevoarre = [];
      for (let j = 0;j < arrestr.length; j++) {
      if (arrestr[j] === arrestr[j].toUpperCase()) {
         nuevoarre.push(arrestr[j])
      }
      
   }
   for (let i = 0; i < arrestr.length; i++) {
   if (arrestr[i] === arrestr[i].toLowerCase()) {
      nuevoarre.push(arrestr[i])
   }
}
   string = nuevoarre.join('');
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arreglo = frase.split(' ');
   let nuevoarre = []  
   for (let i = 0;i <arreglo.length;i++) {
      let palabra = arreglo[i].split('');
      let inverso = palabra.reverse();
      let unido = inverso.join('');
      nuevoarre.push(unido);
   }
   frase = nuevoarre.join(' ');
   return frase;
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numStr = numero.toString();
   let invStr = numStr.split('').reverse().join('');
   if (invStr === numStr) {
      return 'Es capicua';
   }
   else {
     return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arreglo = string.toLowerCase().split('');
   let nuevoarre = []
   for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === 'a'||arreglo[i] === 'b'||arreglo[i] === 'c') {
      delete(arreglo[i]);
      }
   }
   string = arreglo.join('');
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arreglo;
   for (let i = 0; i < arrayOfStrings.length -1; i++) {
      for (let j = i+1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            arreglo = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = arreglo;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            arreglo.push(array1[i])
         }
      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
