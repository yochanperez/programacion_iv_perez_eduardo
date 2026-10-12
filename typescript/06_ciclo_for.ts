for ( let i = 2; i < 50; i+=5) {
    console.log("Entrenamiento jedi", i);
}

for ( let i = 40; i > 5; i-=5) {
    console.log("Entrenamiento jedi", i);
}

for ( let i = 40; i > 0; i-=5) {
    console.log("Entrenamiento jedi", i);
    if (i === 20) {
        console.log("El entrenamiento jedi ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento jedi ha sido interrumpido");
        continue;
    }
    console.log(`El entrenamiento jedi continúa: ${i}`);
}

const personajes: string[]= ["Luke Skywalker", "Darth Vader", "Obi-Wan Kenobi", "Princess Leia", "Han Solo"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
}
 for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}

const cineMovie: string="Star Wars: The Rise of Skywalker";
for(const letra of cineMovie) {
    console.log(`Letra: ${letra}`);
}

interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSable: boolean;
}

const jedis: Jedi[]= [
    { nombre: "Luke Skywalker", nivelFuerza: 90, tieneSable: true },
    { nombre: "Darth Vader", nivelFuerza: 95, tieneSable: true },
    { nombre: "Obi-Wan Kenobi", nivelFuerza: 85, tieneSable: true },
    { nombre: "Princess Leia", nivelFuerza: 70, tieneSable: false },
    { nombre: "Han Solo", nivelFuerza: 60, tieneSable: false }
];

for (const jedi of jedis){
    console.log(`Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
}

interface Nave {
    nombre: string;
    velocidad: number;
    tipo: string;
}

const naves: Nave[]=[
    { nombre: "Starlord", velocidad: 100, tipo: "Velocidad Ligera" },
    { nombre: "Gamora", velocidad: 120, tipo: "Velocidad" },
    { nombre: "Trax", velocidad: 800, tipo: "Velocidad Máxima" }
]

for (const nave of naves){
    console.log(`Nave: ${nave.nombre}, Velocidad: ${nave.velocidad}, Tipo: ${nave.tipo}`);
}

const planetas: Record<string, number>= {
    "Tatooine": 2,
    "Hoth": 3,
    "Endor": 4,
    };

for (const planeta in planetas){
    console.log(`Planeta: ${planeta}, Número de satélites: ${planetas[planeta]}`);
}

const distancias: Record<string, number>= {
    "": 2,
    "Hoth": 3,
    "Endor": 4,
    };

for (const distancia in distancias){
    console.log(`distancia: ${distancia}, Número de satélites: ${distancias[distancia]}`);
}
const criaturasStarwars: string[]= ["Wookiee", "Ewok", "Twi'lek", "Rodiano", "Hutt"];
criaturasStarwars.forEach((criatura, index) => {
    console.log(`Criatura: ${index + 1}. ${criatura}`);
});