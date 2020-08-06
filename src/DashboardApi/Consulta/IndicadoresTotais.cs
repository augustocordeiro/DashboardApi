namespace Telepatologia.Dashboard.Dominio.Consulta
{
    public class IndicadoresTotais
    {
        public int TempoDigitalizacaoValorMedio { get; set; }
        public int TempoDigitalizacaoValorMaximo { get; set; }
        public int TempoDigitalizacaoValorMinimo { get; set; }
        public int LaminasPorHoraValorMedio { get; set; }
        public int LaminasPorHoraValorMaximo { get; set; }
        public int LaminasPorHoraValorMinimo { get; set; }
        public int TempoDigitalizacaoMelhorHistorico { get; set; }
        public int LaminasPorHoraMelhorHistorico { get; set; }

        public IndicadoresTotais()
        {
            
        }
    }
}