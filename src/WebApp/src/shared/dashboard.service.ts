import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DashboardModel } from "src/Entidades/DashboardModel";

//const baseUrl = 'https://localhost:5001/api/dashboard';
//const baseUrl = 'https://demo0466118.mockable.io/api/dashboard';
const baseUrl = 'https://demo5010569.mockable.io/api/dashboard';

const headers = new HttpHeaders({
    'Content-Type': "application/json"
});
@Injectable()
export class DashboardService {
    constructor(public http: HttpClient) {
    }
    
    obterDados() {
        return this.http.get<DashboardModel>(baseUrl, { headers });
    }
}