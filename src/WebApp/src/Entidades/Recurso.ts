import { Detalhe } from "./Detalhe";

export interface Recurso {
    Local: string;
    EspacoTotalBytes: number;
    EspacoLivreBytes: number;
    EspacoLivrePerc: number;
    EspacoLivreImagens: number | null;
    EspacoLivreDias: number | null;
    Detalhes: Detalhe[];
}
