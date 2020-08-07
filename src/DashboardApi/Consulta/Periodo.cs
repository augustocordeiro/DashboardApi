using System;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Periodo
    {
        [JsonProperty("DataInicial")]
        public DateTimeOffset DataInicial { get; set; }

        [JsonProperty("DataFinal")]
        public DateTimeOffset DataFinal { get; set; }
    }
}