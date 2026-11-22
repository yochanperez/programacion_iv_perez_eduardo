data class Conferencia(val titulo: String, val inscritos: Int)

fun main() {
    var recaudacionTotal = 0.0
    println("Cálculo de Venta de Paquetes Corporativos")

    for (paquete in 1..6) {
        val costoOriginal = paquete * 25.0
        var descuento = 0.0

        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento

        println("Paquete $paquete")
        println("Costo Original: $costoOriginal")
        println("Descuento: $descuento")
        println("Costo Final: $costoFinal")
        println("---")

        recaudacionTotal += costoFinal
    }

    println("Recaudación total de paquetes: %.2f dólares".format(recaudacionTotal))

    val conferencias = arrayOf(
        Conferencia("Introducción a Kotlin", 30),
        Conferencia("Cloud Computing", 65),
        Conferencia("Seguridad Informática", 95),
        Conferencia("Inteligencia Artificial", 130),
        Conferencia("Diseño UX/UI", 45),
        Conferencia("Arquitectura de Software - Eduardo", 89),
        Conferencia("Bases de Datos - Perez", 75)
    )

    val aforoMinimo = 50
    for (conf in conferencias) {
        println("Conferencia: ${conf.titulo}")
        println("Inscritos: ${conf.inscritos}")
        when {
            conf.inscritos < 50 -> {
                println("Estado: CANCELADA")
                println("No cumple con el mínimo de asistentes")
            }
            conf.inscritos < 80 -> {
                println("Estado: SALA PEQUEÑA")
            }
            conf.inscritos < 120 -> {
                println("Estado: SALA MEDIANA")
            }
            else -> {
                println("Estado: AUDITORIO PRINCIPAL")
            }
        }
        if (conf.inscritos >= aforoMinimo) {
            val excedente = conf.inscritos - aforoMinimo
            println("Conferencia confirmada")
            println("Asistentes por encima del mínimo: $excedente")
        }
        println("---")
    }
}