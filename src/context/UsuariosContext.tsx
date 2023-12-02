import { ReactNode, createContext, useContext, useState } from "react";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    supervisor: boolean;
    dependentes?: Dependente[];
}

interface Dependente {
    nome: string;
    email: string;
}

interface UsuariosContextData {
    usuarios: Usuario[];
    adicionarUsuario: (usuario:Usuario) => void;
    adicionarDependente: (usuarioEmail: string, dependente: Dependente) => void;
}

const UsuariosContex = createContext<UsuariosContextData | undefined>(undefined);


export function UsuariosProvider({ children }: { children: ReactNode }) {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const adicionarUsuario = (usuario: Usuario) => {
        setUsuarios((prevUsuarios) => [...prevUsuarios, usuario]);
    };

    const adicionarDependente = (usuarioEmail: string, dependente: Dependente) => {
        setUsuarios((prevUsuarios) =>
        prevUsuarios.map((usuario) =>
            usuario.email === usuarioEmail
            ? { ...usuario, dependentes: [...(usuario.dependentes || []), dependente] }
            : usuario
        )
        );
    };

    return (
        <UsuariosContex.Provider value={{ usuarios, adicionarUsuario, adicionarDependente  }}>
            {children}
        </UsuariosContex.Provider>
    );
}

export function useUsuarios() {
    const context = useContext(UsuariosContex);
    if(!context) {
        console.log(context)
        throw new Error('useUsuarios deve ser usado dentro de um UsuariosProvider')
    }
    return context;
}