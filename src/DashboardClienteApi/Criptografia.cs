using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace DashboardClienteApi
{
    public static class Criptografia
    {
        private static string LimparConteudo(object conteudo)
        {
            return Regex.Replace(conteudo.ToString()!, @"\s(?=([^""]*""[^""]*"")*[^""]*$)", string.Empty);
        }

        public static string Assinar(string conteudo, string chaveSecreta)
        {
            if (string.IsNullOrWhiteSpace(conteudo))
            {
                throw new ArgumentNullException(nameof(conteudo));
            }

            conteudo = LimparConteudo(conteudo);

            byte[] chaveSecretaBytes = Encoding.UTF8.GetBytes(chaveSecreta);
            byte[] conteudoBytes = Encoding.UTF8.GetBytes(conteudo);

            using HMACSHA1 hmSha1 = new HMACSHA1(chaveSecretaBytes);
            byte[] hash = hmSha1.ComputeHash(conteudoBytes);

            return ParaHexString(hash);
        }

        private static string ParaHexString(byte[] bytes)
        {
            StringBuilder builder = new StringBuilder(bytes.Length * 2);
            foreach (byte byteValue in bytes)
            {
                builder.AppendFormat("{0:x2}", byteValue);
            }

            return builder.ToString();
        }
    }
}