"use strict";

class Conferencia {
    public titulo: string;
    public aforoMaximo: number;
    public cuposDisponibles: number;

    constructor(
        titulo: string,
        aforoMaximo: number,
        cuposDisponibles: number
    ) {
        this.titulo = titulo;
        this.aforoMaximo = aforoMaximo;
        this.cuposDisponibles = cuposDisponibles;
    }

    registrarAsistente(): void {
        this.cuposDisponibles -= 1;
        console.log(`Registro exitoso para: ${this.titulo}`);
    }

    ampliarCapacidad(): void {
        this.aforoMaximo += 10;
        this.cuposDisponibles += 10;
        console.log(`Aforo ampliado en 10 plazas para: ${this.titulo}`);
    }
}

const cloudSummit = new Conferencia("Arquitectura Cloud 2026", 80, 50);
const devOpsWorkshop = new Conferencia("DevOps y CI/CD Avanzado", 90, 60);

cloudSummit.registrarAsistente();
console.log(devOpsWorkshop.aforoMaximo);
devOpsWorkshop.ampliarCapacidad();
devOpsWorkshop.ampliarCapacidad();
console.log(devOpsWorkshop.aforoMaximo);
console.log(devOpsWorkshop.cuposDisponibles);