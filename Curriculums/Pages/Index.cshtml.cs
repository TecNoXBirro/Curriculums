using Curriculums.Services;
using Curriculums.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Curriculums.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public CurriculumService _curriculumService;
        public IEnumerable<Curriculum> Curriculums { get; private set; }

        public IndexModel(ILogger<IndexModel> logger, CurriculumService curriculumService)
        {
            _logger = logger;
            _curriculumService = curriculumService;
        }

        public void OnGet()
        {
            Curriculums = _curriculumService.GetCurriculumList();
        }
    }
}