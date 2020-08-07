using System;
using Newtonsoft.Json;

namespace DashboardApi.Consulta
{
    internal class CorConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Cor) || t == typeof(Cor?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null)
            {
                return null;
            }

            string value = serializer.Deserialize<string>(reader);
            switch (value)
            {
                case "Chocolate":
                    return Cor.Chocolate;
                case "MidnightBlue":
                    return Cor.MidnightBlue;
                case "SeaGreen":
                    return Cor.SeaGreen;
            }
            throw new Exception("Cannot unmarshal type Cor");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            Cor value = (Cor)untypedValue;
            switch (value)
            {
                case Cor.Chocolate:
                    serializer.Serialize(writer, "Chocolate");
                    return;
                case Cor.MidnightBlue:
                    serializer.Serialize(writer, "MidnightBlue");
                    return;
                case Cor.SeaGreen:
                    serializer.Serialize(writer, "SeaGreen");
                    return;
            }
            throw new Exception("Cannot marshal type Cor");
        }

        public static readonly CorConverter Singleton = new CorConverter();
    }
}