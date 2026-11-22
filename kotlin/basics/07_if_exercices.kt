data class PistolaPortal(
    val energia: Int,
    val activa: Boolean
)

data class Robot(
    val nombre: String,
    val bateria: Int
)

data class NaveEspacial(
    val energia: Int,
    val motorActivo: Boolean,
    val autorizacion: Boolean
)

fun main() {
    val pistola = PistolaPortal(80, true)
    if (pistola.energia >= 50 && pistola.activa) {
        println("Rick puede abrir el portal")
    }

    val radiacion = arrayOf(20, 45, 85, 30, 60)
    if (radiacion[2] > 2) {
        println("!Peligro! Dimension con alta radiacion")
    } else {
        println("Radiacion moderada")
    }

    val pruebas = arrayOf(80, 65, 90)
    val suma = pruebas[0] + pruebas[1] + pruebas[2]
    val promedio = suma / 3.0
    println("Promedio $promedio")
    if (promedio >= 70) {
        println("Portal estable")
    } else {
        println("Portal inestable")
    }

    val robot = Robot("Robot ayudante", 65)
    println("Nombre del robot: ${robot.nombre}")
    if (robot.bateria >= 80) {
        println("Funcionamiento optimo")
    } else if (robot.bateria >= 50) {
        println("Funcionamiento normal")
    } else if (robot.bateria >= 20) {
        println("Bateria Baja")
    } else {
        println("Estado critico")
    }

    val nave = NaveEspacial(120, true, false)

    if (nave.energia >= 100) {
        if (nave.motorActivo) {
            if (nave.autorizacion) {
                println("Nave lista para despegar")
            } else {
                println("Morty no tiene autorizacion")
            }
        } else {
            println("Motor apagado")
        }
    } else {
        println("Energia insuficiente")
    }
}