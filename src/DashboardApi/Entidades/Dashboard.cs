using System;
using System.Collections.Generic;

namespace DashboardApi.Entidades
{
    public class Dashboard
    {
        public DateTime DataObservacao { get; set; }
        public List<DashboardRecurso> Recursos { get; set; }
        public List<DashboardProducao> Producoes { get; set; }
        public List<DashboardUtilizacao> Utilizacoes { get; set; }
        public List<DashboardIndicador> Indicadores { get; set; }

        public Dashboard()
        {
            Recursos = new List<DashboardRecurso>();
            Producoes = new List<DashboardProducao>();
            Utilizacoes = new List<DashboardUtilizacao>();
            Indicadores = new List<DashboardIndicador>();
        }
    }

    public class DashboardRecurso
    {
        public string Local { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc { get; set; }
        public int? EspacoLivreImagens { get; set; }
        public short? EspacoLivreDias { get; set; }
        public List<DashboardRecursoDetalhe> Detalhes { get; set; }
        public DashboardRecurso()
        {
            Detalhes = new List<DashboardRecursoDetalhe>();

        }
    }
    public class DashboardRecursoDetalhe
    {
        public short DiasPrevisao { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc { get; set; }
        public int? EspacoLivreImagens { get; set; }
        public short? EspacoLivreDias { get; set; }

    }
    public class DashboardProducao
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public int DigitalizadasQtde { get; set; }
        public int IntegradasQtde { get; set; }
        public decimal IntegradasPerc { get; set; }
        public int ErroCodigoBarrasQtde { get; set; }
        public decimal ErroCodigoBarrasPerc { get; set; }
        public int ErroQualidadeImagemQtde { get; set; }
        public decimal ErroQualidadeImagemPerc { get; set; }

    }
    public class DashboardUtilizacao
    {
        public string CodPatologista { get; set; }
        public string NomPatologista { get; set; }
        public int DistribuidasQtde { get; set; }
        public int VisualizadasQtde { get; set; }
        public decimal VisualizadasPerc { get; set; }
    }
    public class DashboardIndicador
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public int TempoDigitalizacaoValorMedio { get; set; }
        public int TempoDigitalizacaoValorMaximo { get; set; }
        public int TempoDigitalizacaoValorMinimo { get; set; }
        public int LaminasPorHoraValorMedio { get; set; }
        public int LaminasPorHoraValorMaximo { get; set; }
        public int LaminasPorHoraValorMinimo { get; set; }
        public int TempoDigitalizacaoMelhorHistorico { get; set; }
        public int LaminasPorHoraMelhorHistorico { get; set; }
    }
}
