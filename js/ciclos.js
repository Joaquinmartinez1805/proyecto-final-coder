//ciclos for estatico//
// for( let i = 0; i< 22; i++){
//     console.log("conteo nro.", i)

// ciclo for dinamico
// let limite = prompt("ingrese un numero de 2 cifras")
    
//     limite =parseInt (limite)
    
//     for(i = 0;i < limite; i++){
//         if(i==10){
//             // break
//             continue
//         }
//         console.log("conteo nro.", i)

//     }

// ciclo while
// let repetir = true

// while(repetir) {
//     let nro = parseInt( prompt("ingrese un numero mayor a 21"))
//     if(nro>= 21){
//         repetir= false
//         console.log("al fin!!", nro)
//     }

// }

//do while
// let repetir = true

// do {
//     let nro = parseInt( prompt("ingrese un numero mayor a 21"))
//     if(nro>= 21){
//         repetir= false
//         console.log("al fin!!", nro)
//     }

// }while(repetir)

// switch
//ejercicio con swicht

// let color = prompt("elija un color de prenda:")
// switch (color) {
//     case "white":
//         console.log("tenemos stock en ese color!")
        
//         break;
//         case "black":
//             console.log("tenemos stock en ese color!")
            
//             break;
//             case "red":
//                 console.log("tenemos stock en ese color!")
                
//                 break;
//                 case "blue":
//                     console.log("no tenemos stock en ese color!")
                    
//                     break;
//                     case "green":
//                         console.log("tenemos stock en ese color!")
                        
//                         break;

//     default:
//         console.warn("no tenemos ese color ")
//         break;
// }

//funciones
//     function calcular (){
//     let primernro = prompt("ingrese el primer numero: ")
//     let segundonro = prompt("ingrese segundo numero: ")
//     let resultado = parseFloat(primernro) + parseFloat(segundonro)
//     console.log("resultado de la operacion: ", resultado)
// }
// calcular()

    //funcion con parametros
    // function calcular (parametro1, parametro2){
    //     console.log("resultado:",parseFloat(parametro1) * parseFloat(parametro2))
    // }
    // function pedirnumeros() {
    //     let primernro = prompt("ingrese 1er numero: ")
    //     let segundonro =prompt("ingrese 2do numero: ")
    //     calcular(primernro, segundonro)
    // }
    // pedirnumeros()


    //funcion con parametros + retorno

    // function calcular (){        
    //     let primernro = prompt("ingrese 1er numero: ")
    //     let segundonro =prompt("ingrese 2do numero: ")
    //     console.log("resultado:",realizarcalculo(primernro, segundonro))

    // }
    // function realizarcalculo(param1,param2){
    //     let resultado = parseFloat(param1)+ parseFloat(param2)
    //     return resultado
    // }
    // calcular()


    //objetos!!   OBJETOS LITERALES
    // const nombre = "joaquin martinez"
    // const edad = "29"
    // const pais = "argentina"
//    
//    
    // const empleado1 = {
    //     nombre:"lorena diaz", 
    //     cargo: "salesman",
    //     empresa: "muller"
    // }

    // function saludar () {
    //     console.log ("hola", empleado1.nombre)
    // }
    // function cambiarnombre(){
    //     let nn = prompt ("ingrese nuevo nombre: ")
    //     empleado1.nombre = nn
    // }

    //FUNCION CONSTRUCTORA


//   function Empleado (nombre, cargo, empresa){
//       this.nombre = nombre
//       this.cargo = cargo
//       this.empresa = empresa
// }
// const empleado1 = new Empleado ("joaquin martinez","desarrollador","cofarsur")
// const empleado2 = new Empleado ("lorena diaz","it","cofarsur")
// const empleado3 = new Empleado ("jorge martinez","seo","cofarsur")
// const empleado4 = new Empleado ("bartola martinez","empleado","cofarsur")