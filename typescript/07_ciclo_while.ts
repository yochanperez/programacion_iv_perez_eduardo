let memoriaDroide = 1024;
let memoriaDroidaMxima = 2048;

while (memoriaDroide < memoriaDroidaMxima) {
    console.log(`Memoria del droide: ${memoriaDroide} MB`);
    memoriaDroide += 256;
}
let disparosNave = 0;
let aciertosNave = 0;

while (disparosNave < 10) {
    disparosNave++;
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosNave++;
        console.log(`Disparo ${disparosNave}: ¡Acierto! Total de aciertos: ${aciertosNave}`);
    } else {
        console.log(`Disparo ${disparosNave}: Fallo. Total de aciertos: ${aciertosNave}`);
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerra galáctica número: ${guerras}`);
} while (guerras < 5);

interface Nave {
    nombre: string;
    velocidad: number;
    tipo: string;
}

const navesEscaneadas2: Nave[] = [
    { nombre: "Starlord", velocidad: 100, tipo: "Velocidad Ligera" },
    { nombre: "Millennium Falcon", velocidad: 1050, tipo: "Velocidad de la Luz" },
    { nombre: "X-Wing", velocidad: 950, tipo: "Velocidad Sub-Luz" },
    { nombre: "TIE Fighter", velocidad: 800, tipo: "Velocidad Sub-Luz" },
    { nombre: "Star Destroyer", velocidad: 1200, tipo: "Velocidad de la Luz" }
];

let indice2 = 0;

while (indice2 < navesEscaneadas2.length) {
    const nave_2 = navesEscaneadas2[indice2];

    if (!nave_2) {
        indice2++;
        continue;
    }

    if (nave_2.tipo === "Velocidad de la Luz") {
        indice2++;
        continue; 
    }

    if (nave_2.velocidad < 1000) {
        indice2++;
        continue;
    }

    console.log(`Nave escaneada: ${nave_2.nombre}, Velocidad: ${nave_2.velocidad}, Tipo: ${nave_2.tipo}`);
    indice2++;
}