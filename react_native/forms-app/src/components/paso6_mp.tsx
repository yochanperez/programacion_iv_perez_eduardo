import { KeyboardAvoidingView, Platform, SafeAreaView, TextInput, Text, View, Pressable, StyleSheet, Alert, ScrollView } from 'react-native'
import { useState } from 'react'

export function Paso6_mp() {
  const [titulo, setTitulo] = useState('')
  const [ponente, setPonente] = useState('')
  const [aforo, setAforo] = useState('150')
  const [requisitos, setRequisitos] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onAgregar() {
    if (!titulo.trim() || !ponente.trim() || !aforo.trim()) {
      setError('Completa los campos obligatorios antes de continuar')
      return
    }
    setError(null)
    Alert.alert(
      'Ponencia Registrada',
      `"${titulo}"\nPonente: ${ponente} · Aforo: ${aforo} plazas\nRequisitos: ${requisitos || 'Ninguno'}`
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Nueva Ponencia de Congreso</Text>
          <Text style={styles6.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles6.etiquetaCampo}>Título de la Ponencia</Text>
          <TextInput
            style={styles6.campo}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="ej. Microservicios Escalables con Docker"
            autoCapitalize="sentences"
          />

          <Text style={styles6.etiquetaCampo}>Nombre del Ponente / Expositor</Text>
          <TextInput
            style={styles6.campo}
            value={ponente}
            onChangeText={setPonente}
            placeholder="Dra. Elena Vasquez"
          />

          <Text style={styles6.etiquetaCampo}>Aforo Máximo Sugerido</Text>
          <TextInput
            style={styles6.campo}
            value={aforo}
            onChangeText={setAforo}
            placeholder="150"
            keyboardType="number-pad"
          />

          <Text style={styles6.etiquetaCampo}>Requerimientos Técnicos (opcional)</Text>
          <TextInput
            style={[styles6.campo, styles6.campoMultilinea]}
            value={requisitos}
            onChangeText={setRequisitos}
            placeholder="Proyector 4K, 2 micrófonos inalámbricos, conexión LAN y mesa técnica"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onAgregar}
          >
            <Text style={styles6.textoBoton}>Guardar Conferencia</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})