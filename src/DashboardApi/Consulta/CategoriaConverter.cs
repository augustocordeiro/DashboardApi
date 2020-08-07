using System;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    internal class CategoriaConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Categoria) || t == typeof(Categoria?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null)
            {
                return null;
            }

            string value = serializer.Deserialize<string>(reader);
            switch (value)
            {
                case "03/20":
                    return Categoria.The0320;
                case "04/20":
                    return Categoria.The0420;
                case "05/20":
                    return Categoria.The0520;
                case "06/20":
                    return Categoria.The0620;
                case "07/20":
                    return Categoria.The0720;
                case "08/20":
                    return Categoria.The0820;
            }
            throw new Exception("Cannot unmarshal type Categoria");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            Categoria value = (Categoria)untypedValue;
            switch (value)
            {
                case Categoria.The0320:
                    serializer.Serialize(writer, "03/20");
                    return;
                case Categoria.The0420:
                    serializer.Serialize(writer, "04/20");
                    return;
                case Categoria.The0520:
                    serializer.Serialize(writer, "05/20");
                    return;
                case Categoria.The0620:
                    serializer.Serialize(writer, "06/20");
                    return;
                case Categoria.The0720:
                    serializer.Serialize(writer, "07/20");
                    return;
                case Categoria.The0820:
                    serializer.Serialize(writer, "08/20");
                    return;
            }
            throw new Exception("Cannot marshal type Categoria");
        }

        public static readonly CategoriaConverter Singleton = new CategoriaConverter();
    }
}