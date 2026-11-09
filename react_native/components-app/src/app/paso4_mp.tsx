import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const SALAS_EVENTO_DEMO = [
  { id: '1',  nombre: 'Auditorio Magna I',      codigo: 'AUD-01', tipo: 'Conferencia Principal', ocupacion: 92, asistencia: 88 },
  { id: '2',  nombre: 'Auditorio Magna II',     codigo: 'AUD-02', tipo: 'Keynote Paralelo',       ocupacion: 65, asistencia: 60 },
  { id: '3',  nombre: 'Sala VIP Networking',    codigo: 'VIP-01', tipo: 'Reunión de Ponentes',    ocupacion: 40, asistencia: 35 },
  { id: '4',  nombre: 'Laboratorio Tech A',     codigo: 'LAB-01', tipo: 'Taller Práctico Hands-on', ocupacion: 100, asistencia: 95 },
  { id: '5',  nombre: 'Laboratorio Tech B',     codigo: 'LAB-02', tipo: 'Hackathon & Coding',     ocupacion: 78, asistencia: 70 },
  { id: '6',  nombre: 'Sala Polivalente 1',     codigo: 'POL-01', tipo: 'Exposición de Posters',  ocupacion: 55, asistencia: 50 },
  { id: '7',  nombre: 'Sala Polivalente 2',     codigo: 'POL-02', tipo: 'Mesas Redondas',         ocupacion: 30, asistencia: 25 },
  { id: '8',  nombre: 'Teatro Universitario',   codigo: 'TEA-01', tipo: 'Ceremonia de Clausura',  ocupacion: 15, asistencia: 12 },
  { id: '9',  nombre: 'Centro de Prensa',       codigo: 'PRE-01', tipo: 'Ruedas de Prensa',       ocupacion: 85, asistencia: 80 },
  { id: '10', nombre: 'Sala de Streaming Hub',   codigo: 'STR-01', tipo: 'Cabinas de Grabación',   ocupacion: 90, asistencia: 90 },
  { id: '11', nombre: 'Domo Tecnológico',       codigo: 'DOM-01', tipo: 'Feria de Empresas',      ocupacion: 72, asistencia: 68 },
  { id: '12', nombre: 'Auditorio de Posgrados', codigo: 'POS-01', tipo: 'Defensa de Ponencias',   ocupacion: 48, asistencia: 42 },
]

interface BarraOcupacionProps {
  porcentaje: number
  etiqueta: string
}

function BarraOcupacion_mp({ porcentaje, etiqueta }: BarraOcupacionProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaSala_mp({ nombre, codigo, tipo, ocupacion, asistencia }: typeof SALAS_EVENTO_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoCodigo}>{codigo}</Text>
      </View>
      <Text style={estilos4.nodoTipo}>{tipo}</Text>
      <BarraOcupacion_mp porcentaje={ocupacion} etiqueta="Aforo" />
      <BarraOcupacion_mp porcentaje={asistencia} etiqueta="Check" />
    </View>
  )
}

export function Paso4_mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Monitoreo de Aforos y Salas</Text>
        <Text style={estilos4.headerSub}>{SALAS_EVENTO_DEMO.length} espacios activos en el evento</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {SALAS_EVENTO_DEMO.map((sala) => (
          <TarjetaSala_mp key={sala.id} {...sala} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoCodigo: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoTipo: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 36,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})