type CodigoRegistro = string | number;
type EspecialidadPonente = string;
type UbicacionAsiento = [number, number];

type SalaUbicacion = {
    piso: number;
    sector: number;
};

const puntoRecepcion: SalaUbicacion = { piso: 1, sector: 0 };
const codigoTicket: CodigoRegistro = 101;
const codigoCredencial: CodigoRegistro = "VIP-2026-A";

type SalaConferencias = SalaUbicacion & {
    capacidadAforo: number;
};

interface AsistenteCongreso {
    readonly idRegistro: number;
    nombre: string;
    email: string;
    codigoGafete?: string;
}

interface OrganizadorEvento extends AsistenteCongreso {
    rolComite: string;
}

const asistente1: AsistenteCongreso = {
    idRegistro: 1,
    nombre: "Ana",
    email: "ana@gmail.com",
};

const asistente2: AsistenteCongreso = {
    idRegistro: 2,
    nombre: "Luis",
    email: "luis@gmail.com",
    codigoGafete: "GAF-042.png"
};

console.log(asistente1);
console.log(asistente2);

const coordinadorLogistica: OrganizadorEvento = {
    idRegistro: 3,
    nombre: "Pedro",
    email: "pedro@eventostech.ec",
    rolComite: "Coordinador General de Auditorio"
};

console.log(coordinadorLogistica);