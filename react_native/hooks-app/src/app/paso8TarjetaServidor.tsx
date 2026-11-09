import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useConexionSimulada } from '../hooks/UseConexionSimulada'

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

export function TarjetaServidor({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando:   '#1565c0',
    conectado:    '#2e7d32',
    error:        '#c62828',
  }

  const textoBoton: Record<string, string> = {
    desconectado: 'Conectar',
    conectando:   'Conectando…',
    conectado:    'Reconectar',
    error:        'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreServidor}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Intentos: {intentos}
        {latencia !== null ? `  ·  Latencia: ${latencia} ms` : ''}
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
          <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar</Text>
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
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: 'bold',
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
  },
})