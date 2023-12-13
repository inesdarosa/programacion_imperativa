const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]


const modelosAutos = array => {

    let newArray = []
    for (let i = 0; i < array.length; i++) {

        if (array[i].modelo >= 2020) {

            newArray.push(array[i])
        }
    } return newArray

}

let arrayNuevo = modelosAutos(autos)
console.log(arrayNuevo)


let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]


const arrayDescendente = array => {

    let temporal = undefined
    
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - 1; j++) {

            if (array[j].notaPromedio < array[j + 1].notaPromedio) {

                temporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temporal
            }
        }
    }
}

arrayDescendente(estudiantes)
console.log(estudiantes)


let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]


const arregloColumna = (mat, columna) => {

    let arrayColumna = []

    for (let i = 0; i < mat.length; i++) {

        arrayColumna.push(mat[i][columna])

    } return arrayColumna
}

let soloColumna = arregloColumna(matrix, 2)
console.log(soloColumna)


const modifcarMatriz = mat => {

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {

            if (mat[i][j] % 2 !== 0) {

                mat[i][j] = 0
            }
        }
    }
}

modifcarMatriz(matrix)
console.table(matrix)