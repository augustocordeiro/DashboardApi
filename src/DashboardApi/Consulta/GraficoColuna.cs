using System.Collections.Generic;

namespace DashboardApi.Consulta
{
    public class GraficoColuna : Grafico
    {
        public string Tipo => @"column";
        public List<Serie> Series { get; set; }


        public GraficoColuna()
        {
            Series = new List<Serie>();
        }
    }
}