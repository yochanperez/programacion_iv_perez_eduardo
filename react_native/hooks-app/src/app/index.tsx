// app/index.tsx
import { StyleSheet, Text, View } from 'react-native';

// ─── Componentes Base ────────────────────────────────────────────────────────
import Paso1 from './paso1';
import Paso2 from './paso2';
import Paso3 from './paso3';
import SumaPaso3 from './paso3_suma';
import Paso4 from './paso4';
import Paso5 from './paso5';
import Paso6 from './paso6';
import Paso7 from './paso7';
import { Paso8 } from './paso8';

// ─── Componentes MP (Gestión de Eventos y Conferencias) ─────────────────────
import Paso5_mp from './paso5_mp';
import Paso6_mp from './paso6_mp';
import Paso7_mp from './paso7_mp';
import { Paso8_mp } from './paso8_mp';

// ┌────────────────────────────────────────────────────────────────────────────┐
// │  Cambia este valor y guarda (Ctrl+S) para alternar entre pasos:            │
// │                                                                            │
// │  Versiones Base:                                                           │
// │  1  Paso 1                                                                 │
// │  2  Paso 2                                                                 │
// │  3  Paso 3                                                                 │
// │  4  Paso 3 Suma                                                            │
// │  5  Paso 4                                                                 │
// │  6  Paso 5 — useContext (Perfil de usuario)                                │
// │  7  Paso 6 — useMemo (Total de productos en tienda)                        │
// │  8  Paso 7 — useCallback y memo (Lista de productos)                       │
// │  9  Paso 8 — Custom hook (useConexionSimulada en servidores)               │
// │                                                                            │
// │  Versiones _mp (Gestión de Eventos y Conferencias):                        │
// │  '5_mp' o 15  Paso 5 MP — useContext (Acreditación y rol en el congreso)   │
// │  '6_mp' o 16  Paso 6 MP — useMemo (Recaudación de pases y taquilla)        │
// │  '7_mp' o 17  Paso 7 MP — useCallback y memo (Agenda y ponencias)          │
// │  '8_mp' o 18  Paso 8 MP — Custom hook (Transmisión AV y streaming de salas)│
// └────────────────────────────────────────────────────────────────────────────┘
const PASO: number | string = '5_mp';

export default function Index() {
  switch (PASO) {
    // ─── Casos Base ──────────────────────────────────────────────────────────
    case 1:
      return <Paso1 />;
    case 2:
      return <Paso2 />;
    case 3:
      return <Paso3 />;
    case 4:
      return <SumaPaso3 />;
    case 5:
      return <Paso4 />;
    case 6:
      return <Paso5 />;
    case 7:
      return <Paso6 />;
    case 8:
      return <Paso7 />;
    case 9:
      return <Paso8 />;

    // ─── Casos _mp (Gestión de Eventos y Conferencias) ───────────────────────
    case '5_mp':
    case 15:
      return <Paso5_mp />;
    case '6_mp':
    case 16:
      return <Paso6_mp />;
    case '7_mp':
    case 17:
      return <Paso7_mp />;
    case '8_mp':
    case 18:
      return <Paso8_mp />;

    default:
      return (
        <View style={styles.centrado}>
          <Text style={styles.textoDefault}>
            Paso "{PASO}": no existe o componente no asignado
          </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  textoDefault: {
    fontSize: 15,
    color: '#546e7a',
    fontWeight: '500',
    textAlign: 'center',
  },
});