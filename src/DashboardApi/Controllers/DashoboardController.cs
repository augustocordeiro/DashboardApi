using System;
using System.Net;
using DashboardApi.Consulta;
using DashboardApi.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace DashboardApi.Controllers
{
    [Route("api/dashboard")]
    [ApiController]
    public class DashboardController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;
        public DashboardController(IConfiguration configuration, ILogger<ApiLog> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] int tipoConsulta)
        {
            try
            {
                string conteudoDashoboard = tipoConsulta == 1
                    ? System.IO.File.ReadAllText("dashboard.json")
                    : System.IO.File.ReadAllText("dashboardSemana.json");

                DashboardRaiz dashboard = JsonConvert.DeserializeObject<DashboardRaiz>(conteudoDashoboard);

                return dashboard != null ?
                    CriarResposta(HttpStatusCode.OK, dashboard) :
                    CriarResposta(HttpStatusCode.BadRequest, "Erro ao carregar o dashboard.");
            }
            catch (Exception e)
            {
                const string mensagem = "Ocorreu um erro inesperado.";
                _logger.LogError(e, mensagem);
                return CriarResposta(HttpStatusCode.BadRequest, mensagem);
            }
        }

        private ConfiguracaoApi ObterConfiguracao()
        {
            ConfiguracaoApi configuracao = new ConfiguracaoApi();
            new ConfigureFromConfigurationOptions<ConfiguracaoApi>(_configuration.GetSection("ConfiguracaoApi")).Configure(configuracao);
            return configuracao;
        }

    }
}
