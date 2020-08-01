import { Serie } from "./Serie";
export interface Grafico {    
    descricaoEixoX: string;
    descricaoEixoY: string;
    tipo: string;
    series: Serie[];
    titulo: string;
    dataInicial: Date;
    dataFinal: Date;
    descricao: string;
    categorias: string[];
}
