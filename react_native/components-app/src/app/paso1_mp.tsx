import { StyleSheet, Text, View } from 'react-native'

interface TarjetaPonenteProps {
  nombre: string
  experienciaAnios: number
  especialidad: string
  temaCharla: string
}

function TarjetaPonente_mp({
  nombre,
  experienciaAnios,
  especialidad,
  temaCharla,
}: TarjetaPonenteProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombrePonente}>{nombre}</Text>
      <Text style={styles.datoExperiencia}>{experienciaAnios} años de trayectoria</Text>
      <Text style={styles.datoEspecialidad}>{especialidad}</Text>
      <Text style={styles.datoCharla}>"{temaCharla}"</Text>
    </View>
  )
}

export function Paso1_mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Ponentes Destacados</Text>
      <TarjetaPonente_mp
        nombre="Dra. Elena Vasquez"
        experienciaAnios={12}
        especialidad="Inteligencia Artificial Aplicada"
        temaCharla="Modelos RAG en Arquitecturas Empresariales"
      />
      <TarjetaPonente_mp
        nombre="Ing. Carlos Mendoza"
        experienciaAnios={8}
        especialidad="Cloud & Ciberseguridad"
        temaCharla="Hardening de Infraestructura para Eventos Masivos"
      />
      <TarjetaPonente_mp
        nombre="Mgtr. Sofía Paredes"
        experienciaAnios={15}
        especialidad="Diseño y Experiencia de Usuario"
        temaCharla="Accesibilidad Cognitiva en Plataformas Digitales"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombrePonente: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoExperiencia: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoEspecialidad: {
    fontSize: 12,
    color: '#546e7a',
    fontWeight: '500',
  },
  datoCharla: {
    fontSize: 12,
    color: '#757575',
    fontStyle: 'italic',
  },
})