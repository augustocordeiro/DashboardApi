using System;
using DashboardApi.Entidades;
using DashboardApi.Util;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DashboardApi.Controllers
{
    [Route("api/teste")]
    [ApiController]
    public class TesteController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public TesteController(IConfiguration configuration, ILogger<ApiLog> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromBody] object conteudo)
        {
            try
            {
                ConfiguracaoApi configuracao = ObterConfiguracao();

                if (Criptografia.ConteudoEvalido(conteudo, Request.GetHeader(configuracao.ParametroAssinatura), configuracao.ChaveSecreta))
                {
                    return Ok();
                }

                const string mensagem = "Assinatura inválida";

                _logger.LogError(mensagem);
                return BadRequest(mensagem);
            }
            catch (Exception e)
            {
                const string mensagem = "Ocorreu um erro inesperado.";

                _logger.LogError(e, mensagem);
                return BadRequest(mensagem);
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