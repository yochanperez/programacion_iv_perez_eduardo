fun main() {
    val aforosSalas = arrayOf(30, 50, 80, 100, 60)
    println(aforosSalas[0])
    println(aforosSalas[2])
    println(aforosSalas[4])

    aforosSalas[4] = 150
    println(aforosSalas[4])

    for (aforo in aforosSalas) {
        println("Aforo base: $aforo")
        val aforoAmpliado = aforo * 2
        println("Aforo con ampliación: $aforoAmpliado")
        if (aforoAmpliado >= 150) {
            val aforoAjustado = aforoAmpliado - 70
            println("Aforo ajustado por normativa de seguridad: $aforoAjustado")
        }
    }
}