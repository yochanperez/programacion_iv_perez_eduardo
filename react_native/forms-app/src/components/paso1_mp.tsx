import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { FilaConferencia_mp } from './paso1FilaServidor_mp'

export type Conferencia_mp = {
  id: string
  titulo: string
  sala: string
  disponible: boolean
}

export const CONFERENCIAS_DEMO_MP: Conferencia_mp[] = [
  { id: '1', titulo: 'Keynote IA & Big Data',           sala: 'Auditorio Magna I', disponible: true  },
  { id: '2', titulo: 'Taller NestJS & Microservicios',   sala: 'Laboratorio Tech A', disponible: true  },
  { id: '3', titulo: 'Panel: Seguridad Cloud 2026',     sala: 'Auditorio B',       disponible: true  },
  { id: '4', titulo: 'Masterclass: UX en E-commerce',    sala: 'Sala Virtual 01',   disponible: false },
  { id: '5', titulo: 'Foro: FinTech & Blockchain',       sala: 'Sala Polivalente',  disponible: true  },
  { id: '6', titulo: 'Mesa Redonda: Ética y Algoritmos', sala: 'Sala VIP 2',        disponible: false },
  { id: '7', titulo: 'Seminario: DevOps & CI/CD',        sala: 'Auditorio Central', disponible: true  },
  { id: '8', titulo: 'Networking y Cierre Magistral',    sala: 'Plaza Principal',   disponible: true },
]

export function Paso1_mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Catálogo de Conferencias</Text>
      <FlatList<Conferencia_mp>
        data={CONFERENCIAS_DEMO_MP}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaConferencia_mp conferencia={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})