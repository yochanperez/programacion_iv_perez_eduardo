fun calcularTotalCostos(costos: List<Double>): Double {
    var total = 0.0
    for (costo in costos) {
        total += costo
        if (costo >= 100.0) {
            println("Gasto elevado detectado: $costo")
        }
    }
    return total
}

fun main() {
    val salas = listOf("Auditorio Principal", "Sala Norte", "Sala Innovación")
    var iteracion: Int = 1
    for (sala in salas) {
        println("Sala $iteracion: $sala")
        iteracion++
    }

    val costosLogistica = listOf(120.50, 45.00, 210.00, 80.25)
    val total = calcularTotalCostos(costosLogistica)
    println("Costo total de logística de Eduardo Perez: $total")
}