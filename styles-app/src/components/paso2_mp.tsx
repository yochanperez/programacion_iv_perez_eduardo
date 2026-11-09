import { Dimensions, StyleSheet, Text, View } from 'react-native'

export function Paso2_mp() {
  const anchoPantalla = Dimensions.get('window').width

  return (
    <View style={estilosPaso2.pantalla}>

      {/* ── dp fijos: Credenciales e identificadores ───────── */}
      <Text style={estilosPaso2.seccion}>Distintivos de acreditación (dp fijos)</Text>
      <View style={estilosPaso2.fila}>
        {([32, 48, 64, 80] as const).map((dp) => (
          <View key={dp} style={[estilosPaso2.cuadrado, { width: dp, height: dp }]}>
            <Text style={estilosPaso2.etiqueta}>{dp} dp</Text>
          </View>
        ))}
      </View>

      {/* ── % en width: Ocupación de aforo por auditorio ───── */}
      <Text style={estilosPaso2.seccion}>Ocupación de Aforo en '%' — relativo a sala</Text>
      {(['100%', '75%', '50%', '25%'] as const).map((pct, index) => (
        <View
          key={pct}
          style={[
            estilosPaso2.barra,
            { width: pct },
            index === 0 && { marginTop: '10%' },
          ]}
        >
          <Text style={estilosPaso2.etiqueta}>Aforo: {pct}</Text>
        </View>
      ))}

      {/* ── Ancho real de la pantalla detectado ─────────────── */}
      <Text style={estilosPaso2.seccion}>
        Ancho de pantalla del evento: {anchoPantalla} dp
      </Text>
      <View style={[estilosPaso2.indicador, { width: anchoPantalla * 0.9 }]}>
        <Text style={estilosPaso2.etiqueta}>Banner Escenario (90% de {anchoPantalla} dp)</Text>
      </View>

      {/* ── Nota técnica ──────────────────────────────────── */}
      <View style={estilosPaso2.nota}>
        <Text style={{ fontSize: 13, color: '#92400e' }}>
          Gestión de Eventos: tipografías de credenciales (fontSize: 16 dp) y radios de butacas (borderRadius: 8 dp) solo aceptan números dp.
        </Text>
      </View>

    </View>
  )
}

const estilosPaso2 = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f5f7fa', padding: 16, gap: 12 },
  seccion:  { fontSize: 12, color: '#6b7280', fontFamily: 'monospace', marginTop: 8 },
  fila:     { flexDirection: 'row', gap: 8, alignItems: 'flex-end' },
  cuadrado: {
    backgroundColor: '#1565c0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  barra: {
    height: 32,
    backgroundColor: '#1565c0',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  etiqueta:  { color: '#fff', fontSize: 11, fontWeight: '600' },
  indicador: {
    height: 40,
    backgroundColor: '#2e7d32',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  nota: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
})