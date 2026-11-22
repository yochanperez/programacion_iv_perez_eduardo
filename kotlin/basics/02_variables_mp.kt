const val MAX_SALAS = 10

fun main() {
    var cuposDisponibles = 100
    println(cuposDisponibles)
    println("Autor: Eduardo Pérez")
    cuposDisponibles = 80
    println("cuposDisponibles")
    println(cuposDisponibles)

    println("Tipos de Variables en Kotlin - Gestión de Eventos")
    var duracionHoras: Int = 4
    var salasHabilitadas: Int = 10
    println("duracionHoras: $duracionHoras")
    println("salasHabilitadas: $salasHabilitadas")

    println("Tipo Long")
    var codigoRegistro: Long = 900000000L
    println("codigoRegistro: $codigoRegistro")

    println("Tipo Float")
    var tarifaImpuesto: Float = 0.15F
    println("tarifaImpuesto: $tarifaImpuesto")

    println("Tipo Double")
    var precioEntrada: Double = 45.50
    println("precioEntrada: $precioEntrada")

    println("Tipo Char")
    var pabellon: Char = 'A'
    println("pabellon: $pabellon")

    println("Tipo String")
    var organizador: String = "Eduardo"
    println("organizador: $organizador")
    var codigoEvento: String = "CONF-2026"
    println("Organizador: $organizador, Evento: $codigoEvento")

    println("Tipo Boolean")
    var inscripcionesAbiertas: Boolean = true
    println("inscripcionesAbiertas: $inscripcionesAbiertas")

    println("Val Const Var")
    val ponentePrincipal = "Dra. Ana Morales"
    var entradasDisponibles = 50
    println("ponentePrincipal: $ponentePrincipal, entradasDisponibles: $entradasDisponibles")
    println("Constante MAX_SALAS: $MAX_SALAS")
}