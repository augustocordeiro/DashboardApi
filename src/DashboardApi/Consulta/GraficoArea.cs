using System.Collections.Generic;

namespace DashboardApi.Consulta
{
    public class GraficoArea: Grafico
    {
        public string Tipo => @"area";
        public List<Serie> Series { get; set; }

        public GraficoArea()
        {
            Series = new List<Serie>();
        }
    }
}