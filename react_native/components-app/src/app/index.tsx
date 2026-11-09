// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'

// Pasos base
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'

// Pasos prácticos MP (Gestión de Eventos y Conferencias)
import { Paso1_mp } from './paso1_mp'
import { Paso2_mp } from './paso2_mp'
import { Paso3_mp } from './paso3_mp'
import { Paso4_mp } from './paso4_mp'
import { Paso5_mp } from './paso5_mp'
import { Paso6_mp } from './paso6_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número o string y guarda para navegar entre pasos:  │
// │                                                                  │
// │  Versiones Base:                                                 │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de servidor             │
// │                                                                  │
// │  Versiones _mp (Gestión de Eventos y Conferencias):              │
// │  '1_mp' o 11  Paso 1 MP  Ponentes Destacados                     │
// │  '2_mp' o 12  Paso 2 MP  Detalle Sala de Evento / Auditorio      │
// │  '3_mp' o 13  Paso 3 MP  Agenda del Congreso y Estados           │
// │  '4_mp' o 14  Paso 4 MP  Monitoreo de Aforos y Asistencia        │
// │  '5_mp' o 15  Paso 5 MP  Cierre de Aforo y Modal Confirmación    │
// │  '6_mp' o 16  Paso 6 MP  Gestión Operativa de Sala y Streaming   │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number | string = '1_mp'

export default function Index() {
  switch (PASO) {
    // ─── Versiones Base ───
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />

    // ─── Versiones _mp (soporta formato '1_mp' o numérico 11..16) ───
    case '1_mp':
    case 11:
      return <Paso1_mp />
    case '2_mp':
    case 12:
      return <Paso2_mp />
    case '3_mp':
    case 13:
      return <Paso3_mp />
    case '4_mp':
    case 14:
      return <Paso4_mp />
    case '5_mp':
    case 15:
      return <Paso5_mp />
    case '6_mp':
    case 16:
      return <Paso6_mp />

    default:
      return (
        <View style={styles.centrado}>
          <Text style={styles.textoAviso}>Paso "{PASO}": no existe o componente no asignado</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  textoAviso: {
    fontSize: 14,
    color: '#546e7a',
    textAlign: 'center',
  },
})