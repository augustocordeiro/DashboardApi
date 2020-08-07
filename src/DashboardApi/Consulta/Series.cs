using System.Collections.Generic;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Series
    {
        [JsonProperty("Nome")]
        public string Nome { get; set; }

        [JsonProperty("Cor")]
        public Cor Cor { get; set; }

        [JsonProperty("Dados")]
        public List<Dado> Dados { get; set; }
    }
}