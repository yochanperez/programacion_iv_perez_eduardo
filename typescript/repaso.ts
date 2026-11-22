//Repaso para el examen

const tipoVehiculo= 3;
const horas=40;
const esFinDeSemana= true;

let costo=0;

switch (tipoVehiculo) {
    case 1:
        costo = horas * 1.5;
        break;
    case 2:
        costo = horas * 3;
        break;
    case 3:(
        costo = horas * 6;
        break;
}

if (horas > 5){
    costo = costo*0.85;
}

if (esFinDeSemana){
    costo= costo+2;
}

console.log(
  `Vehículo: ${tipoVehiculo}, Horas: ${horas}, Fin de semana: ${esFinDeSemana}, Costo final: $${costo.toFixed(2)}`
);

function evaluarBeca(
    promedio: number, 
    tieneSanciones: boolean
){

    let categoria= ''
    let porcentaje = 0

    if (promedio < 7 ){
        categoria= 'Sin beca';
        porcentaje= 0;
    } else if( promedio<=8.4){
        categoria = "Beca Parcial";
        porcentaje = 0.25;
    } else {
        categoria= "Beca completa";
        porcentaje= 0.50;
    }

    if (tieneSanciones) {
        porcentaje = porcentaje - 0.10;
        if (porcentaje < 0){
            porcentaje = 0
        }
    }

    return{categoria, porcentaje};

}

console.log(evaluarBeca(8.0,true))


function analizarTemperaturas(
    temps: number[]
){
    let minima = temps[0];
    let maxima = temps[0];
    let indiceMaxima = 0;
    let diasCalurosos = 0;

    for (let i =0;i< temps.length; i++){
        const temp = temps[i];

        if (temp< minima){
            minima = temp;
        }

        if (temp > maxima){
            maxima= temp;
            indiceMaxima= i; 
        }

        if (temp > 25){
            diasCalurosos++
        }
    }

    return{minima,maxima,indiceMaxima,diasCalurosos}
}

const temperaturasSemana = [22, 18, 29, 25, 16, 31];
console.log(analizarTemperaturas(temperaturasSemana));