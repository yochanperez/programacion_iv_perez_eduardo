fun main() {
    val portales = mutableListOf("Tierra", "Marte", "Saturno")

    var option: Int
    do {
        println(" Laboratorio de Pérez Eduardo")
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Salir")
        option = readLine()!!.toInt()
        when (option) {
            1 -> {
                println("Ingrese el nombre del portal:")
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal incluido")
            }
            2 -> {
                println("Portales:")
                for (portal in portales) {
                    println("Portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice a modificar:")
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    println("Nuevo nombre:")
                    val nuevoNombre = readLine()!!
                    portales[indice] = nuevoNombre
                    println("Portal actualizado")
                } else {
                    println("Indice invalido")
                }
            }
            4 -> {
                println("Eliminar")
                println("Indice a eliminar:")
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    portales.removeAt(indice)
                    println("Portal eliminado")
                } else {
                    println("Indice invalido")
                }
            }
            5 -> {
                println("Saliendo...")
            }
            else -> {
                println("Opcion invalida")
            }
        }
    } while (option != 5)
}