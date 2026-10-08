let nivel: number = 5;
if (nivel < 5 ) {
    console.log("El Charmander puede evolucionar a Charmeleon")
}

if (nivel < 16 ) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard")
}

if (nivel >= 16 ) {
    console.log("El Charmander puede evolucionar a Charizard")
} else if (nivel >= 8) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard")
}

if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    if (nivel >= 8) {
        console.log("El Charmander puede evolucionar a Charmeleon")
    } else {
        console.log("El Charmander no puede evolucionar a Charmeleon")
    }
}

nivel= 10;
const fuerza= 15;
if (nivel >= 8 && nivel < 16 && fuerza >= 16) {
    console.log("El Charmander puede evolucionar a Charmeleon")
} else if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charmeleon")
}

nivel= 10;
if (nivel >= 8 || fuerza >= 16) {
    console.log("El Charmander puede evolucionar a Charmeleon o Charizard")
} else if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charmeleon")
}

let entrenador:{
    nombre: string,
    medallas: number,
    edad: number,
    suspendido: boolean

}={
    nombre: "Ash",
    medallas: 8,
    edad: 13,
    suspendido: false
}

let pokemon: {
    nombre: string;
    nivel: number;
    vida: number;
    ataque: number;
    defensa: number;
    tipo: TipoPokemon;
    esLegendario: boolean;
} = {
    nombre: "Pikachu",
    nivel: 40,
    vida: 100,
    ataque: 55,
    defensa: 40,
    tipo: "Eléctrico",
    esLegendario: false
};

type TipoPokemon = "Fuego" | "Agua" | "Planta" | "Eléctrico";

if (entrenador.medallas >= 8 && entrenador.edad >= 12 && !entrenador.suspendido) {
    console.log(`El entrenador ${entrenador.nombre} cumple los requisitos para participar en la Liga Pokémon.`);

    if (
        pokemon.nivel >= 40 &&
        pokemon.vida > 0 &&
        (pokemon.tipo === "Fuego" || pokemon.tipo === "Agua" || pokemon.tipo === "Eléctrico")
    ) {
        console.log(`El Pokémon ${pokemon.nombre} es apto para el combate.`);

        if (pokemon.nivel >= 80 && pokemon.ataque >= 90 && pokemon.vida >= 100) {
            console.log(`Clasificación: Maestro`);
        } else if (pokemon.nivel >= 60 && (pokemon.ataque >= 75 || pokemon.defensa >= 80)) {
            console.log(`Clasificación: Élite`);
        } else if (pokemon.nivel >= 40 && pokemon.ataque >= 50 && pokemon.vida > 0) {
            console.log(`Clasificación: Avanzado`);
        } else {
            console.log(`El Pokémon no alcanza una categoría de combate específica.`);
        }

    } else {
        console.log(`El Pokémon no cumple con los requisitos mínimos (nivel >= 40, vida > 0 y tipo Fuego, Agua o Eléctrico).`);
    }

} else {
    console.log("El entrenador no cumple los requisitos para participar en la Liga Pokémon (medallas insuficientes, menor de 12 años o suspendido).");
}