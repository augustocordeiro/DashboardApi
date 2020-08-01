import { Detalhe } from "./Detalhe";
export interface Recurso {
    local: string;
    espacoTotal: string;
    espacoLivre: string;
    espacoTotalBytes: number;
    espacoLivreBytes: number;
    espacoLivrePerc: number;
    espacoLivreImagens: number | null;
    espacoLivreDias: number | null;
    detalhes: Detalhe[];
}
