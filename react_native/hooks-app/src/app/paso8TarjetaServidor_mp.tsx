import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useConexionSimulada } from '../hooks/UseConexionSimulada'

interface PropsTarjetaSala_mp {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

export function TarjetaSala_mp({ nombre, hook }: PropsTarjetaSala_mp) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando:   '#1565c0',
    conectado:    '#2e7d32',
    error:        '#c62828',
  }

  const textoBoton: Record<string, string> = {
    desconectado: 'Iniciar Streaming',
    conectando:   'Conectando Señal…',
    conectado:    'Restablecer Stream',
    error:        'Reintentar Transmisión',
  }

  const etiquetaEstado: Record<string, string> = {
    desconectado: 'OFFLINE',
    conectando:   'ENLAZANDO',
    conectado:    'TRANSMITIENDO EN VIVO',
    error:        'FALLA DE SEÑAL AV',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreSala}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {etiquetaEstado[estado] || estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Reconexiones de señal: {intentos}
        {latencia !== null ? `  ·  Retardo de audio/video: ${latencia} ms` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            styles.botonActivo,
            estado === 'conectando' && styles.botonDeshabilitado,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={reconectar}
          disabled={estado === 'conectando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonSecundario,
            pressed && { opacity: 0.75 },
            { paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#1565c0', justifyContent: 'center' },
          ]}
          onPress={reiniciar}
        >
          <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar Mixer AV</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tarjeta: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#ffffff',
  },
  nombreSala: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  etiqueta: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  detalle: {
    marginTop: 8,
    color: '#616161',
  },
  boton: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    opacity: 0.5,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botonSecundario: {
    alignItems: 'center',
  },
  textoSecundario: {
    color: '#1565c0',
    fontWeight: '600',
  },
})