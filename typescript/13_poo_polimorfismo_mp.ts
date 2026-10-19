"use strict";

class SesionConferencia {
    ejecutar(): void {
        console.log("Inicio de presentación técnica general");
    }
}

class KeynoteMagistral extends SesionConferencia {
    override ejecutar(): void {
        console.log("Apertura oficial con ponente internacional en el auditorio central");
    }
}

class WorkshopInteractivo extends SesionConferencia {
    override ejecutar(): void {
        console.log("Sesión práctica con dinámicas colaborativas en sala de cómputo");
    }
}

const cronogramaDia: SesionConferencia[] = [
    new KeynoteMagistral(),
    new WorkshopInteractivo(),
    new WorkshopInteractivo(),
];

cronogramaDia.forEach(sesion => sesion.ejecutar());