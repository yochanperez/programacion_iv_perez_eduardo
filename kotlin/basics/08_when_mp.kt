fun main() {
    val sala = 2
    when (sala) {
        1 -> println("Ubicación: Auditorio Magna")
        2 -> println("Ubicación: Sala Innovación")
        3 -> println("Ubicación: Sala Networking")
        else -> println("Sala no asignada")
    }

    print("Ingrese el día de la semana del evento (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4, 5 -> println("Día de ponencias técnicas y talleres")
        6, 7 -> println("Día de hackathon y clausura")
        else -> println("Día inválido")
    }

    print("Ingrese el porcentaje de ocupación de la sala (0-100): ")
    val ocupacion = readLine()!!.toInt()
    when (ocupacion) {
        in 0..39 -> println("Ocupación baja")
        in 40..79 -> println("Ocupación media")
        in 80..100 -> println("Ocupación alta - Casi lleno")
        else -> println("Porcentaje fuera de rango")
    }

    val presupuestoActual = 800
    val proyectorActivo = true
    val costoAlquiler = 450

    when {
        presupuestoActual >= costoAlquiler && proyectorActivo -> {
            val restante = presupuestoActual - costoAlquiler
            println("Reserva de Sala Autorizada")
            println("Presupuesto restante: $restante")
        }
        presupuestoActual < costoAlquiler && proyectorActivo -> {
            println("Presupuesto Insuficiente")
        }
        !proyectorActivo -> {
            println("El equipo audiovisual está apagado")
        }
    }
}