// app/index.tsx — añade debajo de styles3
import { useRef, useState, type ComponentRef } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso4Volumen() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')

  // Referencias para encadenar el foco de los inputs
  const refAltura = useRef<ComponentRef<typeof TextInput>>(null)
  const refProfundidad = useRef<ComponentRef<typeof TextInput>>(null)

  // Conversión y cálculo del volumen
  const b = parseFloat(base)
  const h = parseFloat(altura)
  const p = parseFloat(profundidad)

  const volumenValido = !isNaN(b) && !isNaN(h) && !isNaN(p) && b > 0 && h > 0 && p > 0
  const volumen = volumenValido ? (b * h * p).toFixed(2) : null

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Cálculo de Volumen</Text>

      <Text style={styles4.etiqueta}>Base</Text>
      <TextInput
        style={styles4.campo}
        value={base}
        onChangeText={setBase}
        placeholder="ej. 5"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
        blurOnSubmit={false}
      />

      <Text style={styles4.etiqueta}>Altura</Text>
      <TextInput
        ref={refAltura}
        style={styles4.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="ej. 10"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
        blurOnSubmit={false}
      />

      <Text style={styles4.etiqueta}>Profundidad</Text>
      <TextInput
        ref={refProfundidad}
        style={styles4.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="ej. 2"
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      {/* Resultado */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTitulo}>Fórmula: Base × Altura × Profundidad</Text>
        <Text style={styles4.previewTexto}>
          {volumen !== null
            ? `Volumen = ${volumen} u³`
            : 'Ingresa valores válidos en todos los campos'}
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