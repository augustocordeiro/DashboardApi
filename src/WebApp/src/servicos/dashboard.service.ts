import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardRaiz } from 'src/entidades/DashboardRaiz';


const baseUrl = 'http://dgkdiagsystem:5005/api/dashboard';
// const baseUrl = 'https://demo5010569.mockable.io/api/dashboard';
// const baseUrl2 = 'https://demo0466118.mockable.io/api/dashboard';

const headers = new HttpHeaders({ 'Content-Type': "application/json" });

@Injectable()
export class DashboardService {
    constructor(public http: HttpClient) { }

    obterDados(tipoConsulta: number) {
        return this.http.get<DashboardRaiz>(`${baseUrl}/?tipoConsulta=${tipoConsulta}`, { headers });        
        
        // if(tipoConsulta == 1){
        //     return this.http.get<DashboardRaiz>(baseUrl, { headers });        
        // }
        // else{
        //     return this.http.get<DashboardRaiz>(baseUrl2, { headers });        
        // }       
        
    }
}