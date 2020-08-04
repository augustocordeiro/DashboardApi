using System;
using System.Collections.Generic;

namespace DashboardApi.Entidades
{
    public class Recurso
    {
        public string Local { get; set; }
        public DateTime DataObservacao { get; set; }
        public string EspacoTotal { get; set; }
        public string EspacoLivre { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public double EspacoLivrePerc { get; set; }
        public long? EspacoLivreImagens { get; set; }
        public long? EspacoLivreDias { get; set; }
        public List<Detalhe> Detalhes { get; set; }
    }
}