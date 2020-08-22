using System.Collections.Generic;

namespace DashboardApi.Consulta
{
    public class Serie
    {
        public string Nome { get; set; }
        public string Cor { get; set; }
        public List<DadoGrafico> Dados { get; set; }

    }
}