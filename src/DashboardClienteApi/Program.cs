using System;
using System.IO;
using System.Net;
using DashboardClienteApi;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace DashboardConsoleClienteApi
{
    internal class Program
    {
        private static void Main()
        {
            ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;

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
        }

        private static ConfiguracaoApi ObterConfiguracao()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                                                                      .AddJsonFile("appsettings.json");

            IConfigurationRoot configuration = builder.Build();

            ConfiguracaoApi configuracao = new ConfiguracaoApi();
            configuration.GetSection("ConfiguracaoApi")
                         .Bind(configuracao);
            return configuracao;
        }
    }
}
