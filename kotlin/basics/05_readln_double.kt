fun main() {
    println("Expedicion interdimensional")
    println("¿nombre del viajero?")
    val nombre = readln()

    println("Cantidad de portales:")
    val portales = readln().toInt()

    println("Costo por portal:")
    val costo = readln().toDouble()

    println("Creditos disponibles:")
    val creditos = readln().toDouble()

    val costoTotal = portales * costo
    val saldo = creditos - costoTotal

    println("Reporte")
    println("Viajero: $nombre")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}