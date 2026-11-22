fun main() {
    val AFORO_MINIMO = 50

    println("Operadores - Gestión de Eventos")
    println("Operadores Aritméticos")

    var entradaVip: Double = 50.50
    var entradaGeneral: Double = 25.25
    var suma = entradaVip + entradaGeneral

    println("Suma: $suma")
    println("Resta: ${entradaVip - entradaGeneral}")
    println("Multiplicación: ${entradaVip * entradaGeneral}")
    println("División: ${entradaVip / entradaGeneral}")
    println("Módulo: ${entradaVip % entradaGeneral}")

    println("Prioridad de los operadores aritméticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val asistentesTotales = 10 + 3 * 5 + 5
    println("Asistentes totales: $asistentesTotales")
    val ratioSalas = 3 / 5 * 5
    println("Ratio salas: $ratioSalas")
    val presupuesto = 100 + 20 / 4 * 3
    println("Presupuesto: $presupuesto")

    println("Operadores de Comparación")
    println("Igualdad: ${entradaVip == entradaGeneral}")
    println("Desigualdad: ${entradaVip != entradaGeneral}")
    println("Mayor que: ${entradaVip > entradaGeneral}")
    println("Menor que: ${entradaVip < entradaGeneral}")
    println("Mayor o igual que: ${entradaVip >= entradaGeneral}")
    println("Menor o igual que: ${entradaVip <= entradaGeneral}")

    println("Operadores Lógicos")
    println("&& and Y")
    println("|| or O")
    println("! not NO")

    val inscritos = 100
    val salaDisponible = true
    val puedeIniciarCharla = inscritos >= 50 && salaDisponible
    println("¿Puede iniciar charla? $puedeIniciarCharla")

    val tienePasePrensa = false
    val invitadoPorOrganizador = true
    val puedeEntrarBackstage = tienePasePrensa || invitadoPorOrganizador
    println("¿Puede entrar a backstage? $puedeEntrarBackstage")

    println("Control de Auditorio - Eduardo Perez")
    val coordinador = "Eduardo Perez"
    var asistentesSala = 100
    val audioActivo = true
    var standsLibres = 5

    println("Coordinador: $coordinador")
    asistentesSala += 40
    standsLibres--
    println("Asistentes en sala: $asistentesSala")
    println("Stands libres restantes: $standsLibres")

    val cumpleAforo = asistentesSala >= AFORO_MINIMO
    val hayStands = standsLibres > 0
    val eventoListo = cumpleAforo && hayStands && audioActivo
    println("¿Cumple aforo mínimo? $cumpleAforo")
    println("¿Hay stands disponibles? $hayStands")
    println("¿Evento listo para apertura? $eventoListo")
}