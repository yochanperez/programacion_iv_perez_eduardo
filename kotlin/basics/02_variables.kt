const val MAX_PORTALES= 10

fun main(){
    var energia = 100
    println(energia)
    println("Autor: Eduardo Pérez")
    energia = 80
    println("energia")
    println(energia)
    println("Tipos de Variables en kotlin")
    var edad: Int = 14
    var portales: Int = 10
    print("edad: $edad")
    print("portales: $portales")
    println("Tipo Long")
    var particulas: Long = 900000000L
    print("particulas: $particulas")
    println("Tipo Float")
    var combustible: Float = 3.14F
    print("combustible: $combustible")
    println("Tipo Double")
    var gravedad: Double = 9.81
    print("gravedad: $gravedad")
    println("Tipo Char")
    var letra: Char = 'A'
    print("letra: $letra")
    println("Tipo string")
    var nombre: String = "Eduardo"
    print("nombre: $nombre")
    var dimension: String = "137"
    print("Nombre: $nombre, Dimension: $dimension")
    println("Tipo Boolean")
    var portalActivo: Boolean = true
    print("portalActivo: $portalActivo")

    println("Val Const Var")
    val cientifico = "Rick Sanchez"
    var portalesDisponibles = 5
    println("cientifico: $cientifico, portalesDisponibles: $portalesDisponibles")
    println("Constante MAX_PORTALES: $MAX_PORTALES")


    
}