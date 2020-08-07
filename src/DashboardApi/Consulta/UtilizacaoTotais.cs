﻿using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public class UtilizacaoTotais
    {
        [JsonProperty("DistribuidasQtde")]
        public long DistribuidasQtde { get; set; }

        [JsonProperty("VisualizadasQtde")]
        public long VisualizadasQtde { get; set; }

        [JsonProperty("VisualizadasPerc")]
        public double VisualizadasPerc { get; set; }
    }
}