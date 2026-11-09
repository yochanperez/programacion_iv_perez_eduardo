import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

type SesionEvento = {
  id: string
  nombre: string
  sala: string
  estado: 'en_vivo' | 'por_iniciar' | 'cerrada'
  ocupacion: number
}

const SESIONES_CONGRESO: SesionEvento[] = [
  { id: '1', nombre: 'Keynote: IA Generativa',     sala: 'Auditorio Magna I',  estado: 'en_vivo',     ocupacion: 45 },
  { id: '2', nombre: 'Taller: NestJS & Docker',    sala: 'Lab Tech A',         estado: 'en_vivo',     ocupacion: 38 },
  { id: '3', nombre: 'Panel: Seguridad Cloud',     sala: 'Auditorio B',        estado: 'por_iniciar', ocupacion: 75 },
  { id: '4', nombre: 'Masterclass: UX Research',   sala: 'Sala 01 Virtual',    estado: 'en_vivo',     ocupacion: 55 },
  { id: '5', nombre: 'Mesa: FinTech & Blockchain', sala: 'Sala Polivalente',   estado: 'en_vivo',     ocupacion: 12 },
  { id: '6', nombre: 'Ética y Algoritmos',         sala: 'Sala VIP 2',         estado: 'cerrada',     ocupacion: 0  },
  { id: '7', nombre: 'DevOps & CI/CD Pipelines',   sala: 'Auditorio Central',  estado: 'en_vivo',     ocupacion: 7  },
  { id: '8', nombre: 'Networking & Clausura',      sala: 'Plaza Principal',    estado: 'por_iniciar', ocupacion: 85 },
]

const COLOR_ESTADO: Record<SesionEvento['estado'], string> = {
  en_vivo:     '#2e7d32',
  por_iniciar: '#e65100',
  cerrada:     '#6b7280',
}

export function Paso3_mp() {
  const { width } = Dimensions.get('window')
  const columnas = width >= 400 ? 4 : 2
  const GAP = 0
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text style={estilosPaso3.cabecera}>
        Panel de Salas en Congreso · {Math.round(width)}dp · {columnas} col
      </Text>

      <View style={estilosPaso3.rejilla}>
        {SESIONES_CONGRESO.map((sesion) => (
          <TarjetaSesion_mp
            key={sesion.id}
            sesion={sesion}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaSesion_mp({
  sesion,
  ancho,
}: {
  sesion: SesionEvento
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[sesion.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreSesion} numberOfLines={1}>
        {sesion.nombre}
      </Text>
      <Text style={estilosPaso3.sala}>{sesion.sala}</Text>

      {/* Barra de aforo ocupado */}
      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${sesion.ocupacion}%`,
              backgroundColor: sesion.ocupacion > 80 ? '#c62828' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.ocupacion}>Aforo: {sesion.ocupacion}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreSesion: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  sala:         { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  ocupacion:    { fontSize: 11, color: '#6b7280' },
})