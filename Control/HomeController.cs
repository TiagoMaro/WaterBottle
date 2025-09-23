// Exemplo de um Controller
public class HomeController : Controller
{
    // Ação que exibe o formulário inicial
    public IActionResult Index()
    {
        // Retorna a View (página HTML) para o usuário
        return View();
    }

    // Ação que recebe o número de garrafas do formulário (POST)
    [HttpPost]
    
    
    // Armazena o total de garrafas usando TempData (persiste entre requests)
    public IActionResult ShowBottles(BottleData model)
    {
        int totalBottles = 0;

        // Recupera o valor anterior, se existir
        if (TempData.ContainsKey("TotalBottles"))
        {
            totalBottles = (int)TempData["TotalBottles"];
        }

        // Soma o novo valor
        totalBottles += bottles;

        // Salva novamente para o próximo request
        TempData["TotalBottles"] = totalBottles;

        // Retorna o total para a View ou como JSON
        return Json(new { total = totalBottles });
    }
}