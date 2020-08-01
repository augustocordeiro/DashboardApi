using System;
using System.Collections.Generic;

namespace DashboardApi.Entidades
{
    public class Dashboard
    {
        public DateTime DataObservacao { get; set; }
        public List<Recurso> Recursos { get; set; }
        public List<Producao> Producoes { get; set; }
        public List<object> Utilizacoes { get; set; }
        public List<Indicador> Indicadores { get; set; }
        public Grafico EspacoLivre { get; set; }
        public Grafico ProducaoScanners { get; set; }
        public Grafico EngajamentoPatologistas { get; set; }
        public Grafico PerformanceScanners { get; set; }
    }
}
