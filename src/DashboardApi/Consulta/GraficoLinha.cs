using System.Collections.Generic;

namespace Telepatologia.Dashboard.Dominio.Consulta
{
    public class GraficoLinha : Grafico
    {
        public string Tipo => @"line";
        public List<Serie> Series { get; set; }

        public GraficoLinha()
        {
            Series = new List<Serie>();
        }
    }
}