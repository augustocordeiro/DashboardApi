import { Recurso } from "./Recurso";
import { Grafico } from './Grafico';
import { Producao } from './Producao';
import { Indicador } from './Indicador';
export interface DashboardModel {
    dataObservacao: Date;
    recursos: Recurso[];
    producoes: Producao[];
    utilizacoes: any[];
    indicadores: Indicador[];
    graficoEspacoLivre: Grafico;
    graficoProducaoScanners: Grafico;
    graficoEngajamentoPatologistas: Grafico;
    graficoPerformanceScanners: Grafico;
}
