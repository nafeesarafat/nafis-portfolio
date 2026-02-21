using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PortfolioWebsite.Models;
using PortfolioWebsite.Services;

namespace PortfolioWebsite.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IEmailService _emailService;

    public HomeController(ILogger<HomeController> logger, IEmailService emailService)
    {
        _logger = logger;
        _emailService = emailService;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Contact(ContactViewModel model)
    {
        if (ModelState.IsValid)
        {
            try
            {
                // Send email
                await _emailService.SendContactEmailAsync(model.Name, model.Email, model.Message);

                // Log the successful contact
                _logger.LogInformation($"Contact form email sent successfully for {model.Name} ({model.Email})");

                TempData["SuccessMessage"] = "Thank you for your message! I will get back to you soon.";
            }
            catch (Exception ex)
            {
                // Log the error
                _logger.LogError(ex, $"Failed to send contact email for {model.Name} ({model.Email})");

                TempData["ErrorMessage"] = "Sorry, there was an error sending your message. Please try again later or contact me directly.";
            }

            return RedirectToAction("Contact");
        }

        // If model is invalid, return to the contact page with validation errors
        TempData["ErrorMessage"] = "Please correct the errors and try again.";
        return RedirectToAction("Contact");
    }

    public IActionResult About()
    {
        return View();
    }

    public IActionResult Skills()
    {
        return View();
    }

    public IActionResult Projects()
    {
        return View();
    }

    public IActionResult Contact()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
