const IVA: number = 3.1435;
const PI: number = 15;
const SERVICIO_API: string= "apiService";
const ACTIVE: boolean = true;

console.log("IVA:",IVA);
console.log("PI:",PI);
console.log("SERVICIO_API:",SERVICIO_API);
console.log("ACTIVE:",ACTIVE);

//variables
//let 

let contador: number = 0;
console.log("Contador:",contador);

contador = 5;
console.log(contador);

contador++;
console.log(contador);

contador+=5;
console.log(contador);

contador=contador+3
console.log(contador);

let alumno: string = "Eduardo";
let caducado: boolean = false;
console.log("Alumno:",alumno);
console.log("Caducado:",caducado);

let equipo: string[] = ["PIKACHU","CHARMANDER","BULBASAUR"];
console.log("Equipo:",equipo);

let pokemoncaturado: string | null = null;
let pokemoninicial: string | undefined;

let experieenciaAcumulacion: bigint= 98723982737292n;

// tipo symbol

let pokemon1: symbol = Symbol("Pikachu");
console.log(pokemon1.toString());
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon2.toString());
console.log(pokemon1 === pokemon2)

let pikachu: {
    nombre: string,
    nivel: number,
    vida:number;
    esLegendario: boolean;

}={
    nombre: "Pikachu",
    nivel: 25,
    vida: 100,
    esLegendario: false
};
console.log(pikachu);