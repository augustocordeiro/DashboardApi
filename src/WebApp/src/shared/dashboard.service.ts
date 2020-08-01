import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable()
export class DashboardService {
    constructor(public http: HttpClient) { }
}