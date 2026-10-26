import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso2() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Acceso a Conferencia</Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={() => Alert.alert('Acreditación', 'Validando credencial de asistente...')}
      >
        <Text style={styles.textoBoton}>Verificar Acreditación</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 80,
    height: 80,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  boton: {
    backgroundColor: '#1565c0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botonPresionado: {
    backgroundColor: '#0d47a1',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})