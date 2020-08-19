
namespace DashboardApi.Consulta
{
    public class DashboardProducao
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public int DigitalizadasQtde { get; set; }
        public int IntegradasQtde { get; set; }
        public decimal IntegradasPerc { get; set; }
        public int ErroCodigoBarrasQtde { get; set; }
        public decimal ErroCodigoBarrasPerc { get; set; }
        public int ErroQualidadeImagemQtde { get; set; }
        public decimal ErroQualidadeImagemPerc { get; set; }




    }
}