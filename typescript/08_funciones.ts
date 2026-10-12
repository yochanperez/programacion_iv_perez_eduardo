function symarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos = symarCreditos(30, 20);
console.log(`Total de créditos: ${totalCreditos}`);
//Sin devolver valor 

function mostrarMensaje(mensaje: string): void {
    console.log(`Mensaje: ${mensaje}`);
    const naves: string[] = ["Starlord", "Millennium Falcon", "X-Wing", "TIE Fighter", "Star Destroyer"];
    for (const nave of naves) {
        console.log(`Nave: ${nave}`);
    }
}

mostrarMensaje("¡Bienvenido al sistema de créditos!");

function entrenarJedi(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`Entrenando a ${nombre} con nivel de fuerza: ${nivel}`);
    } else {
        console.log(`Entrenando a ${nombre} sin nivel de fuerza especificado`);
        nivel = 1;
        console.log(`Nivel de fuerza predeterminado asignado a ${nombre}: ${nivel}`);
    }
}

entrenarJedi("Luke Skywalker", 90);
entrenarJedi("Darth Vader");

function entrenarJedi2(nombre: string, nivel: number=1): void {
        console.log(`Entrenando a ${nombre} con nivel de fuerza: ${nivel}`);

    }

entrenarJedi2("Eduardo", 90);
entrenarJedi2("Darth Vader");

//FUNCIONES FLECHA
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal: number = 50;

const fuerzaPotenciada: number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal} Fuerza Potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha: number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza potenciada (función flecha): ${fuerzaPotenciadaFlecha}`);