using System;
using System.Collections.Generic;

namespace DashboardApi.Entidades
{
    public class Grafico
    {
        public string Tipo { get; set; }
        public List<Series> Series { get; set; }
        public string Titulo { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
        public string Descricao { get; set; }
    }
}