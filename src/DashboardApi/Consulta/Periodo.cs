using System;

namespace DashboardApi.Consulta
{
    public struct Periodo
    {
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
        public override string ToString()
        {
            return ObterDescricao();
        }

        private string ObterDescricao()
        {
            const string retorno = @"Período de Consulta: ";
            if (DataInicial == DataFinal)
            {
                return $"{retorno}{DataInicial:dd/MM/yyyy}";
            }

            if (DataInicial.Year != DataFinal.Year)
            {
                return $"{retorno}de {DataInicial:dd/MM/yyyy} até {DataFinal:dd/MM/yyyy}";
            }

            return DataInicial.Month == DataFinal.Month ? $"{retorno}de {DataInicial:dd} até {DataFinal:dd/MM/yyyy}" : $"{retorno}de {DataInicial:dd/MM} até {DataFinal:dd/MM/yyyy}";
        }
    }
}
