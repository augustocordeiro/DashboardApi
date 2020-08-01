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
    espacoLivre: Grafico;
    producaoScanners: Grafico;
    engajamentoPatologistas: Grafico;
    performanceScanners: Grafico;
}
