fun main(){
    println("Operadores")
    println("Operadores Aritmeticos")

    var numero1: Double = 10.50
    var numero2: Double = 5.25
    var suma = numero1 + numero2

    println("Suma: $suma")
    println("Resta: ${numero1 - numero2}")
    println("Multiplicacion: ${numero1 * numero2}")
    println("Division: ${numero1 / numero2}")
    println("Modulo: ${numero1 % numero2}")

    println("Prioridad des los operadores aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val cristales = 10 + 3*5+5
    println("Cristales: $cristales")
    val energia = 3/5*5
    println("Energia: $energia")
}