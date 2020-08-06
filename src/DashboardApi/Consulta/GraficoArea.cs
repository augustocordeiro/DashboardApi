using System.Collections.Generic;

namespace Telepatologia.Dashboard.Dominio.Consulta
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