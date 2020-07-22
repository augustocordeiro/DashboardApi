using System;
using System.Collections.Specialized;
using System.Configuration;
using System.Net;
using Newtonsoft.Json;
using RestSharp;

namespace DashboardClienteApiNet4
{
    class Program
    {
        private static void Main()
        {
            ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
            object objeto = new
                            {
                                Valor = "Teste"
                            };

            ConfiguracaoApi configuracao = ObterConfiguracao();

            string conteudoJson = JsonConvert.SerializeObject(objeto);
            string assinaturaConteudo = Criptografia.Assinar(conteudoJson, configuracao.ChaveSecreta);

            RestClient client = new RestClient("https://localhost:5001/api/teste") { Timeout = -1 };
            RestRequest request = new RestRequest(Method.POST);

            request.AddHeader("Content-Type", "application/json");

            string assinatura = $"sha1={assinaturaConteudo}";

            request.AddHeader(configuracao.ParametroAssinatura, assinatura);

            request.AddParameter("application/json", conteudoJson, ParameterType.RequestBody);

            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.StatusCode);

            Console.ReadLine();
        }

        private static ConfiguracaoApi ObterConfiguracao()
        {
            try
            {
                NameValueCollection appSettings = ConfigurationManager.AppSettings;

                return new ConfiguracaoApi
                       {
                           ChaveSecreta = appSettings["ChaveSecreta"],
                           ParametroAssinatura = appSettings["ParametroAssinatura"]

                       };
            }
            catch
            {
                return new ConfiguracaoApi();
            }
        }
    }
}
