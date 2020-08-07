import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { DashboardService } from '../servicos/dashboard.service';

import 'hammerjs';
import { Serie } from 'src/entidades/Serie';
import { Utilizacao } from 'src/entidades/Utilizacao';

@Component({
    selector: 'app-dashboard',
    providers: [DashboardService],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.template.html'
})

export class DashboardComponent {
    public isLoading = true;

    @HostBinding('attr.id') get get_id() { return 'dashboard'; }
    @HostBinding('class') get get_class() { return 'container-fluid'; }

    public performanceScannersTitulo: string;
    public performanceScannersSeries: Serie[];
    public performanceScannersCategorias: string[];
    public performanceScannersDescricaoEixoX: string;
    public titulo: string;
    public subtitulo: string;

    public espacoLivreTitulo: string;
    public espacoLivreSeries: Serie[];
    public espacoLivreCategorias: string[];
    public espacoLivreDescricaoEixoX: string;

    public utilizacoes: Utilizacao[];

    public producaoScannersTitulo: string;
    public producaoScannersSeries: Serie[];
    public producaoScannersCategorias: string[];
    public producaoScannersDescricaoEixoX: string;

    public engajamentoPatologistasTitulo: string;
    public engajamentoPatologistasSeries: Serie[];
    public engajamentoPatologistasCategorias: string[];
    public engajamentoPatologistasDescricaoEixoX: string;

    public espacoTotal: string;
    public espacoLivre: string;
    public espacoLivrePercentual: number;

    public quantidadeDigitalizas: number;
    public quantidadeIntegradas: number;
    public percentualIntegracao: number;

    public quantidadeDistribuida: number;
    public quantidadeVisualizada: number;
    public percentualVisualizacao: number;

    public indicadoresTempoDigitalizacaoValorMedio: number;
    public indicadoresLaminasPorHoraValorMedio: number;

    constructor(public dashboardService: DashboardService) {

    }

    ngOnInit() {

        this.carregarDados(1);
    }

    carregarDados(tipoConsulta: number) {
        this.dashboardService
            .obterDados(tipoConsulta)
            .subscribe(dados => {                

                this.titulo = dados.titulo;
                this.subtitulo = dados.subtitulo;

                this.espacoTotal = dados.recursosTotais.espacoTotal;
                this.espacoLivre = dados.recursosTotais.espacoLivre;
                this.espacoLivrePercentual = dados.recursosTotais.espacoLivrePerc;

                this.quantidadeDigitalizas = dados.producaoTotais.digitalizadasQtde;
                this.quantidadeIntegradas = dados.producaoTotais.integradasQtde;
                this.percentualIntegracao = dados.producaoTotais.integradasPerc;

                this.quantidadeDistribuida = dados.utilizacaoTotais.distribuidasQtde;
                this.quantidadeVisualizada = dados.utilizacaoTotais.visualizadasQtde;
                this.percentualVisualizacao = dados.utilizacaoTotais.visualizadasPerc;

                this.espacoLivreTitulo = dados.graficoEspacoLivre.titulo;
                this.espacoLivreSeries = dados.graficoEspacoLivre.series;
                this.espacoLivreCategorias = dados.graficoEspacoLivre.categorias;
                this.espacoLivreDescricaoEixoX = dados.graficoEspacoLivre.descricaoEixoX;

                this.producaoScannersTitulo = dados.graficoProducaoScanners.titulo;
                this.producaoScannersSeries = dados.graficoProducaoScanners.series;
                this.producaoScannersCategorias = dados.graficoProducaoScanners.categorias;
                this.producaoScannersDescricaoEixoX = dados.graficoProducaoScanners.descricaoEixoX;

                this.performanceScannersTitulo = dados.graficoPerformanceScanners.titulo;
                this.performanceScannersSeries = dados.graficoPerformanceScanners.series;

                this.performanceScannersCategorias = dados.graficoPerformanceScanners.categorias;
                this.performanceScannersDescricaoEixoX = dados.graficoPerformanceScanners.descricaoEixoX;

                this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
                this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
                this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
                this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;

                this.indicadoresTempoDigitalizacaoValorMedio = dados.indicadoresTotais.tempoDigitalizacaoValorMedio;
                this.indicadoresLaminasPorHoraValorMedio = dados.indicadoresTotais.laminasPorHoraValorMedio;

            }, (err) => this.isLoading = false);
    }

}