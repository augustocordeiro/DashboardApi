using System;
using System.Collections.Generic;

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
    }
}
