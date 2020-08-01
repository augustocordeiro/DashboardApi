namespace DashboardApi.Entidades
{
    public class Indicador
    {
        public string Scanner { get; set; }
        public string Local { get; set; }
        public long TempoDigitalizacaoValorMedio { get; set; }
        public long TempoDigitalizacaoValorMaximo { get; set; }
        public long TempoDigitalizacaoValorMinimo { get; set; }
        public long LaminasPorHoraValorMedio { get; set; }
        public long LaminasPorHoraValorMaximo { get; set; }
        public long LaminasPorHoraValorMinimo { get; set; }
        public long TempoDigitalizacaoMelhorHistorico { get; set; }
        public long LaminasPorHoraMelhorHistorico { get; set; }
    }
}