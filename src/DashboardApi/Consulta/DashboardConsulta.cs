using System;
using System.Collections.Generic;
using System.Linq;

namespace DashboardApi.Consulta
{
    public class DashboardRaiz
    {
        public DashboardConsulta Geral { get; set; }
        public List<DashboardConsulta> Locais { get; set; }

        public DashboardRaiz()
        {
            Geral = new DashboardConsulta();
            Locais = new List<DashboardConsulta>();
        }
    }

    public class DashboardConsulta
    {
        public string Titulo { get; set; }
        public string Subtitulo { get; set; }
        public string Local { get; set; }
        public Periodo Periodo { get; set; }
        public DateTime DataObservacao { get; set; }
        public DateTime AtualizadoEm { get; set; }
        public string ProcessadoEm => AtualizadoEm.ToString(@"dd/MM/yyyy HH:mm");
        public List<DashboardRecurso> Recursos { get; set; }
        public List<DashboardProducao> Producoes { get; set; }
        public List<DashboardUtilizacao> Utilizacoes { get; set; }
        public List<DashboardIndicador> Indicadores { get; set; }
        public GraficoColuna GraficoEspacoLivre { get; set; }
        public GraficoArea GraficoProducaoScanners { get; set; }
        public GraficoLinha GraficoEngajamentoPatologistas { get; set; }
        public GraficoLinha GraficoPerformanceScanners { get; set; }
        public GraficoLinha GraficoPrevisaoRecursos { get; set; }
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
            var totalGeralOcorrencias = Indicadores.Sum(i => i.NumeroOcorrencias);
            if (totalGeralOcorrencias == 0)
            {
                return new IndicadoresTotais
                {
                    TempoDigitalizacaoValorMinimo = 0,
                    TempoDigitalizacaoValorMaximo = 0,
                    TempoDigitalizacaoValorMedio = 0,
                    TempoDigitalizacaoMelhorHistorico = 0,
                    LaminasPorHoraValorMaximo = 0,
                    LaminasPorHoraValorMinimo = 0,
                    LaminasPorHoraValorMedio = 0,
                    LaminasPorHoraMelhorHistorico = 0
                };
            }
            return new IndicadoresTotais
            {
                TempoDigitalizacaoValorMinimo = Indicadores.Min(i => i.TempoDigitalizacaoValorMinimo),
                TempoDigitalizacaoValorMaximo = Indicadores.Max(i => i.TempoDigitalizacaoValorMaximo),
                TempoDigitalizacaoValorMedio = (int)Indicadores.Sum(i => i.TempoDigitalizacaoValorMedio * i.NumeroOcorrencias)/totalGeralOcorrencias,
                TempoDigitalizacaoMelhorHistorico = Indicadores.Min(i => i.TempoDigitalizacaoMelhorHistorico),
                LaminasPorHoraValorMinimo = Indicadores.Min(i => i.LaminasPorHoraValorMinimo),
                LaminasPorHoraValorMaximo = Indicadores.Max(i => i.LaminasPorHoraValorMaximo),
                LaminasPorHoraValorMedio = (int)Indicadores.Sum(i => i.LaminasPorHoraValorMedio * i.NumeroOcorrencias)/totalGeralOcorrencias,
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
