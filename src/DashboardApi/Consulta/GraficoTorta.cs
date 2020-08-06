using System.Collections.Generic;

namespace Telepatologia.Dashboard.Dominio.Consulta
{
    public class GraficoTorta : Grafico
    {
        public string Tipo => @"pie";
        public List<DadoGraficoTorta> Series { get; set; }

        public GraficoTorta()
        {
            Series = new List<DadoGraficoTorta>();
        }

    }
}