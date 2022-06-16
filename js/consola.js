function cotizarUnaNuevaPoliza() {
    debugger
    m2 = parseInt(prompt("Ingresa los Metros2 de tu hogar:"))
    ambiente = parseInt(prompt("¿cuantos ambientes tiene tu hogar? \n 0: (1 o 2 ambientes) \n 1: (3 o 4 ambientes) \n 2: (5 o 6 ambientes) \n 3: (7 o mas ambientes)"))
    
    const cotizadorHogar = new Cotizador(m2, valorM2, ambiente)
    const costoDelSeguro = cotizadorHogar.cotizarPoliza()
    console.log("El costo mensual aproximado seria de: ARS", costoDelSeguro)
}
cotizarUnaNuevaPoliza()
