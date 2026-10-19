function sumarAsistentes(grupoA: number, grupoB: number): number {
    return grupoA + grupoB;
}

const totalAsistentes = sumarAsistentes(30, 20);
console.log(`Total de asistentes: ${totalAsistentes}`);

function mostrarMensaje(mensaje: string): void {
    console.log(`Notificación: ${mensaje}`);
    const salas: string[] = ["Auditorio Principal", "Sala Networking", "Sala Workshop", "Lounge VIP", "Plenaria"];
    for (const sala of salas) {
        console.log(`Sala disponible: ${sala}`);
    }
}

mostrarMensaje("¡Bienvenido al sistema de acreditación del congreso!");

function registrarPonente(nombre: string, experienciaHoras?: number): void {
    if (experienciaHoras) {
        console.log(`Registrando al ponente ${nombre} con ${experienciaHoras} horas de ponencia.`);
    } else {
        console.log(`Registrando al ponente ${nombre} sin experiencia previa declarada.`);
        experienciaHoras = 1;
        console.log(`Horas asignadas por defecto a ${nombre}: ${experienciaHoras}`);
    }
}

registrarPonente("Dr. Roberto Silva", 90);
registrarPonente("Ing. Carlos Mendoza");

function registrarPonente2(nombre: string, experienciaHoras: number = 1): void {
    console.log(`Registrando al ponente ${nombre} con ${experienciaHoras} horas de ponencia.`);
}

registrarPonente2("Eduardo Pérez", 90);
registrarPonente2("Ing. Carlos Mendoza");

function calcularAforoExtendible(aforoBase: number): number {
    return aforoBase * 2;
}

const calcularAforoExtendibleFlecha = (aforoBase: number): number => aforoBase * 2;

const aforoOriginal: number = 50;

const aforoDuplicado: number = calcularAforoExtendible(aforoOriginal);
console.log(`Aforo base: ${aforoOriginal} | Aforo ampliado: ${aforoDuplicado}`);

const aforoDuplicadoFlecha: number = calcularAforoExtendibleFlecha(aforoOriginal);
console.log(`Aforo ampliado (función flecha): ${aforoDuplicadoFlecha}`);

function formatearDatoEvento(valor: number): string;
function formatearDatoEvento(valor: string): string;
function formatearDatoEvento(valor: boolean): string;

function formatearDatoEvento(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es.EC", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "Habilitado" : "No disponible";
    }
    return `${valor}`;
}

console.log(formatearDatoEvento(1233434.5));
console.log(formatearDatoEvento(true));
console.log(formatearDatoEvento("Sala VIP"));

console.log(formatearDatoEvento(1233434.5));
console.log(formatearDatoEvento(true));
console.log(formatearDatoEvento("Sala VIP"));

function crearContadorAcceso(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    };
}

const auditorioA = crearContadorAcceso();
const auditorioB = crearContadorAcceso(10);

auditorioA.incrementar();
auditorioA.incrementar();
auditorioA.incrementar();
auditorioB.incrementar();

console.log(auditorioA.valor());
console.log(auditorioB.valor());

auditorioA.resetear();
console.log(auditorioA.valor());