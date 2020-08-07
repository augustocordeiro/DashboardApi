import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardModel } from "src/Entidades/DashboardModel";

//const baseUrl = 'https://localhost:5001/api/dashboard';
const baseUrl = 'http://demo0466118.mockable.io/api/dashboard';
//const baseUrl = 'https://demo5010569.mockable.io/api/dashboard';
//const baseUrl = 'http://dgkdiagsystem:5005/api/dashboard';

const headers = new HttpHeaders({ 'Content-Type': "application/json" });

@Injectable()
export class DashboardService {
    constructor(public http: HttpClient) { }

    obterDados(tipoConsulta: number) {
        //return this.http.get<DashboardModel>(`${baseUrl}/?tipoConsulta=${tipoConsulta}`, { headers });
        return this.http.get<DashboardModel>(baseUrl, { headers });
    }
}