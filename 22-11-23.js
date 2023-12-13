let num1 = 43;
let num2 = 78;
let num3 = 14;

const numeroMayor = (num1, num2, num3) => {
  let arregloNum = [num1, num2, num3];
  let numMayor = arregloNum[0];
  for (let i = 1; i < arregloNum.length; i++) {
    if (numMayor < arregloNum[i]) {
      numMayor = arregloNum[i];
    }
  }
  return numMayor;
};

let elMayor = numeroMayor(num1, num2, num3);
console.log(elMayor);

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.
/*
let num1 = 13;
let num2 = 1663;
let num3 = 3363;
let num4 = 588;
*/

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.
/*
const numeroMayor = (num1, num2, num3, num4) => {
    let arregloNum = [num1, num2, num3, num4];
    let numMayor = arregloNum[0];
    for (let i = 1; i < arregloNum.length; i++) {
      if (numMayor < arregloNum[i]) {
        numMayor = arregloNum[i];
      }
    }
    return numMayor;
  };
  
  let elMayor = numeroMayor(num1, num2, num3, num4)
  console.log(elMayor)
  
const numeros = [5, 12, 2, 40, 33, 2, 8];

const numeroMayor = (arreglo) => {
    
    let numMayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (numMayor < arreglo[i]) {
        numMayor = arreglo[i];
      }
    }
    return numMayor;
  };
  
  let elMayor = numeroMayor(numeros)
  console.log(elMayor)*/

/**Escribir un programa que muestre en pantalla los números del 1 al 100,
 sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
 “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
 por la palabra “fizzbuzz” 

 const numPrimos = num => {

    for (let i = 1; i < num + 1; i++) {
        if  (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

let numerosPrimosONo = numPrimos(100)
numerosPrimosONo */

/**Escriban una función que reciba dos parámetros: un array y un índice. La
 función deberá de mostrar por consola el valor del elemento según el
 índice dado. Por ejemplo, dada la siguiente array e índice, la función
 imprimirá '6'. let array =
 [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1 */

//console.log(array[varIndex])

const imprimirElemento = (array, indice) => {
  return array[indice];
};

let array1 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
let indice = 1;

let elemento = imprimirElemento(array1, 2);
console.log(elemento);

/**Escribir una función que, dado un número de mes, devuelva la cantidad
 de días de ese mes —suponiendo que no es un año bisiesto—. */

/**function finDeSemana (dia) {
    switch(dia) {
        case 'viernes':
            console.log('buen finde')
            break
        case 'lunes':
            console.log('buena semana')
            break
        default:
            console.log('buen dia')
    }
} */

const diasMes = (numero) => {
  if (
    numero === 1 ||
    numero === 3 ||
    numero === 5 ||
    numero === 7 ||
    numero === 8 ||
    numero === 10 ||
    numero === 12
  ) {
    console.log(31);
  } else if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    console.log(30);
  } else {
    console.log(28);
  }
};

let numeroDiasMes = diasMes(2);
numeroDiasMes;

/**Escribir una función de JavaScript que invierta un número. Por ejemplo,
 si x = 32443, la salida debería ser 34423. */

//let numeroS = '32443';
//console.log(Number(numeroS))
//console.log(numeroS.split(''))

//let numeroString = numero.toString();
//console.log(numeroString);

const reverseNumero = (numero) => {
  let numeroRevertido = undefined;
  let numeroStringReverse = [];
  let numeroString = numero.toString();
  let numStrArr = numeroString.split("");

  for (let i = numStrArr.length - 1; i > -1; i--) {
    numeroStringReverse.push(numStrArr[i]);
    numeroRevertido = Number(numeroStringReverse.join(""));
  }
  return numeroRevertido;
};

let newNumber = reverseNumero(123);
console.log(newNumber);

/*Escribir una función que reciba una array y solo imprima los valores que
 se repiten. */

let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

const capturaRepetidos = arreglo => {

  let arregloUno = []
  let arregloDos = []
  
  for (i = 0; i < arreglo.length; i++) {

    if (arregloUno.includes(arreglo[i])) {
      
      arregloDos.push(arreglo[i])

    } else {

      arregloUno.push(arreglo[i])

    }
  } return arregloDos
} 

let arregloRetornado = capturaRepetidos(array)
console.log(arregloRetornado)
