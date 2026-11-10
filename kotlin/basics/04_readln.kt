fun main() {
    println("Inputs en terminal Readline")
    println("¿Como te llamas?")
    val nombre = readln()
    println("Welcome a otro universo : $nombre")

    println("Cristales de Rick:")
    val cristalesRick = readln().toInt()

    println("Cristales de Morty:")
    val cristalesMorty = readln().toIntOrNull() ?: 0

    val total = cristalesRick + cristalesMorty
    println("Total de Cristales: $total")

    println("Calculadora de Energia")
    println("Energia Inicial:")
    val energiaInicial = readln().toInt()

    println("Energia Consumida: ")
    val energiaConsumida = readln().toInt()

    val energiaRestante = energiaInicial - energiaConsumida
    println("Energia restante: $energiaRestante")
}