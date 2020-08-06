using Telepatologia.Dashboard.Dominio.Calculos;

namespace DashboardApi.Consulta
{
    public class UtilizacaoTotais
    {
        public int DistribuidasQtde { get; set; }
        public int VisualizadasQtde { get; set; }
        public decimal VisualizadasPerc => Utilidades.CalcularPercentual(VisualizadasQtde, DistribuidasQtde);

        public UtilizacaoTotais()
        {
            //DistribuidasQtde = 0;
            //VisualizadasQtde = 0;

        }
    }
}