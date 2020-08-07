using System;

namespace DashboardApi.Calculos
{
    public static class Utilidades
    {
        public static string ObterEspacoGigaBytes(long espacoBytes)
        {
            return $"{(espacoBytes / (1024 * 1024 * 1024)):N0} GB"; ;
        }

        public static decimal CalcularPercentual(long valor1, long valor2)
        {
            return valor2 == 0 ? 0 : Math.Round(valor1 / (decimal) valor2, 2);
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
