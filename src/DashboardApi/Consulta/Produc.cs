using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Produc
    {
        [JsonProperty("DigitalizadasQtde")]
        public long DigitalizadasQtde { get; set; }

        [JsonProperty("IntegradasQtde")]
        public long IntegradasQtde { get; set; }

        [JsonProperty("IntegradasPerc")]
        public double IntegradasPerc { get; set; }

        [JsonProperty("ErroCodigoBarrasQtde")]
        public long ErroCodigoBarrasQtde { get; set; }

        [JsonProperty("ErroCodigoBarrasPerc")]
        public double ErroCodigoBarrasPerc { get; set; }

        [JsonProperty("ErroQualidadeImagemQtde")]
        public long ErroQualidadeImagemQtde { get; set; }

        [JsonProperty("ErroQualidadeImagemPerc")]
        public double ErroQualidadeImagemPerc { get; set; }

        [JsonProperty("Scanner", NullValueHandling = NullValueHandling.Ignore)]
        public string Scanner { get; set; }

        [JsonProperty("Local", NullValueHandling = NullValueHandling.Ignore)]
        public string Local { get; set; }
    }
}