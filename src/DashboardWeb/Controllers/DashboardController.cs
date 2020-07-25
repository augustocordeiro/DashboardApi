using System.Collections.Generic;
using System.Web.Mvc;

namespace DashboardWeb.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CarregarDados()
        {
            JsonResult resultado = Json((new List<Datum>
                                         {
                                             new Datum
                                             {
                                                 y = "2011 Q1",
                                                 item1 = 2666,
                                                 item2 = 2666
                                             },
                                             new Datum
                                             {
                                                 y = "2011 Q2",
                                                 item1 = 2778,
                                                 item2 = 2294
                                             },
                                             new Datum
                                             {
                                                 y = "2011 Q3",
                                                 item1 = 4912,
                                                 item2 = 1969
                                             },
                                             new Datum
                                             {
                                                 y = "2011 Q4",
                                                 item1 = 3767,
                                                 item2 = 3597
                                             },
                                             new Datum
                                             {
                                                 y = "2012 Q1",
                                                 item1 = 6810,
                                                 item2 = 1914
                                             },
                                             new Datum
                                             {
                                                 y = "2012 Q2",
                                                 item1 = 5670,
                                                 item2 = 4293
                                             },
                                             new Datum
                                             {
                                                 y = "2012 Q3",
                                                 item1 = 4820,
                                                 item2 = 3795
                                             },
                                             new Datum
                                             {
                                                 y = "2012 Q4",
                                                 item1 = 15073,
                                                 item2 = 5967
                                             },
                                             new Datum
                                             {
                                                 y = "2013 Q1",
                                                 item1 = 10687,
                                                 item2 = 4460
                                             },
                                             new Datum
                                             {
                                                 y = "2013 Q2",
                                                 item1 = 8432,
                                                 item2 = 57130
                                             }
                                         }).ToArray(), JsonRequestBehavior.AllowGet);

            return resultado;
        }
    }
}