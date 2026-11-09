// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'

// ─── Componentes Base ────────────────────────────────────────────────────────
import { Paso1 } from '../components/paso1'
import { Paso2 } from '../components/paso2'
import { Paso3 } from '../components/paso3'
import { Paso4 } from '../components/paso4'
import { Paso5 } from '../components/paso5'
import { Paso6 } from '../components/paso6'

// ─── Componentes MP (Gestión de Eventos y Conferencias) ─────────────────────
import { Paso1_mp } from '../components/paso1_mp'
import { Paso2_mp } from '../components/paso2_mp'
import { Paso3_mp } from '../components/paso3_mp'
import { Paso4_mp } from '../components/paso4_mp'
import { Paso5_mp } from '../components/paso5_mp'
import { Paso6_mp } from '../components/paso6_mp'

// ┌────────────────────────────────────────────────────────────────────────────┐
// │  Cambia este número o string y guarda (Ctrl+S) para navegar entre pasos:   │
// │                                                                            │
// │  Versiones Base:                                                           │
// │  1  Paso 1 — Flexbox (columna, fila, flex proporcional y wrap)             │
// │  2  Paso 2 — Tamaños dp vs % y ancho detectado Dimensions.get              │
// │  3  Paso 3 — Grid dinámico responsivo según ancho de pantalla              │
// │  4  Paso 4 — Sombras multiplataforma (elevation / shadowColor)            │
// │  5  Paso 5 — Tema claro / oscuro con Contexto                             │
// │  6  Paso 6 — SafeAreaView y useSafeAreaInsets                              │
// │                                                                            │
// │  Versiones _mp (Gestión de Eventos y Conferencias):                        │
// │  '1_mp' o 11  Paso 1 MP — Flexbox aplicado a Salas, Aforo y Tracks         │
// │  '2_mp' o 12  Paso 2 MP — Dimensiones en Butacas y Aforo en %              │
// │  '3_mp' o 13  Paso 3 MP — Panel de Salas del Congreso en Grid              │
// │  '4_mp' o 14  Paso 4 MP — Elevación visual de Auditorios según estado      │
// │  '5_mp' o 15  Paso 5 MP — Tema Claro/Oscuro de la Plataforma del Congreso  │
// │  '6_mp' o 16  Paso 6 MP — Safe Area Insets en Supervisión de Salas         │
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
      return <Paso5 />
    case 6:
      return <Paso6 />

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
      return <Paso5_mp />
    case '6_mp':
    case 16:
      return <Paso6_mp />

    default:
      return (
        <View style={estilos.centrado}>
          <Text style={estilos.titulo}>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const estilos = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 16,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
    textAlign: 'center',
  },
})