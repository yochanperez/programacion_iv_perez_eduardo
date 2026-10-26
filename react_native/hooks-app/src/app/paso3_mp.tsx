import { useEffect, useRef, useState, type ComponentRef } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function Paso3() {
  const inputAsistenteRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputCredencialRef = useRef<ComponentRef<typeof TextInput>>(null)

  const [nombreAsistente, setNombreAsistente] = useState<string>('')
  const [codigoCredencial, setCodigoCredencial] = useState<string>('CONF-2026')

  useEffect(() => {
    inputAsistenteRef.current?.focus()
  }, [])

  const registrosSilenciososRef = useRef<number>(0)
  const [ultimoRegistro, setUltimaRegistro] = useState<string>('—')

  function registrarAsistencia() {
    registrosSilenciososRef.current += 1
    setUltimaRegistro(
      `${nombreAsistente.trim() || 'Asistente Invitado'} [${codigoCredencial.trim()}] — acreditación #${registrosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Acreditación Manual</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del Asistente o Ponente</Text>
        <TextInput
          ref={inputAsistenteRef}
          style={styles.input}
          value={nombreAsistente}
          onChangeText={setNombreAsistente}
          placeholder="Dra. Elena Rostova"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => inputCredencialRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Código de Credencial / Gafete</Text>
        <TextInput
          ref={inputCredencialRef}
          style={styles.input}
          value={codigoCredencial}
          onChangeText={setCodigoCredencial}
          placeholder="CONF-2026"
          placeholderTextColor="#aaa"
          autoCapitalize="characters"
          returnKeyType="done"
          onSubmitEditing={registrarAsistencia}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.75 },
        ]}
        onPress={registrarAsistencia}
      >
        <Text style={styles.textoBoton}>Validar e Ingresar</Text>
      </Pressable>

      <Text style={styles.detalle}>Última acreditación: {ultimoRegistro}</Text>
      <Text style={styles.subDetalle}>
        (las validaciones en memoria no provocan re-renders innecesarios)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  formulario: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    gap: 8,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  boton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalle: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  subDetalle: {
    color: '#757575',
    fontSize: 12,
    textAlign: 'center',
  },
})