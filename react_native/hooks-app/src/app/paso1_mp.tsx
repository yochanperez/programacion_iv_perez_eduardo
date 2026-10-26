import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso1() {
  const [intentos, setIntentos] = useState<number>(0)
  const [sincronizado, setSincronizado] = useState<boolean>(false)

  function manejarSincronizacion() {
    if (sincronizado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    if (nuevoIntento >= 3) {
      setSincronizado(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setSincronizado(false)
  }

  const estadoTexto = sincronizado
    ? '✓ Conectado al Servidor de Acreditaciones'
    : `Intento ${intentos} de 3 fallido`

  const colorEstado = sincronizado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sincronización de Aforo y Registro</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Terminal Acreditación 01 · Auditorio Principal</Text>
      </View>

      <Text style={[styles.detalle, { color: colorEstado }]}>
        {intentos > 0 && !sincronizado ? 'Fallo al sincronizar base de datos de asistentes' : ''}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          sincronizado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !sincronizado && { opacity: 0.75 },
        ]}
        onPress={manejarSincronizacion}
        disabled={sincronizado}
      >
        <Text style={styles.textoBoton}>
          {sincronizado ? 'Aforo Sincronizado' : 'Reintentar sincronización'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar terminal de acceso</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})