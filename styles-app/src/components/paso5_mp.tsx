import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import {
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native'

type ColoresTema_mp = {
  fondo: string
  superficie: string
  texto: string
  textoSutil: string
  primario: string
  peligro: string
  borde: string
  exito: string
  alerta: string
  acento: string
}

const PALETA_MP: Record<'claro' | 'oscuro', ColoresTema_mp> = {
  claro: {
    fondo:      '#f5f7fa',
    superficie: '#ffffff',
    texto:      '#1a1a2e',
    textoSutil: '#6b7280',
    primario:   '#1565c0',
    peligro:    '#c62828',
    borde:      '#e2e8f0',
    exito:      '#2e7d32',
    alerta:     '#e65100',
    acento:     '#8b5cf6',
  },
  oscuro: {
    fondo:      '#0d1117',
    superficie: '#161b22',
    texto:      '#e6edf3',
    textoSutil: '#8b949e',
    primario:   '#58a6ff',
    peligro:    '#ff7b72',
    borde:      '#30363d',
    exito:      '#3fb950',
    alerta:     '#f0883e',
    acento:     '#8b5cf6',
  },
}

type ContextoTema_mp = {
  colores: ColoresTema_mp
  temaForzado: 'claro' | 'oscuro' | null
  alternarTema: () => void
}

const TemaContext_mp = createContext<ContextoTema_mp | null>(null)

function ProveedorTema_mp({ children }: { children: React.ReactNode }) {
  const esquemaSistema = useColorScheme()
  const [temaForzado, setTemaForzado] = useState<'claro' | 'oscuro' | null>(null)

  const temaActivo: 'claro' | 'oscuro' =
    temaForzado ?? (esquemaSistema === 'dark' ? 'oscuro' : 'claro')

  const colores: ColoresTema_mp = PALETA_MP[temaActivo]

  const alternarTema = useCallback(() => {
    setTemaForzado((prev) => {
      if (prev === null) return temaActivo === 'claro' ? 'oscuro' : 'claro'
      return prev === 'claro' ? 'oscuro' : 'claro'
    })
  }, [temaActivo])

  return (
    <TemaContext_mp.Provider value={{ colores, temaForzado, alternarTema }}>
      {children}
    </TemaContext_mp.Provider>
  )
}

function useTema_mp(): ContextoTema_mp {
  const ctx = useContext(TemaContext_mp)
  if (!ctx) throw new Error('useTema_mp debe usarse dentro de ProveedorTema_mp')
  return ctx
}

export default function Paso5_mp() {
  return (
    <ProveedorTema_mp>
      <PantallaDashboardTema_mp />
    </ProveedorTema_mp>
  )
}

export { Paso5_mp }

function PantallaDashboardTema_mp() {
  const { colores, temaForzado, alternarTema } = useTema_mp()
  const esquemaSistema = useColorScheme()

  const salasCongreso = [
    { id: '1', nombre: 'Auditorio Magna I', ubicacion: 'Nivel 2 · 350 pax', estado: 'activo'   as const },
    { id: '2', nombre: 'Laboratorio Tech A', ubicacion: 'Nivel 1 · 40 pax',  estado: 'alerta'   as const },
    { id: '3', nombre: 'Sala Virtual Zoom',  ubicacion: 'Streaming Hub',      estado: 'inactivo' as const },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colores.fondo }}
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colores.texto }}>
          Panel del Congreso
        </Text>
        <Pressable
          onPress={alternarTema}
          style={{
            backgroundColor: colores.peligro,
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 999,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: '600' }}>
            {temaForzado === null
              ? `Sistema (${esquemaSistema ?? 'desconocido'})`
              : temaForzado === 'claro' ? 'Modo Claro' : 'Modo Oscuro'}
          </Text>
        </Pressable>
      </View>

      {salasCongreso.map((sala) => {
        const colorEstado =
          sala.estado === 'activo'   ? colores.exito  :
          sala.estado === 'alerta'   ? colores.alerta :
          colores.textoSutil

        return (
          <View
            key={sala.id}
            style={{
              backgroundColor: colores.superficie,
              borderRadius: 10,
              padding: 14,
              borderWidth: 1,
              borderColor: colores.borde,
              gap: 4,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: colores.texto }}>
                {sala.nombre}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colorEstado }}>
                {sala.estado === 'activo' ? 'EN SESIÓN' : sala.estado === 'alerta' ? 'AFORO LLENO' : 'DISPONIBLE'}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: colores.textoSutil }}>{sala.ubicacion}</Text>
          </View>
        )
      })}

      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {(Object.entries(colores) as [string, string][]).map(([clave, valor]) => (
          <View key={clave} style={{ alignItems: 'center', gap: 2 }}>
            <View style={{
              width: 36, height: 36, borderRadius: 18,
              backgroundColor: valor,
              borderWidth: 1, borderColor: colores.borde,
            }} />
            <Text style={{ fontSize: 9, color: colores.textoSutil }}>{clave}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}