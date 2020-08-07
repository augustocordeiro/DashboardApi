using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Indicadore
    {
        [JsonProperty("Scanner", NullValueHandling = NullValueHandling.Ignore)]
        public string Scanner { get; set; }

        [JsonProperty("Local", NullValueHandling = NullValueHandling.Ignore)]
        public string Local { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMedio")]
        public long TempoDigitalizacaoValorMedio { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMaximo")]
        public long TempoDigitalizacaoValorMaximo { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMinimo")]
        public long TempoDigitalizacaoValorMinimo { get; set; }

        [JsonProperty("LaminasPorHoraValorMedio")]
        public long LaminasPorHoraValorMedio { get; set; }

        [JsonProperty("LaminasPorHoraValorMaximo")]
        public long LaminasPorHoraValorMaximo { get; set; }

        [JsonProperty("LaminasPorHoraValorMinimo")]
        public long LaminasPorHoraValorMinimo { get; set; }

        [JsonProperty("TempoDigitalizacaoMelhorHistorico")]
        public long TempoDigitalizacaoMelhorHistorico { get; set; }

        [JsonProperty("LaminasPorHoraMelhorHistorico")]
        public long LaminasPorHoraMelhorHistorico { get; set; }
    }
}