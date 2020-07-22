using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace DashboardApi.Util
{
    public static class Criptografia
    {
        public static bool ConteudoEvalido(object conteudo, string assinatura, string chaveSecretaWebHooks)
        {
            if (string.IsNullOrWhiteSpace(assinatura))
            {
                return false;
            }

            string valor = LimparConteudo(conteudo);

            return ConteudoAssinaturaValida(valor, assinatura, chaveSecretaWebHooks);
        }

        private static string LimparConteudo(object conteudo)
        {
            return Regex.Replace(conteudo.ToString()!, @"\s(?=([^""]*""[^""]*"")*[^""]*$)", string.Empty);
        }

        private static bool ConteudoAssinaturaValida(string conteudo, string assinatura, string chaveSecreta)
        {
            const string prefixoSha1 = "sha1=";

            if (string.IsNullOrWhiteSpace(conteudo))
            {
                throw new ArgumentNullException(nameof(conteudo));
            }

            if (string.IsNullOrWhiteSpace(assinatura))
            {
                throw new ArgumentNullException(nameof(assinatura));
            }

            if (!assinatura.StartsWith(prefixoSha1, StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            string signatureSemPrefixo = assinatura.Substring(prefixoSha1.Length);

            byte[] chaveSecretaBytes = Encoding.UTF8.GetBytes(chaveSecreta);
            byte[] conteudoBytes = Encoding.UTF8.GetBytes(conteudo);

            using HMACSHA1 hmSha1 = new HMACSHA1(chaveSecretaBytes);
            byte[] hash = hmSha1.ComputeHash(conteudoBytes);

            string hashString = ParaHexString(hash);

            return hashString.Equals(signatureSemPrefixo);
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