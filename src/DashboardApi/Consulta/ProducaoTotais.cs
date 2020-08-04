using Telepatologia.Dashboard.Dominio.Calculos;

namespace DashboardApi.Consulta
{
    public class ProducaoTotais
    {
        public int DigitalizadasQtde { get; set; }
        public int IntegradasQtde { get; set; }
        public decimal IntegradasPerc => Utilidades.CalcularPercentual(IntegradasQtde, DigitalizadasQtde);
        public int ErroCodigoBarrasQtde { get; set; }
        public decimal ErroCodigoBarrasPerc => Utilidades.CalcularPercentual(ErroCodigoBarrasQtde, DigitalizadasQtde);
        public int ErroQualidadeImagemQtde { get; set; }
        public decimal ErroQualidadeImagemPerc => Utilidades.CalcularPercentual(ErroQualidadeImagemQtde, DigitalizadasQtde);

        public ProducaoTotais()
        {
            //DigitalizadasQtde = 0;
            //IntegradasQtde = 0;
            //ErroCodigoBarrasQtde = 0;
            //ErroQualidadeImagemQtde = 0;
        }
    }
}