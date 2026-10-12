"use strict";

type RolParticipante =
  | "Keynote Speaker"
  | "Organizador General"
  | "Moderador de Panel"
  | "Asistente VIP"
  | "Patrocinador";

let rolParticipante: RolParticipante = "Keynote Speaker";

switch (rolParticipante as RolParticipante) {
  case "Keynote Speaker":
    console.log("Keynote Speaker tiene acceso al escenario principal y sala VIP");
    break;
  case "Organizador General":
    console.log("Organizador General tiene credenciales de acceso total a todas las áreas");
    break;
  case "Moderador de Panel":
    console.log("Moderador de Panel coordina las sesiones de preguntas y respuestas");
    break;
  case "Asistente VIP":
    console.log("Asistente VIP cuenta con reservación preferencial en primera fila");
    break;
  case "Patrocinador":
    console.log("Patrocinador dispone de stand comercial en la zona de networking");
    break;
  default:
    console.log("Rol no reconocido en el sistema");
    break;
}

type Expositores = "Dr. Silva" | "Ing. Valery" | "Lic. Morales";

let expositor: Expositores = "Dr. Silva";
let tiempoPreparacionMinutos: number = 100;
let diapositivasAprobadas: boolean = true;

switch (expositor as string) {
  case "Dr. Silva":
    if (tiempoPreparacionMinutos >= 80 && diapositivasAprobadas) {
      console.log("Dr. Silva tiene la ponencia lista y el material técnico validado");
    } else {
      console.log("Dr. Silva necesita ajustar su presentación con el comité técnico");
    }
    break;

  case "Ing. Valery":
    if (tiempoPreparacionMinutos >= 75 && diapositivasAprobadas) {
      console.log("Ing. Valery está lista para iniciar el workshop técnico");
    } else {
      console.log("Ing. Valery no cuenta con las condiciones técnicas completas");
    }
    break;

  case "Lic. Morales":
    if (tiempoPreparacionMinutos >= 60) {
      console.log("Lic. Morales cumple con el tiempo mínimo para moderar la mesa redonda");
    } else {
      console.log("Lic. Morales debe revisar la pauta de preguntas antes de subir");
    }
    break;

  default:
    console.log("Expositor no registrado en la agenda");
    break;
}