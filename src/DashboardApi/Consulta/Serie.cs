using System.Collections.Generic;

namespace Telepatologia.Dashboard.Dominio.Consulta
{
    public class Serie
    {
        public string Nome { get; set; }
        public string Cor { get; set; }
        public List<DadoGrafico> Dados { get; set; }

    }
}