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

function formatear(valor:number): string;
function formatear(valor:string): string;
function formatear(valor:boolean): string;

function formatear(valor:number | string| boolean):string{
    if(typeof valor === "number") {
        return valor.toLocaleString("es.MX", {minimumFractionDigits:2})
    }
    if (typeof valor === "boolean"){
        return valor ? "si": "no"
    }
    return `${valor}`
}

console.log(formatear(1233434.5));
console.log(formatear(true))
console.log(formatear("activo"))

console.log(formatear(1233434.5));
console.log(formatear(true));
console.log(formatear("activo"));

function crearContador(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    }
}

const c1 = crearContador();
const c2 = crearContador(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log(c1.valor());
console.log(c2.valor());

c1.resetear();
console.log()