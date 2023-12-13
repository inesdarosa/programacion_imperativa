
const restarPares = (num1, num2) => {

    if (num1 % 2 === 0 && num2 % 2 === 0) {

        return num1 - num2
    } else {
        return 'Lo siento, uno o mas parámetros no son pares'
    }
 }

 let restapar = restarPares(8, 2)
 console.log(restapar)

 const acceso = (edad, bool) => {

    if (edad >= 18 && bool) {
     return true
    } else if (edad < 18 && bool) {
     return 'Sólo puedes acceder con un adulto acompañante'
     
    } else {
         return false
    }
  }
 
  let accesoRecital = acceso(15, true)
  console.log(accesoRecital)
 


 let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
]


const filtro = array => {
    let nuevoArreglo = []

    for (let i = 0; i < array.length; i++) {
        if (array[i].tipo === 'tecnologia' && array[i].precio >= 50000) {
            
            nuevoArreglo.push(array[i])
        }
        
    } return nuevoArreglo
}

let subListaProductos = filtro(productos)
console.log(subListaProductos)
