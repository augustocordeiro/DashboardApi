using System;
using System.Collections.Generic;
using System.Text;

namespace Telepatologia.Dashboard.Dominio
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
            string retorno = @"Período de Consulta: ";
            if (DataInicial == DataFinal)
            {
                return $"{retorno}{DataInicial:dd/MM/yyyy}";
            }
            if (DataInicial.Year == DataFinal.Year)
            {
                if (DataInicial.Month == DataFinal.Month)
                {
                    return $"{retorno}de {DataInicial:dd} até {DataFinal:dd/MM/yyyy}";
                }
                return $"{retorno}de {DataInicial:dd/MM} até {DataFinal:dd/MM/yyyy}";
            }
            return $"{retorno}de {DataInicial:dd/MM/yyyy} até {DataFinal:dd/MM/yyyy}";
        }
    }
}
