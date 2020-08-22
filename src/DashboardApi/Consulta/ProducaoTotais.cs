

namespace DashboardApi.Consulta
{
    public class ProducaoTotais
    {
        public int DigitalizadasQtde { get; set; }
        public int IntegradasQtde { get; set; }
        public decimal IntegradasPerc { get; set; }
        public int ErroCodigoBarrasQtde { get; set; }
        public int ErroQualidadeImagemQtde { get; set; }
        public decimal ErroQualidadeImagemPerc { get; set; }

        public ProducaoTotais()
        {
            //DigitalizadasQtde = 0;
            //IntegradasQtde = 0;
            //ErroCodigoBarrasQtde = 0;
            //ErroQualidadeImagemQtde = 0;
        }
    }
}