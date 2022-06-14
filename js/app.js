function cotizarUnaNuevaPoliza() {
    debugger
    m2 = parseInt(prompt("Ingresa los Metros2 de la vivienda:"))
    zona = parseInt(prompt("¿En qué zona vives? \n 0: Ciudad \n 1: Conurbano \n 2: Pueblo \n 3: Barrio Privado"))
    
    const cotizadorHogar = new Cotizador(m2, valorM2, zona)
    const costoDelSeguro = cotizadorHogar.cotizarPoliza()
    console.log("El costo del seguro de hogar, es: ARS", costoDelSeguro)
}
cotizarUnaNuevaPoliza()

// function obtenerComisionDelProductor() {
//     const cotizadorHogar = new Cotizador(m2, valorMetro2Seguro, zona)
//     const comisionProd = cotizadorHogar.comisionDelProductor()
//     console.log("La comisión para el Producto de Seguros, es: $", comisionProd)
// }