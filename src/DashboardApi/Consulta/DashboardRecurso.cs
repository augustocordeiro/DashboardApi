using System.Collections.Generic;
using Telepatologia.Dashboard.Dominio.Calculos;
using Telepatologia.Dashboard.Dominio.Consulta;

namespace DashboardApi.Consulta
{
    public class DashboardRecurso
    {
        public string Local { get; set; }
        public string EspacoTotal { get; set; }
        public string EspacoLivre { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc { get; set; }
        public int? EspacoLivreImagens { get; set; }
        public short? EspacoLivreDias { get; set; }
        public List<DashboardRecursoDetalhe> Detalhes { get; set; }
        public DashboardRecurso()
        {
            Detalhes = new List<DashboardRecursoDetalhe>();

        }
       

        public void AtualizarCalculados()
        {
            EspacoTotal = Utilidades.ObterEspacoGigaBytes(EspacoTotalBytes);
            EspacoLivre = Utilidades.ObterEspacoGigaBytes(EspacoLivreBytes);
            EspacoLivrePerc = Utilidades.CalcularPercentual(EspacoLivreBytes, EspacoTotalBytes);
        }
    }
}