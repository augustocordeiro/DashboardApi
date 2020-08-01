import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DashboardModel } from "src/Entidades/DashboardModel";

//const baseUrl = 'https://localhost:5001/api/dashboard';
const baseUrl = 'http://demo5075138.mockable.io/api/dashoboard';
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