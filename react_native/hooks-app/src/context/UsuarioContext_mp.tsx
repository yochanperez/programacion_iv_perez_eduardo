import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

export type RolEvento_mp = 
  | 'Asistente General' 
  | 'Ponente Magistral' 
  | 'Moderador de Sala' 
  | 'Organizador de Congreso' 
  | 'Coordinador de Taller';

interface UsuarioContextType_mp {
  usuario: string; 
  rol: string;
  setUsuario: (usuario: string) => void;
  setRol: (rol: string) => void;
}

const UsuarioContext_mp = createContext<
  UsuarioContextType_mp | undefined
>(undefined);

interface UsuarioProviderProps_mp {
  children: ReactNode;
}

export function UsuarioProvider_mp({
  children,
}: UsuarioProviderProps_mp) {
  const [usuario, setUsuario] = useState<string>(
    'Dra. Elena Vasquez'
  );
  const [rol, setRol] = useState<string>(
    'Ponente Magistral'
  );

  return (
    <UsuarioContext_mp.Provider
      value={{ usuario, setUsuario, rol, setRol }}
    >
      {children}
    </UsuarioContext_mp.Provider>
  );
}

// Hook personalizado para consumir el contexto de acreditación del evento
export function useUsuario_mp(): UsuarioContextType_mp {
  const context = useContext(UsuarioContext_mp);

  if (context === undefined) {
    throw new Error(
      'useUsuario_mp debe utilizarse dentro de UsuarioProvider_mp'
    );
  }

  return context;
}