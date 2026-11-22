const plan= 2
const meses= 12
const cupon= false

let costo=0
switch (plan){
    case 1:
        costo= meses * 8;
        break
    case 2:
        costo= meses * 12;
        break
    case 3:
        costo= meses * 16;
        break
    case 4:
        costo= meses * 20;
        break
}

if (meses >= 6){
    costo = costo * 0.88;
}

if (!cupon){
    costo = costo + 3.5;
}

console.log(`el usuario tiene el plan ${plan} y lleva estos meses suscriptos ${meses} y tiene cupon ${cupon} y el total a pagar ${costo.toFixed(2)}`)

    function calcularComision(
        paquetesEntregados: number,
        puntualidadPerfecta: boolean,
        montoFacturado: number
    ){
        let nivel= ''
        let porcentaje= 0.0

        if (paquetesEntregados <=15){
            nivel= 'Inicial';
            porcentaje = 0.04;
        } else if(paquetesEntregados <= 30){
            nivel= 'Intermedio';
            porcentaje= 0.08;
        }else if(paquetesEntregados <= 50){
            nivel= 'Avanzado';
            porcentaje= 0.12;       
        }else{
            nivel= 'Elite';
            porcentaje= 0.18; 
        }

        if (puntualidadPerfecta){
            porcentaje = porcentaje + 0.03;
        }

        const comisionDolares= montoFacturado * porcentaje

        return {nivel, porcentaje, montoFacturado, comisionDolares}
    }

console.log(calcularComision(51,true,1000));

function analizarReparaciones(
    costos: number[],
    presupuestoMax: number
){
    let masBarato= costos[0];
    let masCaro= costos[0];
    let indiceMasCaro= 0;
    let totalGastado= 0;
    let excedidos= 0;

    for (let i = 0; i < costos.length; i++){
        const costo = costos[i];
        totalGastado += costo

        if (costo < masBarato){
            masBarato = costo;
        }

        if (costo > masCaro){
            masCaro= costo;
            indiceMasCaro= i;
        }

        if (costo > presupuestoMax) {
      excedidos++;
        }
    }

    return{masBarato, masCaro, indiceMasCaro, totalGastado, excedidos}
}

const costosTaller = [180, 450, 95, 300, 520, 210];
console.log(analizarReparaciones(costosTaller, 300));