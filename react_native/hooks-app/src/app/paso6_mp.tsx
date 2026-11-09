import { useMemo, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

interface PaseEvento {
  tipo: string;
  precio: number;
  cantidad: number;
}

export default function Paso6_mp() {
  const [pases, setPases] = useState<PaseEvento[]>([
    { tipo: 'Pase General Estudiante', precio: 25, cantidad: 4 },
    { tipo: 'Pase Profesional & Talleres', precio: 75, cantidad: 2 },
    { tipo: 'Acceso VIP & Networking', precio: 150, cantidad: 1 },
  ]);

  const [contadorAcreditados, setContadorAcreditados] = useState<number>(0);

  // Memoriza el cálculo del total recaudado en taquilla de inscripciones
  const totalRecaudado = useMemo(() => {
    console.log('Calculando total de inscripciones al congreso...');

    return pases.reduce(
      (acumulado, pase) =>
        acumulado + pase.precio * pase.cantidad,
      0
    );
  }, [pases]);

  function agregarPaseTaller() {
    setPases((actuales) => [
      ...actuales,
      { tipo: 'Taller Hands-on Adicional', precio: 35, cantidad: 1 },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Gestión de Taquilla y Entradas
      </Text>

      <Text style={styles.subtitulo}>Tipos de pases registrados: {pases.length}</Text>

      <Text style={styles.total}>
        Total Inscripciones: ${totalRecaudado.toFixed(2)} USD
      </Text>

      <Button
        title="Registrar Check-in en Puerta (+1)"
        onPress={() => setContadorAcreditados((c) => c + 1)}
      />

      <Text style={styles.contadorTexto}>
        Asistentes acreditados en sala: {contadorAcreditados}
      </Text>

      <Button
        title="Emitir Pase Taller Hands-on"
        onPress={agregarPaseTaller}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  subtitulo: {
    fontSize: 15,
    color: '#546e7a',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  contadorTexto: {
    fontSize: 16,
    color: '#1565c0',
    fontWeight: '600',
  },
});