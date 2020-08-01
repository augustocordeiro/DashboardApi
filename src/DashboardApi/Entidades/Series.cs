using System.Collections.Generic;

namespace DashboardApi.Entidades
{
    public class Series
    {
        public string Nome { get; set; }
        public List<double> Dados { get; set; }
        public List<string> Categorias { get; set; }
    }
}