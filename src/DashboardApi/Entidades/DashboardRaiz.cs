
namespace DashboardApi.Entidades
{
    using System;
    using System.Collections.Generic;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class DashboardRaiz
    {
        [JsonProperty("Geral", Required = Required.Always)]
        public Geral Geral { get; set; }

        [JsonProperty("Locais", Required = Required.Always)]
        public List<Geral> Locais { get; set; }
    }

    public partial class Geral
    {
        [JsonProperty("Titulo", Required = Required.Always)]
        public string Titulo { get; set; }

        [JsonProperty("Subtitulo", Required = Required.Always)]
        public string Subtitulo { get; set; }

        [JsonProperty("Local", Required = Required.Always)]
        public string Local { get; set; }

        [JsonProperty("Periodo", Required = Required.Always)]
        public Periodo Periodo { get; set; }

        [JsonProperty("DataObservacao", Required = Required.Always)]
        public DateTimeOffset DataObservacao { get; set; }

        [JsonProperty("AtualizadoEm", Required = Required.Always)]
        public DateTimeOffset AtualizadoEm { get; set; }

        [JsonProperty("ProcessadoEm", Required = Required.Always)]
        public string ProcessadoEm { get; set; }

        [JsonProperty("Recursos", Required = Required.Always)]
        public List<Recurso> Recursos { get; set; }

        [JsonProperty("Producoes", Required = Required.Always)]
        public List<Produc> Producoes { get; set; }

        [JsonProperty("Utilizacoes", Required = Required.Always)]
        public List<Utilizacoe> Utilizacoes { get; set; }

        [JsonProperty("Indicadores", Required = Required.Always)]
        public List<Indicadore> Indicadores { get; set; }

        [JsonProperty("GraficoEspacoLivre", Required = Required.Always)]
        public Grafico GraficoEspacoLivre { get; set; }

        [JsonProperty("GraficoProducaoScanners", Required = Required.Always)]
        public Grafico GraficoProducaoScanners { get; set; }

        [JsonProperty("GraficoEngajamentoPatologistas", Required = Required.Always)]
        public Grafico GraficoEngajamentoPatologistas { get; set; }

        [JsonProperty("GraficoPerformanceScanners", Required = Required.Always)]
        public Grafico GraficoPerformanceScanners { get; set; }

        [JsonProperty("RecursosTotais", Required = Required.Always)]
        public Recurso RecursosTotais { get; set; }

        [JsonProperty("ProducaoTotais", Required = Required.Always)]
        public Produc ProducaoTotais { get; set; }

        [JsonProperty("UtilizacaoTotais", Required = Required.Always)]
        public UtilizacaoTotais UtilizacaoTotais { get; set; }

        [JsonProperty("IndicadoresTotais", Required = Required.Always)]
        public IndicadoresTotais IndicadoresTotais { get; set; }
    }

    public partial class Grafico
    {
        [JsonProperty("Tipo", Required = Required.Always)]
        public Tipo Tipo { get; set; }

        [JsonProperty("Series", Required = Required.Always)]
        public List<Series> Series { get; set; }

        [JsonProperty("Titulo", Required = Required.Always)]
        public string Titulo { get; set; }

        [JsonProperty("DescricaoEixoX", Required = Required.Always)]
        public DescricaoEixoX DescricaoEixoX { get; set; }

        [JsonProperty("DescricaoEixoY", Required = Required.AllowNull)]
        public string DescricaoEixoY { get; set; }

        [JsonProperty("DataInicial", Required = Required.Always)]
        public DateTimeOffset DataInicial { get; set; }

        [JsonProperty("DataFinal", Required = Required.Always)]
        public DateTimeOffset DataFinal { get; set; }

        [JsonProperty("Descricao", Required = Required.Always)]
        public string Descricao { get; set; }

        [JsonProperty("Categorias", Required = Required.Always)]
        public List<Categoria> Categorias { get; set; }
    }

    public partial class Series
    {
        [JsonProperty("Nome", Required = Required.Always)]
        public string Nome { get; set; }

        [JsonProperty("Cor", Required = Required.Always)]
        public Cor Cor { get; set; }

        [JsonProperty("Dados", Required = Required.Always)]
        public List<Dado> Dados { get; set; }
    }

    public partial class Dado
    {
        [JsonProperty("Categoria", Required = Required.Always)]
        public Categoria Categoria { get; set; }

        [JsonProperty("Valor", Required = Required.Always)]
        public double Valor { get; set; }
    }

    public partial class Indicadore
    {
        [JsonProperty("Scanner", Required = Required.Always)]
        public string Scanner { get; set; }

        [JsonProperty("Local", Required = Required.Always)]
        public string Local { get; set; }

        [JsonProperty("NumeroOcorrencias", Required = Required.Always)]
        public long NumeroOcorrencias { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMedio", Required = Required.Always)]
        public long TempoDigitalizacaoValorMedio { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMaximo", Required = Required.Always)]
        public long TempoDigitalizacaoValorMaximo { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMinimo", Required = Required.Always)]
        public long TempoDigitalizacaoValorMinimo { get; set; }

        [JsonProperty("LaminasPorHoraValorMedio", Required = Required.Always)]
        public long LaminasPorHoraValorMedio { get; set; }

        [JsonProperty("LaminasPorHoraValorMaximo", Required = Required.Always)]
        public long LaminasPorHoraValorMaximo { get; set; }

        [JsonProperty("LaminasPorHoraValorMinimo", Required = Required.Always)]
        public long LaminasPorHoraValorMinimo { get; set; }

        [JsonProperty("TempoDigitalizacaoMelhorHistorico", Required = Required.Always)]
        public long TempoDigitalizacaoMelhorHistorico { get; set; }

        [JsonProperty("LaminasPorHoraMelhorHistorico", Required = Required.Always)]
        public long LaminasPorHoraMelhorHistorico { get; set; }
    }

    public partial class IndicadoresTotais
    {
        [JsonProperty("TempoDigitalizacaoValorMedio", Required = Required.Always)]
        public long TempoDigitalizacaoValorMedio { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMaximo", Required = Required.Always)]
        public long TempoDigitalizacaoValorMaximo { get; set; }

        [JsonProperty("TempoDigitalizacaoValorMinimo", Required = Required.Always)]
        public long TempoDigitalizacaoValorMinimo { get; set; }

        [JsonProperty("LaminasPorHoraValorMedio", Required = Required.Always)]
        public long LaminasPorHoraValorMedio { get; set; }

        [JsonProperty("LaminasPorHoraValorMaximo", Required = Required.Always)]
        public long LaminasPorHoraValorMaximo { get; set; }

        [JsonProperty("LaminasPorHoraValorMinimo", Required = Required.Always)]
        public long LaminasPorHoraValorMinimo { get; set; }

        [JsonProperty("TempoDigitalizacaoMelhorHistorico", Required = Required.Always)]
        public long TempoDigitalizacaoMelhorHistorico { get; set; }

        [JsonProperty("LaminasPorHoraMelhorHistorico", Required = Required.Always)]
        public long LaminasPorHoraMelhorHistorico { get; set; }
    }

    public partial class Periodo
    {
        [JsonProperty("DataInicial", Required = Required.Always)]
        public DateTimeOffset DataInicial { get; set; }

        [JsonProperty("DataFinal", Required = Required.Always)]
        public DateTimeOffset DataFinal { get; set; }
    }

    public partial class Produc
    {
        [JsonProperty("DigitalizadasQtde", Required = Required.Always)]
        public long DigitalizadasQtde { get; set; }

        [JsonProperty("IntegradasQtde", Required = Required.Always)]
        public long IntegradasQtde { get; set; }

        [JsonProperty("IntegradasPerc", Required = Required.Always)]
        public double IntegradasPerc { get; set; }

        [JsonProperty("ErroCodigoBarrasQtde", Required = Required.Always)]
        public long ErroCodigoBarrasQtde { get; set; }

        [JsonProperty("ErroCodigoBarrasPerc", Required = Required.Always)]
        public long ErroCodigoBarrasPerc { get; set; }

        [JsonProperty("ErroQualidadeImagemQtde", Required = Required.Always)]
        public long ErroQualidadeImagemQtde { get; set; }

        [JsonProperty("ErroQualidadeImagemPerc", Required = Required.Always)]
        public double ErroQualidadeImagemPerc { get; set; }

        [JsonProperty("Scanner", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Scanner { get; set; }

        [JsonProperty("Local", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Local { get; set; }
    }

    public partial class Recurso
    {
        [JsonProperty("Local", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Local { get; set; }

        [JsonProperty("EspacoTotal", Required = Required.Always)]
        public string EspacoTotal { get; set; }

        [JsonProperty("EspacoLivre", Required = Required.Always)]
        public string EspacoLivre { get; set; }

        [JsonProperty("EspacoTotalBytes", Required = Required.Always)]
        public long EspacoTotalBytes { get; set; }

        [JsonProperty("EspacoLivreBytes", Required = Required.Always)]
        public long EspacoLivreBytes { get; set; }

        [JsonProperty("EspacoLivrePerc", Required = Required.Always)]
        public double EspacoLivrePerc { get; set; }

        [JsonProperty("EspacoLivreImagens", Required = Required.Always)]
        public long EspacoLivreImagens { get; set; }

        [JsonProperty("EspacoLivreDias", Required = Required.Always)]
        public long EspacoLivreDias { get; set; }

        [JsonProperty("Detalhes", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public List<Detalhe> Detalhes { get; set; }
    }

    public partial class Detalhe
    {
        [JsonProperty("DiasPrevisao", Required = Required.Always)]
        public long DiasPrevisao { get; set; }

        [JsonProperty("EspacoTotalBytes", Required = Required.Always)]
        public long EspacoTotalBytes { get; set; }

        [JsonProperty("EspacoLivreBytes", Required = Required.Always)]
        public long EspacoLivreBytes { get; set; }

        [JsonProperty("EspacoLivrePerc", Required = Required.Always)]
        public double EspacoLivrePerc { get; set; }

        [JsonProperty("EspacoLivreImagens", Required = Required.Always)]
        public long EspacoLivreImagens { get; set; }

        [JsonProperty("EspacoLivreDias", Required = Required.Always)]
        public long EspacoLivreDias { get; set; }
    }

    public partial class UtilizacaoTotais
    {
        [JsonProperty("DistribuidasQtde", Required = Required.Always)]
        public long DistribuidasQtde { get; set; }

        [JsonProperty("VisualizadasQtde", Required = Required.Always)]
        public long VisualizadasQtde { get; set; }

        [JsonProperty("VisualizadasPerc", Required = Required.Always)]
        public double VisualizadasPerc { get; set; }
    }

    public partial class Utilizacoe
    {
        [JsonProperty("Local", Required = Required.AllowNull)]
        public Local? Local { get; set; }

        [JsonProperty("CodPatologista", Required = Required.Always)]
        [JsonConverter(typeof(ParseStringConverter))]
        public long CodPatologista { get; set; }

        [JsonProperty("NomPatologista", Required = Required.Always)]
        public string NomPatologista { get; set; }

        [JsonProperty("DistribuidasQtde", Required = Required.Always)]
        public long DistribuidasQtde { get; set; }

        [JsonProperty("VisualizadasQtde", Required = Required.Always)]
        public long VisualizadasQtde { get; set; }

        [JsonProperty("VisualizadasPerc", Required = Required.Always)]
        public double VisualizadasPerc { get; set; }
    }

    public enum Categoria { The0320, The0420, The0520, The0620, The0720, The0820 };

    public enum DescricaoEixoX { Meses };

    public enum Cor { Chocolate, MidnightBlue, SeaGreen };

    public enum Tipo { Area, Column, Line };

    public enum Local { Sp };

    public partial class DashboardRaiz
    {
        public static DashboardRaiz FromJson(string json) => JsonConvert.DeserializeObject<DashboardRaiz>(json, DashboardApi.Entidades.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this DashboardRaiz self) => JsonConvert.SerializeObject(self, DashboardApi.Entidades.Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters =
            {
                CategoriaConverter.Singleton,
                DescricaoEixoXConverter.Singleton,
                CorConverter.Singleton,
                TipoConverter.Singleton,
                LocalConverter.Singleton,
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }

    internal class CategoriaConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Categoria) || t == typeof(Categoria?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
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
            var value = (Categoria)untypedValue;
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

    internal class DescricaoEixoXConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(DescricaoEixoX) || t == typeof(DescricaoEixoX?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
            if (value == "Meses")
            {
                return DescricaoEixoX.Meses;
            }
            throw new Exception("Cannot unmarshal type DescricaoEixoX");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            var value = (DescricaoEixoX)untypedValue;
            if (value == DescricaoEixoX.Meses)
            {
                serializer.Serialize(writer, "Meses");
                return;
            }
            throw new Exception("Cannot marshal type DescricaoEixoX");
        }

        public static readonly DescricaoEixoXConverter Singleton = new DescricaoEixoXConverter();
    }

    internal class CorConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Cor) || t == typeof(Cor?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
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
            var value = (Cor)untypedValue;
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

    internal class TipoConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Tipo) || t == typeof(Tipo?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
            switch (value)
            {
                case "area":
                    return Tipo.Area;
                case "column":
                    return Tipo.Column;
                case "line":
                    return Tipo.Line;
            }
            throw new Exception("Cannot unmarshal type Tipo");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            var value = (Tipo)untypedValue;
            switch (value)
            {
                case Tipo.Area:
                    serializer.Serialize(writer, "area");
                    return;
                case Tipo.Column:
                    serializer.Serialize(writer, "column");
                    return;
                case Tipo.Line:
                    serializer.Serialize(writer, "line");
                    return;
            }
            throw new Exception("Cannot marshal type Tipo");
        }

        public static readonly TipoConverter Singleton = new TipoConverter();
    }

    internal class ParseStringConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(long) || t == typeof(long?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
            long l;
            if (Int64.TryParse(value, out l))
            {
                return l;
            }
            throw new Exception("Cannot unmarshal type long");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            var value = (long)untypedValue;
            serializer.Serialize(writer, value.ToString());
            return;
        }

        public static readonly ParseStringConverter Singleton = new ParseStringConverter();
    }

    internal class LocalConverter : JsonConverter
    {
        public override bool CanConvert(Type t) => t == typeof(Local) || t == typeof(Local?);

        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Null) return null;
            var value = serializer.Deserialize<string>(reader);
            if (value == "SP")
            {
                return Local.Sp;
            }
            throw new Exception("Cannot unmarshal type Local");
        }

        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            if (untypedValue == null)
            {
                serializer.Serialize(writer, null);
                return;
            }
            var value = (Local)untypedValue;
            if (value == Local.Sp)
            {
                serializer.Serialize(writer, "SP");
                return;
            }
            throw new Exception("Cannot marshal type Local");
        }

        public static readonly LocalConverter Singleton = new LocalConverter();
    }
}
