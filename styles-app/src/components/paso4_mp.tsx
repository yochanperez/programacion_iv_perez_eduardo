import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

function sombra(nivel: 1 | 2 | 3): object {
  return Platform.select({
    ios: {
      shadowColor: '#1565c0',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: {
      elevation: nivel * 8,
    },
    web: {
      boxShadow: `0 ${nivel * 2}px ${nivel * 6}px rgba(0, 0, 0, 0.15)`,
    },
    default: {},
  }) ?? {}
}

type EstadoConferencia = 'confirmada' | 'reprogramada' | 'cancelada'

export function Paso4_mp() {
  const plataforma = Platform.OS

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View style={estilosPaso4.cabecera}>
        <Text style={estilosPaso4.plataforma}>
          Consola del Congreso · Plataforma: {plataforma}
        </Text>
      </View>

      <TarjetaSombreada_mp
        nivel={1}
        titulo="Keynote: Modelos RAG"
        estado="confirmada"
        sala="Auditorio Magna I · 09:00"
      />
      <TarjetaSombreada_mp
        nivel={2}
        titulo="Panel: Hardening Masivo"
        estado="reprogramada"
        sala="Auditorio Magna II · 11:30"
      />
      <TarjetaSombreada_mp
        nivel={3}
        titulo="Feria de Empresas Tech"
        estado="cancelada"
        sala="Pabellón de Exposiciones"
      />

      <View style={estilosPaso4.bloque}>
        <Text style={estilosPaso4.bloqueTexto}>
          {Platform.OS === 'ios'
            ? 'iOS: proyectando sombra nativa con shadowColor + offset + radius'
            : Platform.OS === 'android'
              ? 'Android: sombras de tarjetas mediante elevation (nivel * 8)'
              : 'Web: usando CSS boxShadow'}
        </Text>
      </View>
    </ScrollView>
  )
}

function TarjetaSombreada_mp({
  nivel,
  titulo,
  estado,
  sala,
}: {
  nivel: 1 | 2 | 3
  titulo: string
  estado: EstadoConferencia
  sala: string
}) {
  const coloresEstado: Record<EstadoConferencia, string> = {
    confirmada:   '#2e7d32',
    reprogramada: '#e65100',
    cancelada:    '#6b7280',
  }

  return (
    <View style={[estilosPaso4.tarjeta, sombra(nivel)]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={estilosPaso4.titulo}>{titulo}</Text>
        <View style={[estilosPaso4.badge, { backgroundColor: coloresEstado[estado] }]}>
          <Text style={estilosPaso4.badgeTexto}>{estado.toUpperCase()}</Text>
        </View>
      </View>
      <Text style={estilosPaso4.sala}>{sala}</Text>
      <Text style={estilosPaso4.nivelTexto}>Nivel de elevación visual {nivel} (elevation: {nivel * 8})</Text>
    </View>
  )
}

const estilosPaso4 = StyleSheet.create({
  cabecera: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 12,
  },
  plataforma: { color: '#fff', fontWeight: '700', fontSize: 14 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  titulo:     { fontSize: 15, fontWeight: '700', color: '#1a1a2e' },
  sala:       { fontSize: 12, color: '#6b7280' },
  nivelTexto: { fontSize: 11, color: '#9ca3af', marginTop: 4 },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  bloque: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
  bloqueTexto: { fontSize: 13, color: '#92400e' },
})