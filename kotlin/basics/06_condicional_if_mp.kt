fun main() {
    println("Condicional If - Validación de Aforo de Conferencia")
    println("Condicional Simple / Múltiple")

    val inscritos = 85

    if (inscritos >= 100) {
        println("Se habilita el Auditorio Principal para la conferencia")
    } else if (inscritos >= 50) {
        println("Aforo suficiente para realizar el evento en Sala Mediana")
    } else {
        println("Aforo insuficiente, reprogramar sesión")
    }
}