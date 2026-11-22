data class CredencialAcceso(
    val nivelAcceso: Int,
    val activa: Boolean
)

fun main() {
    for (i in 1..5) {
        println("Revisando Sala Nro. $i")
    }

    for (i in 10 downTo 1) {
        println("Cuenta regresiva para inicio de conferencia: $i")
    }

    for (i in 1..20 step 2) {
        println("Asignando asiento impar Nro. $i")
    }

    for (i in 1..10) {
        val asientos = 15 * i
        println("15 asientos * $i filas = $asientos lugares")
    }
}