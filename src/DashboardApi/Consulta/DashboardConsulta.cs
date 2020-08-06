﻿using System;
using System.Collections.Generic;
using System.Linq;
using Telepatologia.Dashboard.Dominio;
using Telepatologia.Dashboard.Dominio.Consulta;

namespace DashboardApi.Consulta
{
    public class DashboardConsulta
    {
        public string Titulo { get; set; }
        public string Subtitulo => ObterSubtitulo();
        public Periodo Periodo { get; set; }
        public DateTime DataObservacao { get; set; }
        public List<DashboardRecurso> Recursos { get; set; }
        public List<DashboardProducao> Producoes { get; set; }
        public List<DashboardUtilizacao> Utilizacoes { get; set; }
        public List<DashboardIndicador> Indicadores { get; set; }
        public GraficoColuna GraficoEspacoLivre { get; set; }
        public GraficoArea GraficoProducaoScanners { get; set; }
        public GraficoLinha GraficoEngajamentoPatologistas { get; set; }
        public GraficoLinha GraficoPerformanceScanners { get; set; }
        public RecursosTotais RecursosTotais { get; set; }
        public ProducaoTotais ProducaoTotais { get; set; }
        public UtilizacaoTotais UtilizacaoTotais { get; set; }
        public IndicadoresTotais IndicadoresTotais { get; set; }
        public DashboardConsulta()
        {
            Titulo = @"DASHBOARD TELEPATOLOGIA";
            Recursos = new List<DashboardRecurso>();
            Producoes = new List<DashboardProducao>();
            Utilizacoes = new List<DashboardUtilizacao>();
            Indicadores = new List<DashboardIndicador>();
            RecursosTotais = new RecursosTotais();
            ProducaoTotais = new ProducaoTotais();
            UtilizacaoTotais = new UtilizacaoTotais();
            IndicadoresTotais = new IndicadoresTotais();
        }

        private string ObterSubtitulo()
        {
            if (Periodo.DataInicial > new DateTime(1970, 1, 1))
            {
                return $"Ref. {Periodo.DataInicial:MM/yyyy} a {Periodo.DataFinal:MM/yyyy}";
            }
            return $"Ref. {DataObservacao:dd/MM/yyyy}";
        }
        public void AgregarTotais()
        {
            RecursosTotais = ObterRecursosTotais();
            ProducaoTotais = ObterProducaoTotais();
            UtilizacaoTotais = ObterUtilizacaoTotais();
            IndicadoresTotais = ObterIndicadoresTotais();
        }
        private IndicadoresTotais ObterIndicadoresTotais()
        {
            return new IndicadoresTotais
            {
                TempoDigitalizacaoValorMinimo = Indicadores.Min(i => i.TempoDigitalizacaoValorMinimo),
                TempoDigitalizacaoValorMaximo = Indicadores.Max(i => i.TempoDigitalizacaoValorMaximo),
                TempoDigitalizacaoValorMedio = (int)Indicadores.Average(i => i.TempoDigitalizacaoValorMedio),
                TempoDigitalizacaoMelhorHistorico = Indicadores.Min(i => i.TempoDigitalizacaoMelhorHistorico),
                LaminasPorHoraValorMinimo = Indicadores.Min(i => i.LaminasPorHoraValorMinimo),
                LaminasPorHoraValorMaximo = Indicadores.Max(i => i.LaminasPorHoraValorMaximo),
                LaminasPorHoraValorMedio = (int)Indicadores.Average(i => i.LaminasPorHoraValorMedio),
                LaminasPorHoraMelhorHistorico = Indicadores.Max(i => i.LaminasPorHoraMelhorHistorico)
            };
        }

        private UtilizacaoTotais ObterUtilizacaoTotais()
        {
            return new UtilizacaoTotais
            {
                VisualizadasQtde = Utilizacoes.Sum(u => u.VisualizadasQtde),
                DistribuidasQtde = Utilizacoes.Sum(u => u.DistribuidasQtde)
            };
        }

        private RecursosTotais ObterRecursosTotais()
        {
            return new RecursosTotais
            {
                EspacoLivreBytes = (long)Recursos.Sum(r => r.EspacoLivreBytes),
                EspacoTotalBytes = (long)Recursos.Sum(r => r.EspacoTotalBytes),
                EspacoLivreDias = (short)Recursos
                    .Where(r => r.EspacoLivreDias != null)
                    .Min(r => r.EspacoLivreDias ?? 0),
                EspacoLivreImagens = (int)Recursos
                    .Where(r => r.EspacoLivreImagens != null)
                    .Sum(r => r.EspacoLivreImagens ?? 0)
            };
        }


        private ProducaoTotais ObterProducaoTotais()
        {
            return new ProducaoTotais
            {

                DigitalizadasQtde = Producoes.Sum(p => p.DigitalizadasQtde),
                IntegradasQtde = Producoes.Sum(p => p.IntegradasQtde),
                ErroCodigoBarrasQtde = Producoes.Sum(p => p.ErroCodigoBarrasQtde),
                ErroQualidadeImagemQtde = Producoes.Sum(p => p.ErroQualidadeImagemQtde)
            };
        }
    }
}