let asistentes: number = 0;
let limiteSala: number = 50;

while (asistentes < limiteSala) {
  console.log(`Asistentes en sala: ${asistentes}`);
  asistentes += 10;
}

let intentos: number = 0;
let confirmados: number = 0;

while (intentos < 5) {
  intentos++;
  let aceptado = Math.random() < 0.5;
  if (aceptado) {
    confirmados++;
    console.log(`Intento ${intentos}: Confirmado (Total: ${confirmados})`);
  } else {
    console.log(`Intento ${intentos}: Rechazado (Total: ${confirmados})`);
  }
}

let charlas: number = 0;
do {
  charlas++;
  console.log(`Charla finalizada número: ${charlas}`);
} while (charlas < 3);

interface Charla {
  titulo: string;
  minutos: number;
  tipo: string;
}

const listaCharlas: Charla[] = [
  { titulo: "Introducción a TS", minutos: 30, tipo: "Online" },
  { titulo: "Taller Backend", minutos: 90, tipo: "Presencial" },
  { titulo: "Seguridad Web", minutos: 60, tipo: "Online" },
  { titulo: "Bases de Datos", minutos: 120, tipo: "Online" }
];

let indice: number = 0;

while (indice < listaCharlas.length) {
  const charla = listaCharlas[indice];

  if (!charla) {
    indice++;
    continue;
  }

  if (charla.tipo === "Presencial") {
    indice++;
    continue;
  }

  if (charla.minutos < 60) {
    indice++;
    continue;
  }

  console.log(`Charla disponible: ${charla.titulo} (${charla.minutos} min, ${charla.tipo})`);
  indice++;
}