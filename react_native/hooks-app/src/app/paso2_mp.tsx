import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoEscaner = 'escaneando' | 'valido' | 'invalido' | 'inactivo'

export default function Paso2() {
  const [tiempoValidacion, setTiempoValidacion] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoEscaner>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [lecturasTotales, setLecturasTotales] = useState<number>(0)
  const [acreditacionesRechazadas, setAcreditacionesRechazadas] = useState<number>(0)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setEstado('escaneando')

      setTimeout(() => {
        const credencialInvalida = Math.random() < 0.15

        if (credencialInvalida) {
          setTiempoValidacion(null)
          setEstado('invalido')
          setAcreditacionesRechazadas((prev) => prev + 1)
        } else {
          const ms = Math.floor(Math.random() * 190) + 10
          setTiempoValidacion(ms)
          setEstado('valido')
        }
        setLecturasTotales((c) => c + 1)
      }, 400)
    }, 2000)

    return () => clearInterval(intervalo)
  }, [activo])

  const porcentajeRechazo =
    lecturasTotales > 0
      ? ((acreditacionesRechazadas / lecturasTotales) * 100).toFixed(1)
      : '0.0'

  const colorEstado: Record<EstadoEscaner, string> = {
    escaneando: '#1565c0',
    valido: '#2e7d32',
    invalido: '#c62828',
    inactivo: '#757575',
  }

  const textoEstado: Record<EstadoEscaner, string> = {
    escaneando: 'VERIFICANDO CREDENCIAL...',
    valido: 'ACCESO PERMITIDO',
    invalido: 'CREDENCIAL NO VÁLIDA',
    inactivo: 'TORNQUETE EN ESPERA',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Control de Acceso QR — Auditorio Principal</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {textoEstado[estado]}
        </Text>

        <Text style={styles.latencia}>
          {tiempoValidacion !== null ? `${tiempoValidacion} ms` : '— ms'}
        </Text>

        <Text style={styles.perdida}>
          Acreditaciones denegadas: {porcentajeRechazo}% ({acreditacionesRechazadas}/{lecturasTotales})
        </Text>

        <Text style={styles.ciclos}>Asistentes procesados: {lecturasTotales}</Text>
        <Text style={styles.detalle}>Módulo de Ingreso 01 · Puerta Norte · Molinete Automático</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo((a) => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Pausar escaneo' : 'Iniciar escaneo de gafetes'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a1a1a',
  },
  tarjeta: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    gap: 6,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  latencia: {
    marginVertical: 8,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#212121',
  },
  perdida: {
    fontSize: 14,
    fontWeight: '600',
    color: '#d32f2f',
  },
  ciclos: {
    fontSize: 14,
    color: '#424242',
  },
  detalle: {
    color: '#757575',
    fontSize: 13,
    textAlign: 'center',
  },
  boton: {
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
  },
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})