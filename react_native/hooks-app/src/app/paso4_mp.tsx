import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'

export default function Paso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()

  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const salasConferencias = [
    { nombre: 'Auditorio Central', aforo: 'Aforo: 350 personas', estado: 'disponible' },
    { nombre: 'Sala Magistral A', aforo: 'Aforo: 120 personas', estado: 'disponible' },
    { nombre: 'Workshop Cómputo', aforo: 'Aforo: 45 personas', estado: 'lleno' },
    { nombre: 'Salón de Prensa', aforo: 'Aforo: 60 personas', estado: 'disponible' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Disponibilidad de Salas y Auditorios
      </Text>

      <View
        style={[
          styles.tarjeta,
          {
            backgroundColor: colores.tarjeta,
            borderColor: colores.borde,
            width: '100%',
          },
        ]}
      >
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Terminal: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}modo: {esquema ?? 'estándar'}
        </Text>
      </View>

      <View style={styles.grid}>
        {salasConferencias.map((sala) => (
          <View
            key={sala.nombre}
            style={[
              styles.tarjeta,
              {
                backgroundColor: colores.tarjeta,
                borderColor: colores.borde,
                width: anchoTarjeta,
              },
            ]}
          >
            <Text style={[styles.nombreSala, { color: colores.texto }]}>
              {sala.nombre}
            </Text>
            <Text style={[styles.aforoSala, { color: colores.detalle }]}>
              {sala.aforo}
            </Text>
            <Text
              style={[
                styles.estadoSala,
                { color: sala.estado === 'disponible' ? '#2e7d32' : '#c62828' },
              ]}
            >
              {sala.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context.
          Permite gestionar márgenes seguros para dispositivos de acreditación y
          pantallas con muescas (notches) en accesos físicos de conferencias.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  nombreSala: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  aforoSala: {
    fontSize: 13,
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  estadoSala: {
    fontSize: 12,
    fontWeight: '600',
  },
  nota: {
    marginTop: 'auto',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
  },
})