fun main(){
    val COMBUSTIBLE_MINIMO = 50
    
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
    val combustible= 100+20/4*3
    println("Combustible: $combustible")

    println("Operadores de Comparacion")
    println("Igualdad: ${numero1 == numero2}")
    println("Desigualdad: ${numero1 != numero2}")
    println("Mayor que: ${numero1 > numero2}")
    println("Menor que: ${numero1 < numero2}")
    println("Mayor o igual que: ${numero1 >= numero2}")
    println("Menor o igual que: ${numero1 <= numero2}")

    println("Operadores Logicos")
    println("&& and Y")
    println("|| or O")
    println("! not NO")

    val combustible = 100
    val portalActivo = true

    val puedeViajar = combustible >= 50 && portalActivo

    println("Puede viajar? $puedeViajar")

    val tieneTarjeta = false
    val autorizadoPoRick = true
    val puedeEntrar = tieneTarjeta || autorizadoPoRick

    println("Puede entrar? $puedeEntrar")

    println("Control de Nave - Rick Sanchez y Eduardo Perez")

    val pilotoNave = "Eduardo Perez"
    val combustibleNave = 100
    val motorActivoNave = true
    val portalUniverso = 5

    println("Piloto: $pilotoNave")
    combustibleNave += 40
    portalUniverso --
    println("Combustible: $combustibleNave")
    println("Portales restantes: $portalUniverso")
    val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
    val tienePortales = portalUniverso > 0
    val puedeViajar = tieneCombustible && tienePortales && motorActivoNave
    println("Tiene combustible? $tieneCombustible")
    println("Tiene portales? $tienePortales")
    println("Puede viajar? $puedeViajar")
}