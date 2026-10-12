type Personaje =
  | "Luke Skywalker"
  | "Darth Vader"
  | "Obi-Wan Kenobi"
  | "Princess Leia"
  | "Han Solo";

let personaje: Personaje = "Luke Skywalker";

switch (personaje as Personaje) {
  case "Luke Skywalker":
    console.log("Luke Skywalker es un Jedi");
    break;
  case "Darth Vader":
    console.log("Darth Vader es un Lord Sith");
    break;
  case "Obi-Wan Kenobi":
    console.log("Obi-Wan Kenobi es un Maestro Jedi");
    break;
  case "Princess Leia":
    console.log("Princess Leia es una líder de la Alianza Rebelde");
    break;
  case "Han Solo":
    console.log("Han Solo es un contrabandista");
    break;
  default:
    console.log("Personaje desconocido");
    break;
}


type Jedis = "Luke" | "Obi-Wan" | "Leia";

let jedi: Jedis = "Luke";
let nivelFuerza: number = 100;
let tieneSable: boolean = true;

switch (jedi as string) {
  case "Luke":
    if (nivelFuerza >= 80 && tieneSable) {
      console.log("Luke es un Jedi poderoso y está armado");
    } else {
      console.log("Luke necesita más entrenamiento o recuperar su sable");
    }
    break;

  case "Obi-Wan":
    if (nivelFuerza >= 75 && tieneSable) {
      console.log("Obi-Wan está listo para el combate");
    } else {
      console.log("Obi-Wan no está en condiciones óptimas");
    }
    break;

  case "Leia":
    if (nivelFuerza >= 60) {
      console.log("Leia siente la Fuerza intensamente");
    } else {
      console.log("Leia está enfocada en su liderazgo");
    }
    break;

  default:
    console.log("Jedi no registrado");
    break;
}