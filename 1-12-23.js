// Ordenar elementos del arreglo de forma descendente

let likesUsuario = [5, 2, 8, 6, 20, 14, 7, 6, 18, 3, 9, 11, 24, 4, 5]

const ordenLikes = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j] < arreglo[j + 1]) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenLikes(likesUsuario)
console.log(likesUsuario)

let temperatura = [
    {
        dia: 1,
        mes: 1,
        tempMaxima: 35,
        tempMinima: 15
    },
    {
        dia: 15,
        mes: 3,
        tempMaxima: 25,
        tempMinima: 12
    },
    {
        dia: 12,
        mes: 5,
        tempMaxima: 22,
        tempMinima: 9
    },
    {
        dia: 23,
        mes: 7,
        tempMaxima: 20,
        tempMinima: 3
    },
    {
        dia: 27,
        mes: 9,
        tempMaxima: 28,
        tempMinima: 12
    },
    {
        dia: 7,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 7
    }
]

// a) Ordenar por temperatura mínima de menor a mayor.

const ordenAscenden = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j].tempMinima > arreglo[j + 1].tempMinima) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenAscenden(temperatura)
console.log(temperatura)

// Ordenar por temperatura máxima de mayor a menor

const ordenDescenden = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j].tempMaxima < arreglo[j + 1].tempMaxima) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenDescenden(temperatura)
console.log(temperatura)