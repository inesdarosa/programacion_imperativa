// LISTA DE CLIENTES DE BANCO
/*
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ]

  let banco = {

    clientes: arrayCuentas,
    consultarCliente: function (titular) {

        for (let i = 0; i < this.clientes.length; i++) {
      
        if (this.clientes[i].titularCuenta.toLowerCase() === titular.toLowerCase()) {
      
            return this.clientes[i] 
          } 
        } return 'No se encuentra en la base'
      },
      deposito: function (titular, dinero) {

        let cliente = this.consultarCliente(titular)

        if (typeof cliente === 'object') {
            //console.log(cliente.saldoEnPesos)
            //console.log(cliente)
            cliente.saldoEnPesos += dinero
            return `Depósito realizado, nuevo saldo es: ${cliente.saldoEnPesos}`
        } else { 
            'No se encuentra en la base'
        } 
      },
      extraccion: function (titular, dinero) {

        let cliente = this.consultarCliente(titular)

        if (typeof cliente === 'object') {

            if (cliente.saldoEnPesos >= dinero) {

                cliente.saldoEnPesos -= dinero
                return `Extracción realizada correctamente, su nuevo\
saldo es: ${cliente.saldoEnPesos}`
            } else {
                return 'Fondos insuficientes'
            }
        } return 'No se encuentra en la base'
      }       
  }

//console.log(banco.consultarCliente("JACKI Shurmer"))
console.log(banco.deposito("Ansel ARDley", 100))
//console.log(banco.extraccion("Ansel ARDley", 100))
*/

const arrayCuentas =
 [
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    },
 ]

/** c) Desarrollar una función que ordeneinternamente de forma ascendente según él
 SALDO de cada cuenta, la misma deberá retornar él array ordenado  */
 
 /** c) Desarrollar una función que ordeneinternamente de forma ascendente según la
 EDAD del titular de cada cuenta, la misma deberá retornar él array ordenado. */


// Esto no funciona

const ordenAscenEdad = (arreglo, propiedad) =>{
    
    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j][propiedad] > arreglo[j + 1][propiedad] ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

ordenAscenEdad(arrayCuentas, 'edadTitular')
console.log(arrayCuentas)


