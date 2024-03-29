import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardRaiz } from 'src/entidades/DashboardRaiz';

// const baseUrl = 'http://dgkdiagsystem:5005/api/dashboard';
//const baseUrl = 'http://localhost:5000/api/dashboard'; 
const baseUrl = 'https://demo5010569.mockable.io/api/dashboard';

const headers = new HttpHeaders({ 'Content-Type': "application/json" });

@Injectable()
export class DashboardService {
    constructor(public http: HttpClient) { }

    obterDados(tipoConsulta: number, periodoReferencia: string) {

        // if (periodoReferencia != '') {
        //     return this.http.get<DashboardRaiz>(`${baseUrl}/?tipoConsulta=${tipoConsulta}&periodoReferencia=${periodoReferencia}`, { headers });

        // } else {
        //     return this.http.get<DashboardRaiz>(`${baseUrl}/?tipoConsulta=${tipoConsulta}`, { headers });            
        // }

        return this.http.get<DashboardRaiz>(`${baseUrl}`, { headers });
    }
}