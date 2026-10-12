"use strict";

for (let i = 2; i < 50; i += 5) {
  console.log("Control de aforo en sala magistral:", i);
}

for (let i = 40; i > 5; i -= 5) {
  console.log("Minutos restantes para iniciar la conferencia:", i);
}

for (let i = 40; i > 0; i -= 5) {
  console.log("Cupos disponibles en el taller técnico:", i);
  if (i === 20) {
    console.log("Capacidad máxima de seguridad alcanzada: Registro cerrado");
    break;
  }
  if (i === 30) {
    console.log("Receso programado: Pausa en el ingreso de asistentes");
    continue;
  }
  console.log(`El ingreso a la sesión continúa con cupo en: ${i}`);
}