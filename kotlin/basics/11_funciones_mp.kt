fun iniciarCeremonia() {
    println("Preparando escenario principal")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Eduardo Pérez inauguró la Conferencia")
}

fun registrarTaller(nombreTaller: String, dias: Int, horasPorDia: Int) {
    println("Programando taller: $nombreTaller")
    val totalHoras = dias * horasPorDia
    println("Duración total: $totalHoras horas")
}

fun calcularDescuentoEntrada(precio: Double): Double {
    var descuento: Double = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularTotalAsistentes(asistentesPorSala: Array<Int>): Int {
    var total = 0
    for (asistentes in asistentesPorSala) {
        total += asistentes
        if (asistentes >= 100) {
            println("Sala llena con $asistentes asistentes")
        }
    }
    return total
}

fun main() {
    iniciarCeremonia()
    iniciarCeremonia()
    registrarTaller("Backend con Kotlin", 5, 4)
    registrarTaller("Ciberseguridad", 4, 7)

    val descuentoCliente = calcularDescuentoEntrada(123.5)
    println("El asistente Eduardo tiene este descuento: $descuentoCliente")

    val asistentesSalas = arrayOf(30, 50, 80, 100, 60)
    val totalAsistentes = calcularTotalAsistentes(asistentesSalas)
    println("Total de asistentes en el evento: $totalAsistentes")
}