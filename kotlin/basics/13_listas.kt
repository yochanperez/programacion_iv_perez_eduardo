fun calcularEnergiaTotal(energias: Array<Int>){
    var total=0
    for (energia in energias){
        total+=energia
        if (energia>=100){
            println("Sobre Energia $")
        }
    }
    return total
}


fun main(){
    val destinos = listof("Tierra", "Marte", "Saturno")
    var interacion: Int = 1
    for (destino in destinos){
        println("Destino $interacion: $destino")
    }
    val costos = lisof()
    val total = calcularTotal(costos)
    println("Costo total de herramientas de Eduardo Perez: $total")
}