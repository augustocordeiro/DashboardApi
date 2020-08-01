namespace DashboardApi.Entidades
{
    public class Detalhe
    {
        public long DiasPrevisao { get; set; }
        public long EspacoTotalBytes { get; set; }
        public long EspacoLivreBytes { get; set; }
        public double EspacoLivrePerc { get; set; }
        public long? EspacoLivreImagens { get; set; }
        public long? EspacoLivreDias { get; set; }
    }
}