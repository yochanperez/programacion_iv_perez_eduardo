import { StyleSheet, Text, View } from 'react-native'
import { Conferencia_mp } from './paso1_mp'

export function FilaConferencia_mp({ conferencia }: { conferencia: Conferencia_mp }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{conferencia.titulo}</Text>
        <Text style={styles1.sala}>{conferencia.sala}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          conferencia.disponible ? styles1.estadoDisponible : styles1.estadoAgotado,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {conferencia.disponible ? 'CUPOS' : 'AGOTADO'}
        </Text>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  sala: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoDisponible: { backgroundColor: '#e8f5e9' },
  estadoAgotado: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})