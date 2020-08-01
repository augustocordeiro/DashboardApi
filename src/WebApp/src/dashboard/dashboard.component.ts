import { Component, ViewEncapsulation, HostBinding, OnDestroy } from '@angular/core';
import { GithubService } from './../shared/github.service';
import { DashboardService } from './../shared/dashboard.service';
import { IssuesProcessor } from './../shared/issues-processor.service';
import { IssuesModel } from './../shared/issues.model';

import 'hammerjs';
import { Subscription, of, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardModel } from "src/Entidades/DashboardModel";
import { Serie } from 'src/Entidades/Serie';
import { Producao } from 'src/Entidades/Producao';
import { Grafico } from 'src/Entidades/Grafico';


@Component({
    selector: 'app-dashboard',
    providers: [DashboardService, GithubService, IssuesProcessor],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.template.html'
})
export class DashboardComponent implements OnDestroy {
    public isLoading = true;
    public today: Date = new Date();
    public rangeStart: Date;
    public issues: any;
    public months = 3;
    private data: any;
    private subscription: Subscription;
    private selectedIndex = 0;

    public dashboard: DashboardModel;
    



    @HostBinding('attr.id') get get_id() { return 'dashboard'; }
    @HostBinding('class') get get_class() { return 'container-fluid'; }

    public espacoLivreTitulo: string;
    public espacoLivreSeries: Serie[];
    public espacoLivreCategorias: string[];
    public espacoLivreDescricaoEixoX: string;

    public producaoScannersSeries: Serie[];
    public producaoScannersCategorias: string[];
    public producaoScanners: Producao[];
    public tituloProducaoScanners: string = "Produção ";

    public engajamentoPatologistasSeries: Serie[];
    public engajamentoPatologistasCategorias: string[];
    public engajamentoPatologistasTitulo: string;
    public engajamentoPatologistasDescricaoEixoX: string;

    constructor(public githubService: GithubService, public issuesProcessor: IssuesProcessor, public dashboardService: DashboardService) {
        this.rangeStart = this.issuesProcessor.getMonthsRange(this.months);

        this.subscription =
            merge(
                githubService
                    .getGithubIssues({ pages: 5 })
                    .pipe(map(data => {
                        this.data = data;
                        this.isLoading = false;
                        return this.issuesProcessor.process(data, this.months);
                    }, (err) => this.isLoading = false)),
                of(new IssuesModel())
            )
                .subscribe((data: IssuesModel) => {
                    this.issues = data;
                });



    }

    ngOnInit() {

        this.dashboardService
            .obterDados()
            .subscribe(dados => {

                this.dashboard = dados;

                  this.espacoLivreSeries = dados.graficoEspacoLivre.series;
                  this.espacoLivreCategorias = dados.graficoEspacoLivre.categorias;
                  this.espacoLivreTitulo = dados.graficoEspacoLivre.titulo;
                  this.espacoLivreDescricaoEixoX = dados.graficoEspacoLivre.descricaoEixoX;

                  

                  console.log(dados.graficoEspacoLivre);

                this.producaoScannersSeries = dados.graficoProducaoScanners.series;
                this.producaoScannersCategorias = dados.graficoProducaoScanners.categorias;

                this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
                this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
                this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
                this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;

                

                this.producaoScanners = dados.producoes;

            }, (err) => this.isLoading = false);

    }



    onFilterClick(months) {
        if (this.months !== months) {
            this.months = months;
            this.rangeStart = this.issuesProcessor.getMonthsRange(months);
            this.issues = this.issuesProcessor.process(this.data, months);
            this.filterIssues(this.selectedIndex);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onTabSelect(event) {
        this.filterIssues(event.index);
    }

    filterIssues(index) {
        switch (index) {
            case 0:
                this.issues = this.issuesProcessor.process(this.data, this.months);
                this.selectedIndex = 0;
                break;
            case 1:
                const assigned = this.issuesProcessor.flatten(this.data)
                    .filter(item => item.assignee ? item.assignee.login === 'ggkrustev' : false);
                this.issues = this.issuesProcessor.process(assigned, this.months);
                this.selectedIndex = 1;
                break;
            case 2:
                const created = this.issuesProcessor.flatten(this.data).filter(item => item.user.login === 'ggkrustev');
                this.issues = this.issuesProcessor.process(created, this.months);
                this.selectedIndex = 2;
                break;
            default: this.issues = this.issuesProcessor.process(this.data, this.months);
        }
    }
}
