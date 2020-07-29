import { Series } from './Series';

export interface Grafico {
    Tipo: string;
    Series: Series[];
    Titulo: string;
    DataInicial: Date;
    DataFinal: Date;
    Descricao: string;
}
