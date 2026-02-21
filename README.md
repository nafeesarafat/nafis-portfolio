# Nafis Portfolio Website

A modern, responsive portfolio website built with ASP.NET Core MVC featuring interactive animations, contact form with email functionality, and professional design.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Nafis+Portfolio+Website)

## ✨ Features

- **Interactive Hero Section**: Animated gradient background with floating elements
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Contact Form**: Server-side validation with email notifications
- **Professional Styling**: Modern UI with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and efficient code

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## 🛠️ Technologies Used

- **Backend**: ASP.NET Core MVC (.NET 10.0)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5, Custom CSS Animations
- **Email**: SMTP Integration (Gmail)
- **Database**: SQLite (for future enhancements)
- **Deployment**: IIS/Windows Server

## 📋 Prerequisites

- .NET 10.0 SDK or later
- Visual Studio 2022 or VS Code
- Gmail account (for email functionality)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd PortfolioWebsite
```

### 2. Configure Email Settings

#### Option A: Environment Variables (Recommended for Production)
Create a `.env` file in the root directory:
```env
# Email Configuration
EmailSettings__SmtpServer=smtp.gmail.com
EmailSettings__SmtpPort=587
EmailSettings__SenderEmail=your-email@gmail.com
EmailSettings__SenderPassword=your-app-password
EmailSettings__RecipientEmail=your-email@gmail.com
```

#### Option B: Direct Configuration
Update `appsettings.json` (not recommended for production):
```json
{
  "EmailSettings": {
    "SmtpServer": "smtp.gmail.com",
    "SmtpPort": 587,
    "SenderEmail": "your-email@gmail.com",
    "SenderPassword": "your-app-password",
    "RecipientEmail": "your-email@gmail.com"
  }
}
```

### 3. Gmail Setup (Required for Email)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (custom name)"
   - Enter "Portfolio Website" as the name
   - Use the generated 16-character password

### 4. Run the Application
```bash
# Restore packages
dotnet restore

# Run in development mode
dotnet watch run

# Or build and run
dotnet build
dotnet run
```

### 5. Access the Website
Open your browser and navigate to: `http://localhost:5285`

## 📁 Project Structure

```
PortfolioWebsite/
├── Controllers/           # MVC Controllers
│   └── HomeController.cs
├── Models/               # Data Models
│   ├── ContactViewModel.cs
│   └── ErrorViewModel.cs
├── Services/             # Business Logic
│   └── EmailService.cs
├── Views/                # Razor Views
│   ├── Home/
│   │   ├── Index.cshtml
│   │   └── Privacy.cshtml
│   └── Shared/
│       └── _Layout.cshtml
├── wwwroot/              # Static Files
│   ├── css/
│   ├── js/
│   ├── images/
│   └── lib/              # Bootstrap, jQuery
├── .env                  # Environment Variables (not committed)
├── .gitignore           # Git Ignore Rules
├── appsettings.json     # Application Settings
├── Program.cs           # Application Entry Point
└── PortfolioWebsite.csproj
```

## 🎨 Customization

### Adding Your Information
1. **Profile Image**: Replace `wwwroot/images/nafis-profile.jpg`
2. **Personal Info**: Update content in `Views/Home/Index.cshtml`
3. **Projects**: Modify the projects section in the Index view
4. **Contact Info**: Update email and contact details

### Styling Changes
- Main styles: `wwwroot/css/site.css`
- Layout: `Views/Shared/_Layout.cshtml`
- Animations: CSS keyframes in `site.css`

## 📧 Email Configuration Details

The contact form sends professional HTML emails with:
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Name, Email, Message in formatted layout
- **From**: Portfolio Contact Form
- **To**: Your configured recipient email

## 🔒 Security Features

- **Environment Variables**: Sensitive data not in source code
- **Input Validation**: Server-side form validation
- **CSRF Protection**: Built-in ASP.NET Core security
- **HTTPS Ready**: Configured for secure connections

## 🚀 Deployment

### Windows Server/IIS
```bash
# Publish the application
dotnet publish --configuration Release --output ./publish

# Deploy to IIS
# Copy publish folder to web server
# Configure IIS site pointing to the folder
```

### Azure App Service
1. Create Azure App Service
2. Configure environment variables in Azure
3. Deploy via Git or ZIP upload

### Docker (Optional)
```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY ./publish .
ENTRYPOINT ["dotnet", "PortfolioWebsite.dll"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Nafis Arafat**
- Email: nafisarfat6@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

⭐ **Star this repo if you found it helpful!**

*Built with ❤️ using ASP.NET Core MVC*