import { Indicador } from './Indicador';
import { Producao } from './Producao';
import { Recurso } from './Recurso';

export interface Dashboard {
    dataObservacao: Date;
    recursos:       Recurso[];
    producoes:      Producao[];
    utilizacoes:    any[];
    indicadores:    Indicador[];
}


