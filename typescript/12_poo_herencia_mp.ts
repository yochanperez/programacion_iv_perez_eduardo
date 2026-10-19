"use strict";

class SesionEvento {
    iniciar(): void {
        console.log("Inicio de sesión estándar en el cronograma");
    }
}

class ConferenciaMagna extends SesionEvento {
    presentarKeynote(): void {
        console.log("El ponente principal presenta el Keynote en el auditorio central");
    }
}

class TallerPractico extends SesionEvento {
    iniciarLaboratorio(): void {
        console.log("El instructor habilita el laboratorio interactivo para los asistentes");
    }
}

const plenariaInaugural = new ConferenciaMagna();
plenariaInaugural.iniciar();
plenariaInaugural.presentarKeynote();

const workshopDevOps = new TallerPractico();
workshopDevOps.iniciar();
workshopDevOps.iniciarLaboratorio();