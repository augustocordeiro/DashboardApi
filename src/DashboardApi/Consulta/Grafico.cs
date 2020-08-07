using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Grafico
    {
        [JsonProperty("Tipo")]
        public string Tipo { get; set; }

        [JsonProperty("Series")]
        public List<Series> Series { get; set; }

        [JsonProperty("Titulo")]
        public string Titulo { get; set; }

        [JsonProperty("DescricaoEixoX")]
        public string DescricaoEixoX { get; set; }

        [JsonProperty("DescricaoEixoY")]
        public string DescricaoEixoY { get; set; }

        [JsonProperty("DataInicial")]
        public DateTimeOffset DataInicial { get; set; }

        [JsonProperty("DataFinal")]
        public DateTimeOffset DataFinal { get; set; }

        [JsonProperty("Descricao")]
        public string Descricao { get; set; }

        [JsonProperty("Categorias")]
        public List<Categoria> Categorias { get; set; }
    }
}