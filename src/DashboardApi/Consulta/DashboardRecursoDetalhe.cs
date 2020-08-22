namespace DashboardApi.Consulta
{
    public class DashboardRecursoDetalhe
    {
        public short DiasPrevisao { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public decimal EspacoLivrePerc { get; set; }
        public int? EspacoLivreImagens { get; set; }
        public short? EspacoLivreDias { get; set; }

    }
}