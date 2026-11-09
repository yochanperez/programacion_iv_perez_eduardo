import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { Conferencia_mp } from './paso1_mp'
import { FilaConferencia_mp } from './paso1FilaServidor_mp'
import { EncabezadoSeccion_mp } from './paso3EncabezadoSeccion_mp'

type SeccionTrack_mp = {
  title: string
  horario: string
  data: Conferencia_mp[]
}

const SECCIONES_EVENTO_MP: SeccionTrack_mp[] = [
  {
    title: 'Track A · Inteligencia Artificial & ML',
    horario: '09:00 - 12:00',
    data: [
      { id: 's1', titulo: 'Arquitectura de LLMs Locales', sala: 'Auditorio Magna I', disponible: true },
      { id: 's2', titulo: 'Visión Artificial en Robótica', sala: 'Auditorio Magna II', disponible: true },
      { id: 's3', titulo: 'Agentes Autónomos con LangChain', sala: 'Laboratorio Tech A', disponible: false },
    ],
  },
  {
    title: 'Track B · Desarrollo Web & Cloud Native',
    horario: '13:30 - 16:00',
    data: [
      { id: 's4', titulo: 'Escalabilidad con NestJS y Redis', sala: 'Laboratorio Tech B', disponible: true },
      { id: 's5', titulo: 'Arquitecturas Serverless en AWS', sala: 'Sala de Seminarios', disponible: true },
    ],
  },
  {
    title: 'Track C · Ciberseguridad & Gobernanza TI',
    horario: '16:30 - 19:00',
    data: [
      { id: 's6', titulo: 'Zero Trust en Entornos Masivos', sala: 'Auditorio Central', disponible: true },
      { id: 's7', titulo: 'Respuesta ante Ransomware', sala: 'Sala VIP 1', disponible: false },
      { id: 's8', titulo: 'Seguridad en APIs REST & GraphQL', sala: 'Laboratorio Tech A', disponible: true },
    ],
  },
]

export function Paso3_mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Cronograma por Tracks</Text>
      <SectionList<Conferencia_mp, SeccionTrack_mp>
        sections={SECCIONES_EVENTO_MP}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaConferencia_mp conferencia={item} />}
        renderSectionHeader={({ section }) => (
          <EncabezadoSeccion_mp track={section.title} horario={section.horario} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})