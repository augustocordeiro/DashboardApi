using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    public static class Serialize
    {
        public static string ToJson(this DashboardConsulta self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }
}