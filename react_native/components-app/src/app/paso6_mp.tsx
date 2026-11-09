import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card_mp, FilaInfo_mp } from './paso2_mp'
import { ModalConfirm_mp } from './paso5_mp'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion_mp({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

interface BadgeEstadoProps {
  estado: string
  mostrarIcono?: boolean
  tamaño?: number
}

function BadgeEstado_mp({ estado, mostrarIcono = false, tamaño = 12 }: BadgeEstadoProps) {
  const color = estado.toLowerCase() === 'en sesión' ? '#2e7d32' : '#78909c'

  return (
    <View style={estilos6.badgeEstado}>
      {mostrarIcono && (
        <View
          style={[
            estilos6.iconoEstado,
            { width: tamaño, height: tamaño, backgroundColor: color },
          ]}
        />
      )}
      <Text style={[estilos6.textoEstado, { color }]}>{estado}</Text>
    </View>
  )
}

export function Paso6_mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] Acción: "${accionPendiente}" registrada en Auditorio Magna I`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Auditorio Magna I</Text>
          <Text style={estilos6.cabDetalle}>AUD-01 · Conferencia Magistral</Text>
        </View>
        <BadgeEstado_mp estado="en sesión" mostrarIcono tamaño={12} />
      </View>

      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        <Card_mp titulo="Métricas de Sala" subtitulo="Actualización en vivo del evento">
          <FilaInfo_mp etiqueta="Aforo ocupado" valor="280 / 350 plazas (80%)" />
          <FilaInfo_mp etiqueta="Check-in validado" valor="265 credenciales QR" />
          <FilaInfo_mp etiqueta="Espectadores online" valor="1,420 en streaming" />
          <FilaInfo_mp etiqueta="Calidad de señal AV" valor="1080p 60fps · Estable" />
          <FilaInfo_mp etiqueta="Tiempo de sesión" valor="1h 15m transcurridos" />
        </Card_mp>

        <Card_mp titulo="Detalles de la Agenda">
          <FilaInfo_mp etiqueta="Ponencia" valor="IA en Sistemas Distribuidos" />
          <FilaInfo_mp etiqueta="Ponente principal" valor="Dra. Elena Vasquez" />
          <FilaInfo_mp etiqueta="Moderador" valor="Ing. Carlos Mendoza" />
          <FilaInfo_mp etiqueta="Ubicación" valor="Edificio Central · Nivel 2" />
          <FilaInfo_mp etiqueta="Traducción" valor="Canal 2 (Inglés/Español)" />
        </Card_mp>

        <Card_mp titulo="Acciones de Coordinación">
          <View style={estilos6.gridAcciones}>
            <BotonAccion_mp
              etiqueta="Abrir Micro Abierto"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Apertura de ronda de preguntas')}
            />
            <BotonAccion_mp
              etiqueta="Cerrar Aforo"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Cierre definitivo de aforo')}
            />
            <BotonAccion_mp
              etiqueta="Iniciar Stream"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Inicio de transmisión en vivo')}
            />
            <BotonAccion_mp
              etiqueta="Descargar Asistencia"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Exportación de lista de asistencia')}
            />
          </View>
        </Card_mp>

        {log.length > 0 && (
          <Card_mp titulo="Registro de Operaciones">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card_mp>
        )}
      </ScrollView>

      <ModalConfirm_mp
        visible={modalVisible}
        titulo={`Confirmar acción de evento`}
        mensaje={`¿Deseas ejecutar "${accionPendiente}" para el Auditorio Magna I?`}
        etiquetaConfirmar="Confirmar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabDetalle: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
  badgeEstado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconoEstado: {
    borderRadius: 99,
  },
  textoEstado: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
})