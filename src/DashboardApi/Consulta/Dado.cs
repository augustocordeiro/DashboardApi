using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class Dado
    {
        [JsonProperty("Categoria")]
        public Categoria Categoria { get; set; }

        [JsonProperty("Valor")]
        public double Valor { get; set; }
    }
}