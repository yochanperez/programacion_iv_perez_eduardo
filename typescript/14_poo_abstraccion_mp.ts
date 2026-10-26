"use strict";

abstract class ParticipanteEvento {
    abstract realizarActividad(): void;

    tomarReceso(): void {
        console.log("El participante asiste al coffee break y zona de networking");
    }
}

class PonenteMagistral extends ParticipanteEvento {
    realizarActividad(): void {
        console.log("El ponente dicta la conferencia magistral en el auditorio principal");
    }
}

class TalleristaTecnico extends ParticipanteEvento {
    realizarActividad(): void {
        console.log("El tallerista guía la práctica técnica en la sala de cómputo");
    }
}

const participantes: ParticipanteEvento[] = [
    new PonenteMagistral(),
    new TalleristaTecnico(),
];

console.log(participantes);
participantes.forEach(participante => participante.realizarActividad());

abstract class PonenteInvitado {
    abstract exponerTema(): void;

    verificarMicrofono(): void {
        console.log("Probando el equipo de audio y proyector antes de iniciar");
    }
}

class KeynoteSpeaker extends PonenteInvitado {
    exponerTema(): void {
        console.log("Presentando las tendencias tecnológicas del año a la audiencia general");
    }
}