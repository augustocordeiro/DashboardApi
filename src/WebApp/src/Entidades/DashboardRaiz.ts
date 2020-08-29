import { DashboardConsulta } from './DashboardConsulta';

export interface DashboardRaiz {
    geral: DashboardConsulta;
    locais: DashboardConsulta[];
    meses: string[];
}