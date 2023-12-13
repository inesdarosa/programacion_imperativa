/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let unaMatriz = [
    [1, 1, 2, 2, 3],
    [12, 23, 32, 2, 1],
    [4, 5, 6, 5, 6],
    [7, 8, 9, 10, 11, 1],
    [2, 3, 5, 4, 5]
]

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const sumMatriz = matriz => {

    let acc = 0
    for (let i = 0; i < matriz.length; i++) {//fila

        for (let j = 0; j < matriz[i].length; j++) {//columna

            acc += matriz[i][j] 
        }
    } return acc
}

let totalMatriz = sumMatriz(unaMatriz)
console.log(totalMatriz)

/**Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
 números. La matriz debe verse así */


 const generarMatriz10por10 = () => {
    let matriz = []
    let counter = 1
    
    for(let fila = 0; fila< 10; fila++){
      matriz[fila] = []
      //console.log(matriz[fila])
      for(let columna = 0; columna < 10; columna++){
        matriz[fila][columna] = counter++
        //console.log(matriz[fila][columna])
      }
    }
    return matriz
  }
  
  let matriz10por10 = generarMatriz10por10();
  console.table(matriz10por10)

  // Opción principal de generador de matrices

  const generarMatriz = ( size ) => {
    const matriz = [];
    let value = 1;
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push( value );
            value++;
        }
        matriz.push(row)
        //console.log(matriz);
    }
    return matriz;
}

console.table(generarMatriz(3));

/** Vamos a generar dos funciones:
 a) Una va a sumar los valores en la diagonal marcada en rojo.
 b) La otra va a marcar los valores de la diagonal marcada en verde.
 Ambas funciones deben devolver un resultado único. */

// a)

/**const recorrerPrincipal = mat => {
    
    for(let i = 0; i < mat.length; i++){
        console.log( mat[i][i] )
    }

} */

const DiagonalPrincipalSuma = (matriz) => {

    let suma = 0
    for (let i = 0; i < matriz.length; i++) {

        suma += matriz[i][i]
    } return suma
}

let matriz2 = generarMatriz(10)
let sumaDiagonalPrincipal = DiagonalPrincipalSuma(matriz2)
console.log(sumaDiagonalPrincipal)

// b)

/**const recorrerSec = mat => {
   for(let i = 0 ; i < mat.length; i++){
        mat[i][mat.length - 1 - i] 
   }
} */

const DiagonalSecundariaSuma = (matriz) => {

    let suma = 0
    for (let i = 0; i < matriz.length; i++) {

        suma += matriz[i][matriz.length - 1 - i]

    } return suma 
}

let sumaDiagonalSecundaria = DiagonalSecundariaSuma(matriz2)
console.log(sumaDiagonalSecundaria)

// EJERCITACION CLASE 17 MATRICES

let arrayMatriz = []

let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]

arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY

console.table(arrayMatriz)

let arrayZ = ["z0","z1","z2"]

arrayMatriz[2] = arrayZ

console.table(arrayMatriz)