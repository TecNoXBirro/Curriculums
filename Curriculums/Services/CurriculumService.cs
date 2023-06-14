using Curriculums.Models;
using System.Collections;
using System.Diagnostics.CodeAnalysis;
using System.Net.Http.Headers;
using System.Text.Json;

namespace Curriculums.Services {
    public class CurriculumService {
        public CurriculumService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment {get;}

        private string JsonFileName {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "curriculums.json"); }
        }

        public IEnumerable<Curriculum> GetCurriculumList()
        {
            using(var jsonFileReader = File.OpenText(JsonFileName))
            {
                Curriculum[]? curricula = JsonSerializer.Deserialize<Curriculum[]>(jsonFileReader.ReadToEnd(),
                                    new JsonSerializerOptions
                                    {
                                        PropertyNameCaseInsensitive = true
                                    });
                if (curricula != null) return curricula;
                else return new List<Curriculum>();
            }
        }
    }
}
