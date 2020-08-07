using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class DashboardConsulta
    {
        [JsonProperty("Titulo")]
        public string Titulo { get; set; }

        [JsonProperty("Subtitulo")]
        public string Subtitulo { get; set; }

        [JsonProperty("Periodo")]
        public Periodo Periodo { get; set; }

        [JsonProperty("DataObservacao")]
        public DateTimeOffset DataObservacao { get; set; }

        [JsonProperty("Recursos")]
        public List<Recurso> Recursos { get; set; }

        [JsonProperty("Producoes")]
        public List<Produc> Producoes { get; set; }

        [JsonProperty("Utilizacoes")]
        public List<Utilizacoe> Utilizacoes { get; set; }

        [JsonProperty("Indicadores")]
        public List<Indicadore> Indicadores { get; set; }

        [JsonProperty("GraficoEspacoLivre")]
        public Grafico GraficoEspacoLivre { get; set; }

        [JsonProperty("GraficoProducaoScanners")]
        public Grafico GraficoProducaoScanners { get; set; }

        [JsonProperty("GraficoEngajamentoPatologistas")]
        public Grafico GraficoEngajamentoPatologistas { get; set; }

        [JsonProperty("GraficoPerformanceScanners")]
        public Grafico GraficoPerformanceScanners { get; set; }

        [JsonProperty("RecursosTotais")]
        public Recurso RecursosTotais { get; set; }

        [JsonProperty("ProducaoTotais")]
        public Produc ProducaoTotais { get; set; }

        [JsonProperty("UtilizacaoTotais")]
        public UtilizacaoTotais UtilizacaoTotais { get; set; }

        [JsonProperty("IndicadoresTotais")]
        public Indicadore IndicadoresTotais { get; set; }

        public static DashboardConsulta FromJson(string json) => JsonConvert.DeserializeObject<DashboardConsulta>(json, Converter.Settings);
    }
}