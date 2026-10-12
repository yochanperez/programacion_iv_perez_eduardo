"use strict";

const TASA_REGISTRO: number = 50;
const CAPACIDAD_MAXIMA_SALA: number = 200;
const SERVICIO_API_EVENTOS: string = "https://api.eventos-tech.com/v1";
const CONFERENCIA_ACTIVA: boolean = true;

console.log("Tasa de Registro:", TASA_REGISTRO);
console.log("Capacidad Máxima de la Sala:", CAPACIDAD_MAXIMA_SALA);
console.log("Servicio API de Eventos:", SERVICIO_API_EVENTOS);
console.log("Conferencia Activa:", CONFERENCIA_ACTIVA);

let asistentesRegistrados: number = 0;
console.log("Asistentes Registrados:", asistentesRegistrados);

asistentesRegistrados = 120;
console.log("Asistentes Registrados Actualizados:", asistentesRegistrados);

asistentesRegistrados++;
console.log("Asistentes Registrados Incrementados:", asistentesRegistrados);

asistentesRegistrados +=5;
console.log("Llegada de grupo corporativo, Asistentes Registrados:", asistentesRegistrados);

asistentesRegistrados = asistentesRegistrados + 4;
console.log("Registro de ponentes invitados:", asistentesRegistrados);

let coordinador: string = "Eduardo Pérez";
let paseCaducado: boolean = false;
console.log("Coordinador a cargo:", coordinador);
console.log("Pase Caducado:", paseCaducado);

let salasDisponibles: string[] = ["AUDITORIO_PRINCIPAL", "SALA_NETWORKING", "WORKSHOP_DEV"];
console.log("Salas del evento:", salasDisponibles);

let ponenteConfirmado: string | null = null;
let salaAsignada: string | undefined;

let visitasWebRegistro: bigint = 98723982737292n;
console.log("Visitas totales al portal:", visitasWebRegistro);

let ticketAccesoVIP1: symbol = Symbol("TicketVIP");
console.log("Ticket 1:", ticketAccesoVIP1.toString());

let ticketAccesoVIP2: symbol = Symbol("TicketVIP");
console.log("Ticket 2:", ticketAccesoVIP2.toString());

console.log("¿Son el mismo ticket?:", ticketAccesoVIP1 === ticketAccesoVIP2);

let ponentePrincipal: {
    nombre: string;
    ponenciasRealizadas: number;
    calificacionAudiencia: number;
    esKeynoteSpeaker: boolean;
} = {
    nombre: "Dr. Roberto Silva",
    ponenciasRealizadas: 12,
    calificacionAudiencia: 98,
    esKeynoteSpeaker: true
};

console.log("Ficha del Ponente:", ponentePrincipal);