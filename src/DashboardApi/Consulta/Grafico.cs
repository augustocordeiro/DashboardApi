using System;
using System.Collections.Generic;

namespace DashboardApi.Consulta
{
    public class Grafico
    {
        public string Titulo { get; set; }
        public string DescricaoEixoX { get; set; }
        public string DescricaoEixoY { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
        public string Descricao { get; set; }
        public List<string> Categorias { get; set; }
    }
}