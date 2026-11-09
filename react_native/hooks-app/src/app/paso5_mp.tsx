import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import {
  UsuarioProvider_mp,
  useUsuario_mp,
} from '../context/UsuarioContext_mp';

// Componente que consume el contexto
function PerfilAsistente_mp() {
  const { usuario, setUsuario, rol, setRol } = useUsuario_mp();

  return (
    <View style={styles.container}>
      <Text style={styles.tituloHeader}>Acreditación del Congreso</Text>

      <Text style={styles.texto}>
        Participante: {usuario}
      </Text>

      <Button
        title="Cambiar Participante"
        onPress={() =>
          setUsuario('Dra. Elena Vasquez')
        }
      />

      <View style={styles.bloqueRol}>
        <Text style={styles.texto}>
          Rol en el Evento: {rol}
        </Text>

        <Button
          title="Asignar como Ponente Principal"
          onPress={() =>
            setRol('Ponente Magistral')
          }
        />
      </View>
    </View>
  );
}

// Componente principal
export default function Paso5_mp() {
  return (
    <UsuarioProvider_mp>
      <PerfilAsistente_mp />
    </UsuarioProvider_mp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 24,
  },
  texto: {
    fontSize: 18,
    marginBottom: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  bloqueRol: {
    marginTop: 24,
    alignItems: 'center',
    gap: 8,
  },
});