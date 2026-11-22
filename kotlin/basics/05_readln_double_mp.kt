fun main() {
    println("Cotización de Inscripción a Conferencias")
    println("¿Nombre del participante?")
    val participante = readLine()
    println("Cantidad de talleres a inscribir:")
    val talleres = readLine()!!.toInt()
    println("Costo por taller:")
    val costoTaller = readLine()!!.toDouble()
    println("Presupuesto disponible:")
    val presupuesto = readLine()!!.toDouble()

    val costoTotal = talleres * costoTaller
    val saldo = presupuesto - costoTotal

    println("--- Reporte de Inscripción ---")
    println("Participante: $participante")
    println("Costo total: $costoTotal")
    println("Saldo restante: $saldo")
}