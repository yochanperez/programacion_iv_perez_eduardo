// app/index.tsx
import { Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Texto y vistas básicas                               │
// │  2  Paso 2  Imágenes y botones                                   │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Paso 1 — lo creamos abajo ──────────────────────────────────────
function Paso1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola desde React Native</Text>
    </View>
  )
}