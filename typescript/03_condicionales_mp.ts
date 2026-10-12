"use strict";

type TipoAcceso = "General" | "VIP" | "Prensa" | "Speaker";

let cuposDisponibles: number = 5;

if (cuposDisponibles < 5) {
    console.log("Quedan pocos cupos: Habilitar lista de espera prioritaria.");
}

if (cuposDisponibles < 16) {
    console.log("Alerta de aforo: La sala magistral está próxima a llenarse.");
} else {
    console.log("Aforo suficiente: La sala magistral cuenta con amplia disponibilidad.");
}

if (cuposDisponibles >= 16) {
    console.log("Registro estándar: Asignación libre de butacas.");
} else if (cuposDisponibles >= 8) {
    console.log("Registro moderado: Se sugiere confirmar asistencia por correo.");
} else {
    console.log("Registro crítico: Solo se permiten accesos de emergencia.");
}

if (cuposDisponibles >= 16) {
    console.log("Capacidad óptima: No se requieren restricciones de ingreso.");
} else {
    if (cuposDisponibles >= 8) {
        console.log("Capacidad regular: Se reservan los asientos delanteros.");
    } else {
        console.log("Capacidad mínima: Se cierran registros presenciales.");
    }
}

cuposDisponibles = 10;
const presupuestoLogistica: number = 15;

if (cuposDisponibles >= 8 && cuposDisponibles < 16 && presupuestoLogistica >= 16) {
    console.log("Aprobado: Habilitar sala secundaria con catering completo.");
} else if (cuposDisponibles >= 16) {
    console.log("Aprobado: Habilitar auditorio principal para la conferencia.");
} else {
    console.log("No cumple criterios: Mantener sesión únicamente en modalidad virtual.");
}

cuposDisponibles = 10;
if (cuposDisponibles >= 8 || presupuestoLogistica >= 16) {
    console.log("Confirmación: La sesión puede dictarse en auditorio o sala híbrida.");
} else if (cuposDisponibles >= 16) {
    console.log("Confirmación: Trasladar evento al auditorio mayor.");
} else {
    console.log("Confirmación: Cancelar reserva de sala física.");
}

let organizador: {
    nombre: string;
    eventosOrganizados: number;
    antiguedadAnios: number;
    suspendido: boolean;
} = {
    nombre: "Eduardo Silva",
    eventosOrganizados: 8,
    antiguedadAnios: 13,
    suspendido: false
};

let conferencia: {
    titulo: string;
    asistentesConfirmados: number;
    duracionMinutos: number;
    calificacionRequerida: number;
    capacidadMaxima: number;
    tipo: TipoAcceso;
    esKeynote: boolean;
} = {
    titulo: "Arquitectura Cloud 2026",
    asistentesConfirmados: 40,
    duracionMinutos: 100,
    calificacionRequerida: 55,
    capacidadMaxima: 40,
    tipo: "Speaker",
    esKeynote: false
};

if (organizador.eventosOrganizados >= 8 && organizador.antiguedadAnios >= 12 && !organizador.suspendido) {
    console.log(`El organizador ${organizador.nombre} cumple los requisitos para coordinar la Conferencia Magna.`);

    if (
        conferencia.asistentesConfirmados >= 40 &&
        conferencia.duracionMinutos > 0 &&
        (conferencia.tipo === "VIP" || conferencia.tipo === "General" || conferencia.tipo === "Speaker")
    ) {
        console.log(`La ponencia "${conferencia.titulo}" está formalmente aprobada para la agenda oficial.`);

        if (conferencia.asistentesConfirmados >= 80 && conferencia.calificacionRequerida >= 90 && conferencia.duracionMinutos >= 100) {
            console.log("Clasificación de Sesión: Keynote Magistral");
        } else if (conferencia.asistentesConfirmados >= 60 && (conferencia.calificacionRequerida >= 75 || conferencia.capacidadMaxima >= 80)) {
            console.log("Clasificación de Sesión: Panel Especializado");
        } else if (conferencia.asistentesConfirmados >= 40 && conferencia.calificacionRequerida >= 50 && conferencia.duracionMinutos > 0) {
            console.log("Clasificación de Sesión: Workshop Técnico");
        } else {
            console.log("La sesión no alcanza una categoría destacada en el cronograma.");
        }

    } else {
        console.log("La conferencia no cumple los requisitos mínimos (asistentes >= 40, duración > 0 y tipo General, VIP o Speaker).");
    }

} else {
    console.log("El organizador no cumple los requisitos para coordinar el evento (menos de 8 eventos, menos de 12 años o credencial suspendida).");
}