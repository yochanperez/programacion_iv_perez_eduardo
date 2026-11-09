import { SafeAreaView, TextInput, Text, View, Pressable, StyleSheet, Alert, ScrollView } from 'react-native'
import { useState } from 'react'

const REGEX_SALA = /^[A-Z]{2,4}-\d{2,3}$/

type CamposFormulario_mp = {
  titulo: string
  codigoSala: string
  aforo: string
}

type ErroresFormulario_mp = {
  titulo: string | null
  codigoSala: string | null
  aforo: string | null
}

export function validar_mp(campos: CamposFormulario_mp): ErroresFormulario_mp {
  const errores: ErroresFormulario_mp = { titulo: null, codigoSala: null, aforo: null }

  if (campos.titulo.trim().length === 0) {
    errores.titulo = 'El título de la conferencia es obligatorio'
  } else if (campos.titulo.trim().length < 5) {
    errores.titulo = 'El título debe tener al menos 5 caracteres'
  }

  if (campos.codigoSala.trim().length === 0) {
    errores.codigoSala = 'El código de sala es obligatorio'
  } else if (!REGEX_SALA.test(campos.codigoSala.trim().toUpperCase())) {
    errores.codigoSala = 'Formato inválido (ej. AUD-01, LAB-02)'
  }

  const numAforo = Number(campos.aforo)
  if (campos.aforo.trim().length === 0) {
    errores.aforo = 'El aforo es obligatorio'
  } else if (!Number.isInteger(numAforo) || numAforo < 10 || numAforo > 2000) {
    errores.aforo = 'Aforo inválido (entre 10 y 2000 personas)'
  }

  return errores
}

function hayErrores_mp(errores: ErroresFormulario_mp): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError_mp({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5_mp() {
  const [campos, setCampos] = useState<CamposFormulario_mp>({
    titulo: '',
    codigoSala: '',
    aforo: '100',
  })
  const [errores, setErrores] = useState<ErroresFormulario_mp>({
    titulo: null,
    codigoSala: null,
    aforo: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario_mp, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar_mp(campos)
    setErrores(nuevosErrores)
    if (hayErrores_mp(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Conferencia Programada',
      `${campos.titulo}\nSala: ${campos.codigoSala.toUpperCase()} · Aforo: ${campos.aforo} asistentes`,
      [
        {
          text: 'Agregar otra',
          onPress: () => {
            setCampos({ titulo: '', codigoSala: '', aforo: '100' })
            setErrores({ titulo: null, codigoSala: null, aforo: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Registrar Conferencia</Text>
        <Text style={styles5.subtitulo}>
          Los campos con * son obligatorios para la agenda oficial
        </Text>

        <CampoConError_mp etiqueta="Título de la Conferencia *" error={errores.titulo}>
          <TextInput
            style={[
              styles5.campo,
              errores.titulo !== null && styles5.campoError,
            ]}
            value={campos.titulo}
            onChangeText={(v) => actualizarCampo('titulo', v)}
            placeholder="ej. Arquitecturas React 19 y Next"
            returnKeyType="next"
          />
        </CampoConError_mp>

        <CampoConError_mp etiqueta="Código de Sala *" error={errores.codigoSala}>
          <TextInput
            style={[
              styles5.campo,
              errores.codigoSala !== null && styles5.campoError,
            ]}
            value={campos.codigoSala}
            onChangeText={(v) => actualizarCampo('codigoSala', v)}
            placeholder="AUD-01"
            autoCapitalize="characters"
            returnKeyType="next"
          />
        </CampoConError_mp>

        <CampoConError_mp etiqueta="Aforo Máximo *" error={errores.aforo}>
          <TextInput
            style={[
              styles5.campo,
              errores.aforo !== null && styles5.campoError,
            ]}
            value={campos.aforo}
            onChangeText={(v) => actualizarCampo('aforo', v)}
            placeholder="100"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError_mp>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Registrada' : 'Guardar en la Agenda'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})