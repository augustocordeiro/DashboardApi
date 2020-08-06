using static Telepatologia.Dashboard.Dominio.Calculos.Utilidades;
namespace DashboardApi.Consulta
{
    public class DashboardUtilizacao
    {
        public string CodPatologista { get; set; }
        public string NomPatologista { get; set; }
        public int DistribuidasQtde { get; set; }
        public int VisualizadasQtde { get; set; }
        public decimal VisualizadasPerc { get; set; }
        public void CalcularVisualizadosPerc()
        {
            VisualizadasPerc = CalcularPercentual(VisualizadasQtde, DistribuidasQtde);
        }
    }
}