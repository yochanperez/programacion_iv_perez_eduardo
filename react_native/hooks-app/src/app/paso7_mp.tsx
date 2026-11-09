import {
  useState,
  useCallback,
  memo,
} from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

interface ConferenciaAgenda {
  id: number;
  titulo: string;
  duracionMinutos: number;
}

interface ConferenciaItemProps {
  conferencia: ConferenciaAgenda;
  onCancelar: (id: number) => void;
}

// Componente memorizado
const ConferenciaItem_mp = memo(
  ({ conferencia, onCancelar }: ConferenciaItemProps) => {
    console.log('Renderizando conferencia:', conferencia.titulo);

    return (
      <View style={styles.producto}>
        <View style={styles.infoConferencia}>
          <Text style={styles.tituloCharla}>{conferencia.titulo}</Text>
          <Text style={styles.duracionTexto}>
            Duración: {conferencia.duracionMinutos} min
          </Text>
        </View>

        <Button
          title="Cancelar"
          color="#c62828"
          onPress={() => onCancelar(conferencia.id)}
        />
      </View>
    );
  }
);

export default function Paso7_mp() {
  const [conferencias, setConferencias] = useState<ConferenciaAgenda[]>([
    { id: 1, titulo: 'Keynote: Inteligencia Artificial en 2026', duracionMinutos: 60 },
    { id: 2, titulo: 'Taller: Microservicios con NestJS y Docker', duracionMinutos: 90 },
  ]);

  const [preguntasPublico, setPreguntasPublico] = useState(0);

  // Función memorizada para retirar ponencias de la agenda
  const cancelarConferencia = useCallback((id: number) => {
    setConferencias((actuales) =>
      actuales.filter((conferencia) => conferencia.id !== id)
    );
  }, []);

  // Función memorizada para incorporar nuevas ponencias
  const agregarConferencia = useCallback(() => {
    setConferencias((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        titulo: 'Panel: Ciberseguridad e Infraestructura Crítica',
        duracionMinutos: 45,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Moderación de Agenda del Evento
      </Text>

      <Text style={styles.contadorPreguntas}>
        Preguntas pendientes en moderación: {preguntasPublico}
      </Text>

      <Button
        title="Nueva pregunta del público (+1)"
        onPress={() => setPreguntasPublico((c) => c + 1)}
      />

      <Button
        title="Agendar Panel de Ciberseguridad"
        onPress={agregarConferencia}
      />

      <FlatList
        data={conferencias}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ConferenciaItem_mp
            conferencia={item}
            onCancelar={cancelarConferencia}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  contadorPreguntas: {
    fontSize: 15,
    color: '#546e7a',
    fontWeight: '500',
  },
  producto: {
    padding: 14,
    marginVertical: 6,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  infoConferencia: {
    flex: 1,
    marginRight: 12,
  },
  tituloCharla: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  duracionTexto: {
    fontSize: 13,
    color: '#1565c0',
    marginTop: 4,
  },
});