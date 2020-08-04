using Telepatologia.Dashboard.Dominio.Calculos;

namespace DashboardApi.Consulta
{
    public class RecursosTotais
    {
        public string EspacoTotal => Utilidades.ObterEspacoGigaBytes(EspacoTotalBytes);
        public string EspacoLivre => Utilidades.ObterEspacoGigaBytes(EspacoLivreBytes);
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc => Utilidades.CalcularPercentual(EspacoLivreBytes, EspacoTotalBytes);
        public int EspacoLivreImagens { get; set; }
        public short EspacoLivreDias { get; set; }

        public RecursosTotais()
        {
            //EspacoTotalBytes = 0;
            //EspacoLivreBytes = 0;
            //EspacoLivreImagens = 0;
            //EspacoLivreDias = 0;
        }
    }
}