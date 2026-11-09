import { StyleSheet, Text, View } from 'react-native'
import { useConexionSimulada } from '../hooks/UseConexionSimulada'
import { TarjetaSala_mp } from './paso8TarjetaServidor_mp'

export function Paso8_mp() {
  const streamAuditorioMagna = useConexionSimulada('Auditorio-Magna-I')
  const streamSalaTech       = useConexionSimulada('Laboratorio-Tech-A')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Transmisión en Vivo de Salas</Text>
      <Text style={styles.subtitulo}>Estado de señal AV y enlaces de streaming</Text>

      <TarjetaSala_mp nombre="Auditorio Magna I (Keynotes)" hook={streamAuditorioMagna} />
      <TarjetaSala_mp nombre="Laboratorio Tech A (Workshops)" hook={streamSalaTech} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    gap: 12,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  subtitulo: {
    fontSize: 13,
    color: '#546e7a',
    marginBottom: 8,
  },
})