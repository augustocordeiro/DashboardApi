using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DashboardApi.Consulta
{
    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
                                                                 {
                                                                     MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
                                                                     DateParseHandling = DateParseHandling.None,
                                                                     Converters =
                                                                     {
                                                                         CategoriaConverter.Singleton,
                                                                         CorConverter.Singleton,
                                                                         new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
                                                                     },
                                                                 };
    }
}