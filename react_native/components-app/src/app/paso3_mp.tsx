import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoSesion = 'en_curso' | 'proxima' | 'finalizada' | 'cancelada' | 'reprogramada'

interface BadgeEstadoProps {
  estado: EstadoSesion
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoSesion, { fondo: string; texto: string }> = {
  en_curso:     { fondo: '#e8f5e9', texto: '#2e7d32' },
  proxima:      { fondo: '#e3f2fd', texto: '#1565c0' },
  finalizada:   { fondo: '#f5f5f5', texto: '#616161' },
  cancelada:    { fondo: '#fce4ec', texto: '#c62828' },
  reprogramada: { fondo: '#fff8e1', texto: '#f57f17' },
}

const ICONO_ESTADO: Record<EstadoSesion, string> = {
  en_curso:     '●',
  proxima:      '⏱',
  finalizada:   '✓',
  cancelada:    '✕',
  reprogramada: '🗓',
}

export function BadgeEstado_mp({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.replace('_', ' ').toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaConferenciaProps {
  titulo: string
  sala: string
  estado: EstadoSesion
  cuposDisponibles?: number
  onPress?: () => void
}

export function FilaConferencia_mp({
  titulo,
  sala,
  estado,
  cuposDisponibles,
  onPress,
}: FilaConferenciaProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        estilos3.fila,
        pressed && onPress ? estilos3.filaPresionada : null,
      ]}
    >
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.tituloConferencia}>{titulo}</Text>
        <Text style={estilos3.salaTexto}>{sala}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {cuposDisponibles !== undefined && (
          <Text style={estilos3.cupos}>{cuposDisponibles} cupos libres</Text>
        )}
        <BadgeEstado_mp estado={estado} mostrarIcono={false} />
      </View>
    </Pressable>
  )
}

export function Paso3_mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Agenda del Congreso</Text>
      <FilaConferencia_mp
        titulo="Keynote: IA Generativa"
        sala="Auditorio Magna · 09:00"
        estado="en_curso"
        cuposDisponibles={0}
        onPress={() => console.log('Sesión Keynote seleccionada')}
      />
      <FilaConferencia_mp
        titulo="Taller: Microservicios con NestJS"
        sala="Laboratorio 3 · 11:30"
        estado="proxima"
        cuposDisponibles={12}
        onPress={() => console.log('Taller NestJS seleccionado')}
      />
      <FilaConferencia_mp
        titulo="Panel: Ciberseguridad 2026"
        sala="Sala B · 14:00"
        estado="reprogramada"
        cuposDisponibles={25}
      />
      <FilaConferencia_mp
        titulo="Mesa Redonda: FinTech"
        sala="Sala C · 16:00"
        estado="cancelada"
      />
      <FilaConferencia_mp
        titulo="Networking & Coffee Break"
        sala="Hall Principal · 10:30"
        estado="finalizada"
      />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  filaPresionada: {
    opacity: 0.7,
  },
  infoIzq: { gap: 2, flex: 1, marginRight: 8 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  tituloConferencia: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  salaTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  cupos: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})