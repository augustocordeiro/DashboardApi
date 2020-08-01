import { Series } from "./Series";
export interface Grafico {
    tipo: string;
    series: Series[];
    titulo: string;
    dataInicial: Date;
    dataFinal: Date;
    descricao: string;
}
