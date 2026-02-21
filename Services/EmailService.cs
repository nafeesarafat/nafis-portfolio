using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

namespace PortfolioWebsite.Services
{
    public class EmailSettings
    {
        public string SmtpServer { get; set; }
        public int SmtpPort { get; set; }
        public string SenderEmail { get; set; }
        public string SenderPassword { get; set; }
        public string RecipientEmail { get; set; }
    }

    public interface IEmailService
    {
        Task SendContactEmailAsync(string name, string email, string message);
    }

    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendContactEmailAsync(string name, string email, string message)
        {
            try
            {
                using var client = new SmtpClient(_emailSettings.SmtpServer, _emailSettings.SmtpPort)
                {
                    Credentials = new NetworkCredential(_emailSettings.SenderEmail, _emailSettings.SenderPassword),
                    EnableSsl = true
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_emailSettings.SenderEmail, "Portfolio Contact Form"),
                    Subject = $"New Contact Form Message from {name}",
                    Body = $@"
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Message:</strong></p>
                        <p>{message}</p>
                        <hr>
                        <p><em>This message was sent from your portfolio website contact form.</em></p>
                    ",
                    IsBodyHtml = true
                };

                mailMessage.To.Add(_emailSettings.RecipientEmail);

                await client.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                // Log the error - in a real application, you'd want proper logging
                Console.WriteLine($"Email sending failed: {ex.Message}");
                throw;
            }
        }
    }
}