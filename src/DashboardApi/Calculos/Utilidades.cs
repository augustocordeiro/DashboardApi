using System;
using System.Collections.Generic;
using System.Text;

namespace Telepatologia.Dashboard.Dominio.Calculos
{
    public static class Utilidades
    {
        public static string ObterEspacoGigaBytes(long espacoBytes)
        {
            return $"{(espacoBytes / (1024 * 1024 * 1024)):N0} GB"; ;
        }

        public static decimal CalcularPercentual(long valor1, long valor2)
        {
            if (valor2 == 0) return 0;
            return Math.Round(valor1 / (decimal) valor2, 2);
        }
        public static int? CalcularEspacoLivreImagens(long espacoLivre, long? tamanhoMedioImagem)
        {
            if (tamanhoMedioImagem == null || tamanhoMedioImagem == 0)
            {
                return null;
            }
            return (int)(espacoLivre / tamanhoMedioImagem);
        }
        public static short? CalcularEspacoLivreDias(long espacoLivre, int? quantidadeImagens, long? tamanhoMedioImagem)
        {
            if (quantidadeImagens == null || tamanhoMedioImagem == null || quantidadeImagens == 0 ||
                tamanhoMedioImagem == 0)
            {
                return null;
            }
            return (short)(((espacoLivre / quantidadeImagens) / tamanhoMedioImagem));
        }
    }
}
