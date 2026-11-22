data class SalaConferencia(
    val capacidad: Int,
    val disponible: Boolean
)

data class Ponente(
    val nombre: String,
    val puntuacionEvaluacion: Int
)

data class Evento(
    val asistentesConfirmados: Int,
    val sonidoListo: Boolean,
    val permisoMunicipal: Boolean
)

fun main() {
    val sala = SalaConferencia(120, true)
    if (sala.capacidad >= 50 && sala.disponible) {
        println("Se puede agendar la conferencia en esta sala")
    }

    val decibelesSalas = arrayOf(40, 55, 92, 48, 60)
    if (decibelesSalas[2] > 85) {
        println("¡Alerta! Nivel de ruido excesivo en la Sala 3")
    } else {
        println("Nivel de sonido adecuado")
    }

    val calificacionesCharlas = arrayOf(85, 75, 95)
    val suma = calificacionesCharlas[0] + calificacionesCharlas[1] + calificacionesCharlas[2]
    val promedio = suma / 3.0
    println("Promedio de satisfacción: $promedio")
    if (promedio >= 70) {
        println("Evento altamente valorado")
    } else {
        println("Evento requiere mejoras")
    }

    val ponente = Ponente("Carlos Vega", 85)
    println("Nombre del ponente: ${ponente.nombre}")
    if (ponente.puntuacionEvaluacion >= 80) {
        println("Ponente Keynote Principal")
    } else if (ponente.puntuacionEvaluacion >= 50) {
        println("Ponente de Taller Regular")
    } else if (ponente.puntuacionEvaluacion >= 20) {
        println("Ponente en Lista de Espera")
    } else {
        println("Propuesta rechazada")
    }

    val evento = Evento(150, true, false)
    if (evento.asistentesConfirmados >= 100) {
        if (evento.sonidoListo) {
            if (evento.permisoMunicipal) {
                println("Congreso listo para abrir puertas")
            } else {
                println("Falta aprobación del permiso municipal")
            }
        } else {
            println("El equipo de audio aún no está listo")
        }
    } else {
        println("Asistentes insuficientes para abrir el auditorio")
    }
}