import { Recurso } from "./Recurso";
import { Grafico } from './Grafico';
import { Producao } from './Producao';
import { Indicador } from './Indicador';
import { IndicadoresTotais } from './IndicadoresTotais';
import { ProducaoTotais } from './ProducaoTotais';
import { RecursosTotais } from './RecursosTotais';
import { UtilizacaoTotais } from './UtilizacaoTotais';
import { Utilizacao } from './Utilizacao';
export interface DashboardConsulta {
    processadoEm: string;
    subtitulo: string;
    titulo: string;
    local: string;
    dataObservacao: Date;
    recursosTotais:    RecursosTotais;
    producaoTotais:    ProducaoTotais;
    utilizacaoTotais:  UtilizacaoTotais;
    indicadoresTotais: IndicadoresTotais;
    recursos: Recurso[];
    producoes: Producao[];
    utilizacoes: Utilizacao[];
    indicadores: Indicador[];
    graficoEspacoLivre: Grafico;
    graficoProducaoScanners: Grafico;
    graficoEngajamentoPatologistas: Grafico;
    graficoPerformanceScanners: Grafico;
}


