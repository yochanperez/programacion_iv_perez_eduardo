"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync();

const nombreUsuario: string = prompt("Ingresa tu nombre: ");
const edadInput: string = prompt("Ingresa tu edad: ");
const edad: number = Number(edadInput);

console.log(`Hola ${nombreUsuario}, tienes ${edad} años.`);

if (edad >= 18) {
  console.log("Acceso permitido.");
} else {
  console.log("Acceso restringido a menores.");
}