import { Grafico } from "./Grafico";
import { Utilizacao } from "./Utilizacao";
import { Recurso } from "./Recurso";
import { Producao } from "./Producao";
import { Indicador } from "./Indicador";
export interface Dashboard {
    DataObservacao: Date;
    Recursos: Recurso[];
    Producoes: Producao[];
    Utilizacoes: Utilizacao[];
    Indicadores: Indicador[];
    EngajamentoPatologistas: Grafico;
    ProducaoScanners: Grafico;
    PerformanceScanners: Grafico;
    EspacoLivre: Grafico;
}
