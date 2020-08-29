import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { DashboardService } from '../servicos/dashboard.service';
import 'hammerjs';
import { Serie } from 'src/entidades/Serie';
import { Utilizacao } from 'src/entidades/Utilizacao';
import { interval } from 'rxjs';
import { DashboardConsulta } from 'src/entidades/DashboardConsulta';
import { DashboardRaiz } from 'src/entidades/DashboardRaiz';

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

    public graficoAreaDigitalizacaoTitulo: string;
    public graficoAreaDigitalizacaoSeries: Serie[];
    public graficoAreaDigitalizacaoCategorias: string[];
    public graficoAreaDigitalizacaoDescricaoEixoX: string;

    public titulo: string;
    public subtitulo: string;
    public processadoEm: string;

    public espacoLivreTitulo: string;
    public espacoLivreSeries: Serie[];
    public espacoLivreCategorias: string[];
    public espacoLivreDescricaoEixoX: string;

    public previsaoRecursosTitulo: string;
    public previsaoRecursosSeries: Serie[];
    public previsaoRecursosCategorias: string[];
    public previsaoRecursosDescricaoEixoX: string;

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
    public quantidadeErros: number;
    public percentualIntegracao: number;

    public quantidadeDistribuida: number;
    public quantidadeVisualizada: number;
    public percentualVisualizacao: number;

    public areaDigitalizacaoValorMedio: number;
    public areaDigitalizacaoValorMaximo: number;
    public areaDigitalizacaoValorMinimo: number;

    public indicadoresTempoDigitalizacaoValorMedio: number;
    public indicadoresLaminasPorHoraValorMedio: number;
    public indicadoresAreaDigitalizacaoValorMedio: number;
    public indicadoresLaminasPorHoraValorMedioAjustado: number;

    public ultilizacoes: Utilizacao[];

    public meses: string[];

    public apresentacaoPatologistas: string;
    public apresentacaoRecursos: string;


    public tipoConsulta: number;
    public localConsulta: string;
    public dadosLocal: DashboardRaiz;
    public periodoSelecionado: boolean;

    constructor(public dashboardService: DashboardService) {

        this.tipoConsulta = 1;
        this.apresentacaoPatologistas = "grafico";
        this.localConsulta = "geral";
        this.apresentacaoRecursos = 'historico';
        this.periodoSelecionado = false;
    }

    ngOnInit() {

        this.carregarDados(this.tipoConsulta, this.localConsulta);
        interval(30000).subscribe(
            () => {
                this.carregarDados(this.tipoConsulta, this.localConsulta);

            });
    }

    alterarVisaoPatologistas(apresentacao: string) {
        this.apresentacaoPatologistas = apresentacao;
    }


    alterarVisaoRecursos(apresentacao: string) {
        this.apresentacaoRecursos = apresentacao;
    }

    carregarDados(tipoConsulta: number, local: string) {

        this.periodoSelecionado = false;

        if (local != '') {
            this.localConsulta = local;
        }

        if (tipoConsulta == 0) {

            var consulta = null;
            if (this.localConsulta === 'geral') {

                consulta = this.dadosLocal.geral;
            }
            else {
                consulta = this.dadosLocal.locais.filter(local => local.local === this.localConsulta)[0];
            }

            this.carregarDashboard(consulta);
        }
        else if (tipoConsulta == 6) {
            this.periodoSelecionado = true;
        }

        else {
            this.tipoConsulta = tipoConsulta;
            this.dashboardService
                .obterDados(tipoConsulta)
                .subscribe(dados => {

                    var consulta = null;
                    if (this.localConsulta === 'geral') {

                        consulta = dados.geral;
                    }
                    else {
                        consulta = dados.locais.filter(local => local.local === this.localConsulta)[0];
                    }

                    this.dadosLocal = dados;
                    this.meses = dados.meses

                    this.carregarDashboard(consulta);
                });
        }
    }

    public periodoAlterado(periodo: string) {

        console.log(periodo);
    }

    public carregarDashboard(dados: DashboardConsulta) {

        this.ultilizacoes = dados.utilizacoes.sort((a, b) => { return a.visualizadasPerc > b.visualizadasPerc ? -1 : 1 });

        this.titulo = dados.titulo;
        this.subtitulo = dados.subtitulo;
        this.processadoEm = dados.processadoEm;

        this.espacoTotal = dados.recursosTotais.espacoTotal;
        this.espacoLivre = dados.recursosTotais.espacoLivre;
        this.espacoLivrePercentual = dados.recursosTotais.espacoLivrePerc;

        this.quantidadeDigitalizas = dados.producaoTotais.digitalizadasQtde;
        this.quantidadeIntegradas = dados.producaoTotais.integradasQtde;
        this.quantidadeErros = dados.producaoTotais.erroCodigoBarrasQtde + dados.producaoTotais.erroQualidadeImagemQtde;
        this.percentualIntegracao = dados.producaoTotais.integradasPerc;

        this.quantidadeDistribuida = dados.utilizacaoTotais.distribuidasQtde;
        this.quantidadeVisualizada = dados.utilizacaoTotais.visualizadasQtde;
        this.percentualVisualizacao = dados.utilizacaoTotais.visualizadasPerc;

        this.espacoLivreTitulo = dados.graficoEspacoLivre.titulo;
        this.espacoLivreSeries = dados.graficoEspacoLivre.series;
        this.espacoLivreCategorias = dados.graficoEspacoLivre.categorias;
        this.espacoLivreDescricaoEixoX = dados.graficoEspacoLivre.descricaoEixoX;

        this.previsaoRecursosTitulo = dados.graficoPrevisaoRecursos?.titulo;
        this.previsaoRecursosSeries = dados.graficoPrevisaoRecursos?.series;
        this.previsaoRecursosCategorias = dados.graficoPrevisaoRecursos?.categorias;
        this.previsaoRecursosDescricaoEixoX = dados.graficoPrevisaoRecursos?.descricaoEixoX;

        this.producaoScannersTitulo = dados.graficoProducaoScanners.titulo;
        this.producaoScannersSeries = dados.graficoProducaoScanners.series;
        this.producaoScannersCategorias = dados.graficoProducaoScanners.categorias;
        this.producaoScannersDescricaoEixoX = dados.graficoProducaoScanners.descricaoEixoX;

        this.performanceScannersTitulo = dados.graficoPerformanceScanners.titulo;
        this.performanceScannersSeries = dados.graficoPerformanceScanners.series;
        this.performanceScannersCategorias = dados.graficoPerformanceScanners.categorias;
        this.performanceScannersDescricaoEixoX = dados.graficoPerformanceScanners.descricaoEixoX;

        this.graficoAreaDigitalizacaoTitulo = dados.graficoAreaDigitalizacao.titulo;
        this.graficoAreaDigitalizacaoSeries = dados.graficoAreaDigitalizacao.series;
        this.graficoAreaDigitalizacaoCategorias = dados.graficoAreaDigitalizacao.categorias;
        this.graficoAreaDigitalizacaoDescricaoEixoX = dados.graficoAreaDigitalizacao.descricaoEixoX;

        this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
        this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
        this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
        this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;

        this.indicadoresTempoDigitalizacaoValorMedio = dados.indicadoresTotais.tempoDigitalizacaoValorMedio;
        this.indicadoresLaminasPorHoraValorMedio = dados.indicadoresTotais.laminasPorHoraValorMedio;
        this.indicadoresAreaDigitalizacaoValorMedio = dados.indicadoresTotais.areaDigitalizacaoValorMedio;
        this.indicadoresLaminasPorHoraValorMedioAjustado = dados.indicadoresTotais.laminasPorHoraValorMedioAjustado;

        this.areaDigitalizacaoValorMedio = dados.exameAreasTotais.areaDigitalizacaoValorMedio;
        this.areaDigitalizacaoValorMaximo = dados.exameAreasTotais.areaDigitalizacaoValorMaximo;
        this.areaDigitalizacaoValorMinimo = dados.exameAreasTotais.areaDigitalizacaoValorMinimo;
    }
}