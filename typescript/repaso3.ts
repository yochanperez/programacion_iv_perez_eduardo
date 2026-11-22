//1

const tipoPlan= 1;
const personas=56;
const conEntrenador= true

let costo= 0
switch (tipoPlan){
    case 1:
      costo= personas * 35;
        break;
    case 2:
       costo= personas * 90;
        break;
    case 3:
        costo= personas * 160;
        break;
    case 4:
        costo= personas * 300;
        break;

}

if (personas >= 3){
    costo = costo * 0.85;
}

if (conEntrenador){
    costo = costo * 1.25;
}

console.log(`el plan es ${tipoPlan}, la cantidad de personas ${personas},costo final ${costo.toFixed(2)}`)

//2

function calcularRecompensa(
    montoCompra: number,
    tieneTarjeta: boolean
){
    let porcentaje= 0.0;
    let rango= '';

    if (montoCompra<50){
        rango= 'Bronce';
        porcentaje=0.02;
    } else if (montoCompra <= 150){
       rango= 'Plata';
       porcentaje=0.05; 
    } else if (montoCompra <= 400){
        rango= 'Oro';
        porcentaje=0.08; 
    }else {
        rango= 'Platino';
        porcentaje=0.12; 
    }

    if (tieneTarjeta){
        porcentaje = porcentaje + 0.04;
    }

    const puntosGanados= (montoCompra * porcentaje);

    return {rango, porcentaje, montoCompra, puntosGanados}
}

console.log(calcularRecompensa(200, true));

//3

function analizarSesiones(
    calorias: number[],
    metaDiaria: number
){
    let minCalorias= calorias[0];
    let maxCalorias = calorias[0];
    let indiceMaxCalorias= 0;
    let bajoMeta = 0;
    let suma = 0;
    
    for (let i = 0; i < calorias.length; i++){
        const cal = calorias[i]
        suma += cal;

        if (cal < minCalorias){
            minCalorias = cal;
        }

        if ( cal > maxCalorias){
            maxCalorias= cal;
            indiceMaxCalorias= i;
        }

        if (cal < metaDiaria){
            bajoMeta++;
        }

        
    }

    const promedioCalorias = suma / calorias.length;

    return { minCalorias, maxCalorias, indiceMaxCalorias, promedioCalorias, bajoMeta }

}

const sesiones = [320, 510, 400, 620, 280, 490];
console.log(analizarSesiones(sesiones, 400));

//4

interface PedidoBebida {
  bebida: string;
  vasos: number;
}

interface ResumenBebida {
  cantidadPedidos: number;
  totalVasos: number;
}

// 2. Función principal
function analizarVentasBebidas(pedidos: PedidoBebida[]) {
  // Diccionario vacío que usará el nombre de cada bebida como llave dinámica
  const resumenPorBebida: Record<string, ResumenBebida> = {};

  // Primer ciclo: agrupar y acumular sin usar if/switch por nombre
  for (let i = 0; i < pedidos.length; i++) {
    const { bebida, vasos } = pedidos[i];

    // Si es la primera vez que aparece esta bebida, se inicializa su objeto en cero
    if (resumenPorBebida[bebida] === undefined) {
      resumenPorBebida[bebida] = { cantidadPedidos: 0, totalVasos: 0 };
    }

    // Se acumulan los contadores para esa bebida
    resumenPorBebida[bebida].cantidadPedidos += 1;
    resumenPorBebida[bebida].totalVasos += vasos;
  }

  // Segundo ciclo: recorrer las llaves del diccionario para encontrar el mayor
  let bebidaMasVendida = '';
  let maxVasos = 0;

  for (const bebida in resumenPorBebida) {
    if (resumenPorBebida[bebida].totalVasos > maxVasos) {
      maxVasos = resumenPorBebida[bebida].totalVasos;
      bebidaMasVendida = bebida;
    }
  }

  return { resumenPorBebida, bebidaMasVendida };
}

// 3. Arreglo de prueba (al menos 6 pedidos repitiendo bebidas)
const pedidosTurno: PedidoBebida[] = [
  { bebida: 'Americano', vasos: 3 },
  { bebida: 'Latte', vasos: 4 },
  { bebida: 'Americano', vasos: 2 },
  { bebida: 'Capuchino', vasos: 5 },
  { bebida: 'Mocaccino', vasos: 2 },
  { bebida: 'Latte', vasos: 3 },
];

console.log(analizarVentasBebidas(pedidosTurno));