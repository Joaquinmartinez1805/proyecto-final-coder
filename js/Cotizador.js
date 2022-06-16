class Cotizador {
    constructor(m2, valorM2, ambiente) {
        this.metros2 = m2 
        this.valorM2 = valorM2
        this.ambientes = ambiente
        this.ambientes = () => { 
            switch (this.ambientes) {
                case 1:
                    return 1.09
                case 2:
                    return 1.10
                case 3:
                    return 1.04
                case 4:
                    return 1.19
                default: 
                    return 1.00
            }
        }
        this.cotizarPoliza = () => {
                const factorResidencia = this.ambientes()
                const resultado = (this.metros2 * valorM2) * factorResidencia
                return parseFloat(resultado.toFixed(2))
        }
    }
}