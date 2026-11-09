    import { StyleSheet, Text, View } from 'react-native'

export function EncabezadoSeccion_mp({
  track,
  horario,
}: {
  track: string
  horario: string
}) {
  return (
    <View style={styles3.encabezado}>
      <Text style={styles3.encabezadoTitulo}>{track}</Text>
      <Text style={styles3.encabezadoHorario}>{horario}</Text>
    </View>
  )
}

const styles3 = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoHorario: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
})