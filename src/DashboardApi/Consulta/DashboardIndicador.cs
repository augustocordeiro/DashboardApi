namespace DashboardApi.Consulta
{
    public class DashboardIndicador
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public int NumeroOcorrencias { get; set; }
        public int TempoDigitalizacaoValorMedio { get; set; }
        public int TempoDigitalizacaoValorMaximo { get; set; }
        public int TempoDigitalizacaoValorMinimo { get; set; }
        public int LaminasPorHoraValorMedio { get; set; }
        public int LaminasPorHoraValorMaximo { get; set; }
        public int LaminasPorHoraValorMinimo { get; set; }
        public int TempoDigitalizacaoMelhorHistorico { get; set; }
        public int LaminasPorHoraMelhorHistorico { get; set; }
    }
}