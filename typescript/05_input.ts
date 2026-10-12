let personaje= prompt ("Ingrese el nombre del personaje de Star Wars (Luke Skywalker, Darth Vader, Obi-Wan Kenobi, Princess Leia, Han Solo):");
let edad = Number(prompt("Ingrese la edad del personaje:"));
let fuerza= Number(prompt("Ingrese el nivel de fuerza del personaje (0-100):"));

if (personaje === "Luke Skywalker" || personaje === "Darth Vader" || personaje === "Obi-Wan Kenobi" || personaje === "Princess Leia" || personaje === "Han Solo") {
    if (edad >= 0 && fuerza >= 100) {
        console.log(`El personaje ${personaje} es apto para la misión.`);
    } else {
        console.log(`El personaje ${personaje} no cumple con los requisitos de edad o fuerza.`);
    }
} else {
    console.log("Personaje desconocido. Por favor, ingrese un personaje válido de Star Wars.");
}