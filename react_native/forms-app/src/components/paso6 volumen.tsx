import { KeyboardAvoidingView, Platform , SafeAreaView,TextInput, Text , View, Pressable, StyleSheet, Alert, ScrollView} from 'react-native'
import { useState, useRef, type ComponentRef  } from 'react'

export function Paso6Volumen() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')
  const [etiqueta, setEtiqueta] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [resultado, setResultado] = useState<string | null>(null)

  // Referencias para encadenar el foco con returnKeyType="next"
  const refAltura = useRef<ComponentRef<typeof TextInput>>(null)
  const refProfundidad = useRef<ComponentRef<typeof TextInput>>(null)
  const refEtiqueta = useRef<ComponentRef<typeof TextInput>>(null)

  function onCalcular() {
    const b = parseFloat(base)
    const h = parseFloat(altura)
    const p = parseFloat(profundidad)

    if (isNaN(b) || isNaN(h) || isNaN(p) || b <= 0 || h <= 0 || p <= 0) {
      setError('Ingresa valores numéricos positivos para base, altura y profundidad')
      setResultado(null)
      return
    }

    setError(null)
    const vol = (b * h * p).toFixed(2)
    setResultado(vol)

    Alert.alert(
      'Cálculo realizado',
      `Base: ${b} | Altura: ${h} | Profundidad: ${p}\nVolumen: ${vol} u³\nEtiqueta: ${etiqueta || 'sin etiqueta'}`
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Cabecera fija */}
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Cálculo de Volumen</Text>
          <Text style={styles6.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        {/* Cuerpo con scroll para evitar tapado por teclado */}
        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          {/* Base */}
          <Text style={styles6.etiquetaCampo}>Base</Text>
          <TextInput
            style={styles6.campo}
            value={base}
            onChangeText={setBase}
            placeholder="ej. 12.5"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onSubmitEditing={() => refAltura.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Altura */}
          <Text style={styles6.etiquetaCampo}>Altura</Text>
          <TextInput
            ref={refAltura}
            style={styles6.campo}
            value={altura}
            onChangeText={setAltura}
            placeholder="ej. 8"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onSubmitEditing={() => refProfundidad.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Profundidad */}
          <Text style={styles6.etiquetaCampo}>Profundidad</Text>
          <TextInput
            ref={refProfundidad}
            style={styles6.campo}
            value={profundidad}
            onChangeText={setProfundidad}
            placeholder="ej. 5"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onSubmitEditing={() => refEtiqueta.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Etiqueta / Notas */}
          <Text style={styles6.etiquetaCampo}>Etiqueta / Descripción (opcional)</Text>
          <TextInput
            ref={refEtiqueta}
            style={[styles6.campo, styles6.campoMultilinea]}
            value={etiqueta}
            onChangeText={setEtiqueta}
            placeholder="Caja de almacenamiento, contenedor de bodega, etc."
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {/* Mensaje de error */}
          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          {/* Vista previa del resultado */}
          {resultado !== null && (
            <View style={styles6.preview}>
              <Text style={styles6.previewTitulo}>Fórmula: Base × Altura × Profundidad</Text>
              <Text style={styles6.previewTexto}>Volumen = {resultado} u³</Text>
            </View>
          )}

          {/* Botón de acción */}
          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onCalcular}
          >
            <Text style={styles6.textoBoton}>Calcular volumen</Text>
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
  preview: {
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  previewTitulo: { fontSize: 12, color: '#90caf9', marginBottom: 4 },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: '700',
    color: '#a8ff78',
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})