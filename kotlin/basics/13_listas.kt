fun calcularTotal(costos: List<Double>): Double {
    var total = 0.0
    for (costo in costos) {
        total += costo
        if (costo >= 100) {
            println("Sobre Costo $costo")
        }
    }
    return total
}

fun main() {
    val destinos = listOf("Tierra", "Marte", "Saturno")
    var interacion: Int = 1
    for (destino in destinos) {
        println("Destino $interacion: $destino")
        interacion++
    }
    val costos = listOf(45.5, 120.0, 80.25)
    val total = calcularTotal(costos)
    println("Costo total de herramientas de Eduardo Perez: $total")
}