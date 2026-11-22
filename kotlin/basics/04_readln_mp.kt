fun main() {
    println("Inputs en terminal Readline - Registro de Conferencia")
    println("¿Cómo te llamas?")
    val asistente = readLine()
    println("Bienvenido al Congreso de Tecnología: $asistente")

    println("Entradas vendidas en la mañana:")
    val entradasManana = readLine()!!.toInt()
    println("Entradas vendidas en la tarde:")
    val entradasTarde = readLine()!!.toIntOrNull() ?: 0
    val totalEntradas = entradasManana + entradasTarde
    println("Total de entradas vendidas: $totalEntradas")

    println("Control de Aforo de Sala")
    println("Capacidad Inicial de la Sala:")
    val capacidadInicial = readLine()!!.toInt()
    println("Asistentes que ya ingresaron:")
    val asistentesIngresados = readLine()!!.toInt()
    val asientosLibres = capacidadInicial - asistentesIngresados
    println("Asientos libres restantes: $asientosLibres")
}