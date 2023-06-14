using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Curriculums.Models
{
    public class Curriculum {
        public string? Tittle { get; set;}
        [JsonPropertyName("img")]
        public string? Image { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Curriculum>(this);
    }
}
