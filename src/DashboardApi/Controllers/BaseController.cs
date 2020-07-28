using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace DashboardApi.Controllers
{
    public class BaseController : ControllerBase
    {
        protected IActionResult CriarResposta(HttpStatusCode statusCode, object resultado)
        {
            HttpContext.Response.StatusCode = (int)statusCode;
            return new JsonResult(resultado);
        }
    }
}