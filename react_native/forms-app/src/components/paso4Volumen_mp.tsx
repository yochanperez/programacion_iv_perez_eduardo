import { useRef, useState, type ComponentRef } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso4Volumen_mp() {
  const [largo, setLargo] = useState('')
  const [ancho, setAncho] = useState('')
  const [densidad, setDensidad] = useState('')

  const refAncho = useRef<ComponentRef<typeof TextInput>>(null)
  const refDensidad = useRef<ComponentRef<typeof TextInput>>(null)

  const l = parseFloat(largo)
  const a = parseFloat(ancho)
  const d = parseFloat(densidad)

  const calculoValido = !isNaN(l) && !isNaN(a) && !isNaN(d) && l > 0 && a > 0 && d > 0
  const aforoTotal = calculoValido ? Math.floor(l * a * d) : null

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Cálculo de Aforo de Auditorio</Text>

      <Text style={styles4.etiqueta}>Largo de la sala (metros)</Text>
      <TextInput
        style={styles4.campo}
        value={largo}
        onChangeText={setLargo}
        placeholder="ej. 20"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refAncho.current?.focus()}
        blurOnSubmit={false}
      />

      <Text style={styles4.etiqueta}>Ancho de la sala (metros)</Text>
      <TextInput
        ref={refAncho}
        style={styles4.campo}
        value={ancho}
        onChangeText={setAncho}
        placeholder="ej. 15"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refDensidad.current?.focus()}
        blurOnSubmit={false}
      />

      <Text style={styles4.etiqueta}>Densidad (asientos por m²)</Text>
      <TextInput
        ref={refDensidad}
        style={styles4.campo}
        value={densidad}
        onChangeText={setDensidad}
        placeholder="ej. 1.2"
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      <View style={styles4.preview}>
        <Text style={styles4.previewTitulo}>Fórmula: Largo × Ancho × Densidad</Text>
        <Text style={styles4.previewTexto}>
          {aforoTotal !== null
            ? `Capacidad máxima: ${aforoTotal} personas`
            : 'Ingresa dimensiones válidas para proyectar aforo'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 14,
  },
  previewTitulo: {
    fontSize: 12,
    color: '#90caf9',
    marginBottom: 6,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 15,
    fontWeight: '600',
    color: '#a8ff78',
  },
})