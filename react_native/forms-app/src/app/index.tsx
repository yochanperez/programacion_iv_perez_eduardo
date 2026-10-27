// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from '../components/paso1'
import { Paso2 } from '../components/paso2'
import { Paso3 } from '../components/paso3'
import { Paso4 } from '../components/paso4'
import { Paso4Volumen } from '../components/paso4_volumen'
import { Paso5 } from '../components/paso5'
import { Paso6 } from '../components/paso6'
import { Paso6Volumen } from '../components/paso6 volumen'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Cálculo de volumen — encadenamiento de focus con useRef          │
// │  6  Formulario con validación — agregar servidor                    │
// │  7  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 8

export default function Index() {
  switch (PASO) {
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
    default:
      return (
        <View style={styles.centrado}>
          <Text style={styles.textoDefault}>Paso {PASO}: crea la pantalla primero</Text>
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
  },
  textoDefault: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
})