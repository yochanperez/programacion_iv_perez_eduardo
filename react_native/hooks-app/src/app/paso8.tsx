// app/index.tsx — agrega la función Paso5
// (en un proyecto real importarías desde '@/hooks/useConexionSimulada')
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useConexionSimulada } from '../hooks/UseConexionSimulada'
import { TarjetaServidor } from './paso8TarjetaServidor'



// Para este tutorial pegamos el hook inline arriba del componente:
// (copia aquí el código del archivo hooks/useConexionSimulada.ts)

export function Paso8() {
  const webHook   = useConexionSimulada('web-02')
  const cacheHook = useConexionSimulada('cache-02')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de Servicios</Text>

      <TarjetaServidor nombre="web-02" hook={webHook} />
      <TarjetaServidor nombre="cache-02" hook={cacheHook} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  }
})