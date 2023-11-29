import { ReactNode, createContext, useContext, useState } from "react";

interface Medicamento {
    nome: string;
    qntDias: string;
    medicamentoSolido: boolean;
    medicamentoLiquido: boolean;
    quantidade: string;
    volume: string;
    horario: string;
}

interface MedicamentosContextData {
    medicamentos: Medicamento[];
    adicionarMedicamento: (medicamento:Medicamento) => void;
    removerMedicamento: (medicamento: Medicamento) => void;
}

const MedicamentosContex = createContext<MedicamentosContextData | undefined>(undefined);

export function MedicamentosProvider({ children }: { children: ReactNode }) {
    const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

    const adicionarMedicamento = (medicamento: Medicamento) => {
        setMedicamentos((prevMedicamentos) => [...prevMedicamentos, medicamento]);
    };

    const removerMedicamento = (medicamento: Medicamento) => {
        setMedicamentos((prevMedicamentos) => prevMedicamentos.filter((m) => m !== medicamento));
    };

    return (
        <MedicamentosContex.Provider value={{ medicamentos, adicionarMedicamento, removerMedicamento }}>
            {children}
        </MedicamentosContex.Provider>
    );
}

export function useMedicamentos() {
    const context = useContext(MedicamentosContex);
    if(!context) {
        throw new Error('useMedicamentos deve ser usado dentro de um MedicamentosProvider')
    }
    return context;
}