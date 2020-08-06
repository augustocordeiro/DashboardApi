using System.Collections.Generic;

namespace Telepatologia.Dashboard.Dominio.Consulta
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