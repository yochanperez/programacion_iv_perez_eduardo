"use strict";

class SalaConferencia {
    private cuposDisponibles: number = 100;

    reservarAsientos(cantidad: number): void {
        if (cantidad > 0) {
            this.cuposDisponibles = Math.max(0, this.cuposDisponibles - cantidad);
        }
    }

    consultarCupos(): number {
        return this.cuposDisponibles;
    }
}

const auditorioMagno = new SalaConferencia();
auditorioMagno.reservarAsientos(50);
console.log(auditorioMagno.consultarCupos());
auditorioMagno.reservarAsientos(25);
console.log(auditorioMagno.consultarCupos());