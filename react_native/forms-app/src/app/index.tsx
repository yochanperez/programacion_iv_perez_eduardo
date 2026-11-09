// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'

// ─── Componentes Base ────────────────────────────────────────────────────────
import { Paso1 } from '../components/paso1'
import { Paso2 } from '../components/paso2'
import { Paso3 } from '../components/paso3'
import { Paso4 } from '../components/paso4'
import { Paso4Volumen } from '../components/paso4_volumen'
import { Paso5 } from '../components/paso5'
import { Paso6 } from '../components/paso6'
import { Paso6Volumen } from '../components/paso6 volumen'

// ─── Componentes MP (Gestión de Eventos y Conferencias) ─────────────────────
import { Paso1_mp } from '../components/paso1_mp'
import { Paso2_mp } from '../components/paso2_mp'
import { Paso3_mp } from '../components/paso3_mp'
import { Paso4_mp } from '../components/paso4_mp'
import { Paso4Volumen_mp } from '../components/paso4Volumen_mp'
import { Paso5_mp } from '../components/paso5_mp'
import { Paso6_mp } from '../components/paso6_mp'
import { Paso6Volumen_mp } from '../components/paso6Volumen_mp'

// ┌────────────────────────────────────────────────────────────────────────────┐
// │  Cambia este valor y guarda (Ctrl+S) para alternar entre pasos:            │
// │                                                                            │
// │  Versiones Base:                                                           │
// │  1  FlatList básica — Servidores con nombre/IP/estado                      │
// │  2  FlatList avanzada — Separadores, lista vacía, refresh, paginación      │
// │  3  SectionList — Servidores agrupados por datacenter                      │
// │  4  TextInput tipado — Parámetros SSH con teclado controlado               │
// │  5  Cálculo de volumen — Encadenamiento de focus con useRef                │
// │  6  Formulario con validación — Registrar servidor                         │
// │  7  KeyboardAvoidingView — Formulario sin tapado de teclado                │
// │  8  KeyboardAvoidingView Volumen — Cálculo geométrico con scroll           │
// │                                                                            │
// │  Versiones _mp (Gestión de Eventos y Conferencias):                        │
// │  '1_mp' o 11  FlatList — Catálogo de Conferencias y cupos disponibles      │
// │  '2_mp' o 12  FlatList — Programa del Congreso, paginación y recarga       │
// │  '3_mp' o 13  SectionList — Cronograma organizado por Tracks y horarios    │
// │  '4_mp' o 14  TextInput — Registro de Sesión, sala y clave de acceso      │
// │  '5_mp' o 15  Cálculo Aforo — Proyección de capacidad máxima de auditorio  │
// │  '6_mp' o 16  Formulario — Validación de alta de conferencias en agenda    │
// │  '7_mp' o 17  KeyboardAvoidingView — Nueva Ponencia con requerimientos     │
// │  '8_mp' o 18  Presupuesto — Asistentes × Días × Tarifa diaria              │
// └────────────────────────────────────────────────────────────────────────────┘
const PASO: number | string = '1_mp'

export default function Index() {
  switch (PASO) {
    // ─── Casos Base ──────────────────────────────────────────────────────────
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso4Volumen />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso6Volumen />

    // ─── Casos _mp (Gestión de Eventos y Conferencias) ───────────────────────
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
      return <Paso4Volumen_mp />
    case '6_mp':
    case 16:
      return <Paso5_mp />
    case '7_mp':
    case 17:
      return <Paso6_mp />
    case '8_mp':
    case 18:
      return <Paso6Volumen_mp />

    default:
      return (
        <View style={styles.centrado}>
          <Text style={styles.textoDefault}>
            Paso "{PASO}": no existe o componente no asignado
          </Text>
        </View>
      )
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
})