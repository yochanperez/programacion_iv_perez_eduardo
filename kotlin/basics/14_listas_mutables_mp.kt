fun main() {
    val conferencias = mutableListOf(
        "Keynote Apertura",
        "Taller de Kotlin",
        "Panel de Ciberseguridad"
    )

    var option: Int
    do {
        println("\nGestor de Conferencias de Pérez Eduardo")
        println("1. Agregar Conferencia")
        println("2. Mostrar Conferencias")
        println("3. Modificar Conferencia")
        println("4. Eliminar Conferencia")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()!!.toInt()

        when (option) {
            1 -> {
                println("Ingrese el título de la conferencia:")
                val titulo = readLine()!!
                conferencias.add(titulo)
                println("Conferencia agregada exitosamente")
            }
            2 -> {
                println("Conferencias programadas:")
                for (conf in conferencias) {
                    println("Conferencia: $conf")
                }
            }
            3 -> {
                println("Actualizar Conferencia")
                println("Índice a modificar:")
                val indice = readLine()!!.toInt()
                if (indice in conferencias.indices) {
                    println("Nuevo título de la conferencia:")
                    val nuevoTitulo = readLine()!!
                    conferencias[indice] = nuevoTitulo
                    println("Conferencia actualizada")
                } else {
                    println("Índice inválido")
                }
            }
            4 -> {
                println("Eliminar Conferencia")
                println("Índice a eliminar:")
                val indice = readLine()!!.toInt()
                if (indice in conferencias.indices) {
                    conferencias.removeAt(indice)
                    println("Conferencia eliminada")
                } else {
                    println("Índice inválido")
                }
            }
            5 -> {
                println("Saliendo del gestor...")
            }
            else -> {
                println("Opción inválida")
            }
        }
    } while (option != 5)
}