import { useRef, useState, type ComponentRef } from 'react'
import { SafeAreaView, TextInput, Text, View, Pressable, StyleSheet } from 'react-native'

export function Paso4_mp() {
  const [conferencia, setConferencia] = useState('')
  const [sala, setSala] = useState('')
  const [capacidad, setCapacidad] = useState('')
  const [codigoAcceso, setCodigoAcceso] = useState('')
  const [mostrarCodigo, setMostrarCodigo] = useState(false)

  const refSala = useRef<ComponentRef<typeof TextInput>>(null)
  const refCapacidad = useRef<ComponentRef<typeof TextInput>>(null)
  const refCodigo = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registrar Sesión y Acceso</Text>

      <Text style={styles4.etiqueta}>Título de la Conferencia</Text>
      <TextInput
        style={styles4.campo}
        value={conferencia}
        onChangeText={setConferencia}
        placeholder="ej. Taller de Microservicios NestJS"
        autoCapitalize="sentences"
        returnKeyType="next"
        onSubmitEditing={() => refSala.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Código de Sala / Auditorio</Text>
      <TextInput
        ref={refSala}
        style={styles4.campo}
        value={sala}
        onChangeText={setSala}
        placeholder="AUD-01"
        autoCapitalize="characters"
        returnKeyType="next"
        onSubmitEditing={() => refCapacidad.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Capacidad Máxima (Aforo)</Text>
      <TextInput
        ref={refCapacidad}
        style={styles4.campo}
        value={capacidad}
        onChangeText={setCapacidad}
        placeholder="150"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refCodigo.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Clave de Acceso Ponente</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refCodigo}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={codigoAcceso}
          onChangeText={setCodigoAcceso}
          placeholder="••••••••"
          secureTextEntry={!mostrarCodigo}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarCodigo((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarCodigo ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          Sesión: {conferencia || '<titulo>'} | Sala: {sala || '<sala>'} | Aforo: {capacidad || '0'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export const styles4 = StyleSheet.create({
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})