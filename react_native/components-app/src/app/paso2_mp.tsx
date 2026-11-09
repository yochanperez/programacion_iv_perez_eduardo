import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function Card_mp({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

export function FilaInfo_mp({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2_mp() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle de Sala de Evento</Text>

      <Card_mp titulo="Auditorio Magna I" subtitulo="Conferencia Magistral Inaugural">
        <FilaInfo_mp etiqueta="Capacidad máxima" valor="350 personas" />
        <FilaInfo_mp etiqueta="Ubicación" valor="Edificio Central · Nivel 2" />
        <FilaInfo_mp etiqueta="Ponente en sala" valor="Dra. Elena Vasquez" />
        <FilaInfo_mp etiqueta="Horario" valor="09:00 - 11:30" />
        <FilaInfo_mp etiqueta="Asistencia registrada" valor="280 / 350 plazas" />
      </Card_mp>

      <Card_mp titulo="Equipamiento y Servicios">
        <FilaInfo_mp etiqueta="Proyección" valor="Doble Pantalla LED 4K" />
        <FilaInfo_mp etiqueta="Audio" valor="4 micrófonos inalámbricos" />
        <FilaInfo_mp etiqueta="Transmisión" valor="Streaming activo (YouTube/Zoom)" />
        <FilaInfo_mp etiqueta="Traducción simultánea" valor="Disponible (Canal 2)" />
      </Card_mp>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})