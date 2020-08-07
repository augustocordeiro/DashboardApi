using System.Collections.Generic;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Recurso
    {
        [JsonProperty("Local", NullValueHandling = NullValueHandling.Ignore)]
        public string Local { get; set; }

        [JsonProperty("EspacoTotal")]
        public string EspacoTotal { get; set; }

        [JsonProperty("EspacoLivre")]
        public string EspacoLivre { get; set; }

        [JsonProperty("EspacoTotalBytes")]
        public long EspacoTotalBytes { get; set; }

        [JsonProperty("EspacoLivreBytes")]
        public long EspacoLivreBytes { get; set; }

        [JsonProperty("EspacoLivrePerc")]
        public double EspacoLivrePerc { get; set; }

        [JsonProperty("EspacoLivreImagens")]
        public long EspacoLivreImagens { get; set; }

        [JsonProperty("EspacoLivreDias")]
        public long EspacoLivreDias { get; set; }

        [JsonProperty("Detalhes", NullValueHandling = NullValueHandling.Ignore)]
        public List<object> Detalhes { get; set; }
    }
}