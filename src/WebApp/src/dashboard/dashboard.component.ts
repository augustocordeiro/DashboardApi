import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { DashboardService } from '../servicos/dashboard.service';
import 'hammerjs';
import { Serie } from 'src/entidades/Serie';
import { Utilizacao } from 'src/entidades/Utilizacao';
import { interval } from 'rxjs';
import { DashboardConsulta } from 'src/entidades/DashboardConsulta';

@Component({
    selector: 'app-dashboard',
    providers: [DashboardService],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.template.html'
})

export class DashboardComponent {

    @HostBinding('attr.id') get get_id() { return 'dashboard'; }
    @HostBinding('class') get get_class() { return 'container-fluid'; }

    public performanceScannersTitulo: string;
    public performanceScannersSeries: Serie[];
    public performanceScannersCategorias: string[];
    public performanceScannersDescricaoEixoX: string;
    public titulo: string;
    public subtitulo: string;
    public processadoEm: string;

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

    public ultilizacoes: Utilizacao[];

    public apresentacaoPatologistas: string;

    public tipoConsulta: number;
    public localConsulta: string;
    public timer: number;
    public geralSelecionado: boolean;
    public mgSelecionado: boolean;
    public spSelecionado: boolean;
    public diaSelecionado: boolean;
    public semanaSelecionado: boolean;
    public mesSelecionado: boolean;
    public anoSelecionado: boolean;
    public dozeMesesSelecionado: boolean;
    public local: string;

    constructor(public dashboardService: DashboardService) {

        this.tipoConsulta = 1;
        this.apresentacaoPatologistas = "grafico";
        this.localConsulta = "geral";
        this.diaSelecionado = true;
        this.geralSelecionado = true;
    }

    ngOnInit() {

        
        this.carregarDados(this.tipoConsulta, this.localConsulta);

        interval(30000).subscribe(
            (n) => {
                this.carregarDados(this.tipoConsulta, this.localConsulta);

            });
    }

    alterarVisaoPatologistas(apresentacao: string) {
        this.apresentacaoPatologistas = apresentacao;
    }

    carregarDados(tipoConsulta: number, local: string) {

        this.tipoConsulta = tipoConsulta;     

        if (local != '') {
            this.localConsulta = local;           
        }
        else{
            //this.diaSelecionado = false;
        }

        this.diaSelecionado = true;
        this.semanaSelecionado = false;
        this.mesSelecionado = false;
        this.anoSelecionado = false;
        this.dozeMesesSelecionado = false;

        console.log(this.diaSelecionado);

        this.dashboardService
            .obterDados(tipoConsulta)
            .subscribe(dados => {

                var consulta = null;
                if (this.localConsulta === 'geral') {
                    
                    consulta = dados.geral;
                    
                    //this.geralSelecionado = true;
                }
                else {

                    if (this.localConsulta === 'MG') {
                        
                        //this.mgSelecionado = true;
                        
                    
                    } else {
                    
                        //this.spSelecionado = true;
                                        }

                    consulta = dados.locais.filter(local => local.local === this.localConsulta)[0];
                }
                this.carregarDashboard(consulta);
            });
    }

    public carregarDashboard(dados: DashboardConsulta) {
        this.ultilizacoes = dados.utilizacoes.sort((a, b) => { return a.visualizadasPerc > b.visualizadasPerc ? -1 : 1 });

        this.local = dados.local;

        this.titulo = dados.titulo;
        this.subtitulo = dados.subtitulo;
        this.processadoEm = dados.processadoEm;

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
    }

    public allData = (): Utilizacao[] => {

        console.log(this.ultilizacoes);

        return this.ultilizacoes;
    }
}