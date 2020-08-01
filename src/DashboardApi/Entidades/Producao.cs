namespace DashboardApi.Entidades
{
    public class Producao
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public long DigitalizadasQtde { get; set; }
        public long IntegradasQtde { get; set; }
        public long IntegradasPerc { get; set; }
        public long ErroCodigoBarrasQtde { get; set; }
        public long ErroCodigoBarrasPerc { get; set; }
        public long ErroQualidadeImagemQtde { get; set; }
        public double ErroQualidadeImagemPerc { get; set; }
    }
}