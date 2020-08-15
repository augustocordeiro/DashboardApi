namespace DashboardApi.Consulta
{
    public class RecursosTotais
    {
        public string EspacoTotal { get; set; }
        public string EspacoLivre { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc { get; set; }
    public int EspacoLivreImagens { get; set; }
        public short EspacoLivreDias { get; set; }

    }
}