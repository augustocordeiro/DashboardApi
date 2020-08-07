using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Utilizacoe
    {
        [JsonProperty("CodPatologista")]
        [JsonConverter(typeof(ParseStringConverter))]
        public long CodPatologista { get; set; }

        [JsonProperty("NomPatologista")]
        public string NomPatologista { get; set; }

        [JsonProperty("DistribuidasQtde")]
        public long DistribuidasQtde { get; set; }

        [JsonProperty("VisualizadasQtde")]
        public long VisualizadasQtde { get; set; }

        [JsonProperty("VisualizadasPerc")]
        public double VisualizadasPerc { get; set; }
    }
}