import { useState, useCallback } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { Conferencia_mp, CONFERENCIAS_DEMO_MP } from './paso1_mp'
import { FilaConferencia_mp } from './paso1FilaServidor_mp'
import { Separador_mp } from './paso2Separador_mp'
import { ListaVacia_mp } from './paso2ListaVacia_mp'

const CONFERENCIAS_PAGINA_2_MP: Conferencia_mp[] = [
  { id: '9',  titulo: 'Taller: Testing E2E en Apps',  sala: 'Laboratorio Tech B', disponible: true  },
  { id: '10', titulo: 'Conferencia: Computación Cuántica', sala: 'Auditorio Magna II', disponible: false },
]

export function Paso2_mp() {
  const [datos, setDatos] = useState<Conferencia_mp[]>(CONFERENCIAS_DEMO_MP)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(CONFERENCIAS_DEMO_MP)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...CONFERENCIAS_PAGINA_2_MP])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Programa del Congreso · Bloque {paginaActual}</Text>
      <FlatList<Conferencia_mp>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaConferencia_mp conferencia={item} />}
        ItemSeparatorComponent={Separador_mp}
        ListEmptyComponent={<ListaVacia_mp />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : <></>
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})