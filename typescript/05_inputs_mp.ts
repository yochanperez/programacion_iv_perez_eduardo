"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync();

const nombreAsistente: string = prompt("Nombre completo del asistente: ");
const tipoEntrada: string = prompt("Tipo de entrada (General / VIP): ");
const aniosExperienciaInput: string = prompt("Años de experiencia en la industria: ");
const aniosExperiencia: number = Number(aniosExperienciaInput);

console.log(`\n--- Registro de Acreditación ---`);
console.log(`Asistente: ${nombreAsistente}`);
console.log(`Categoría: ${tipoEntrada}`);
console.log(`Experiencia declarada: ${aniosExperiencia} años`);

if (tipoEntrada.toUpperCase() === "VIP" || aniosExperiencia >= 5) {
  console.log("Acceso concedido al lounge de networking y sesiones exclusivas.");
} else {
  console.log("Acceso habilitado únicamente a salas de conferencias generales.");
}