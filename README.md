# Nafis Portfolio Website

A modern, responsive portfolio website built with ASP.NET Core MVC featuring interactive animations, contact form with email functionality, and professional design.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Nafis+Portfolio+Website)

## ✨ Features

- **Multi-Page Architecture**: Separate pages for Home, About, Skills, Projects, and Contact
- **Interactive Hero Section**: Animated gradient background with floating elements
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Contact Form**: Server-side validation with email notifications
- **Professional Styling**: Modern UI with smooth animations
- **Skills Showcase**: Interactive progress bars and certification timeline
- **Project Portfolio**: Detailed project cards with technology badges
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

## � Quick Start Commands

### Prerequisites
- .NET 10.0 SDK or later
- Visual Studio 2022 or VS Code
- Gmail account (for email functionality)

### 1. Clone and Navigate
```bash
git clone https://github.com/nafeesarafat/nafis-portfolio.git
cd PortfolioWebsite
```

### 2. Setup Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env file with your Gmail credentials
# EmailSettings__SenderEmail=your-email@gmail.com
# EmailSettings__SenderPassword=your-app-password
# EmailSettings__RecipientEmail=your-email@gmail.com
```

### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate app password for "Portfolio Website"
4. Use the 16-character password in `.env` file

### 4. Run the Application
```bash
# Option 1: Development mode with hot reload (Recommended)
dotnet watch run

# Option 2: Standard run
dotnet run

# Option 3: Build and run
dotnet build
dotnet run
```

### 5. Access the Website
Open browser: `http://localhost:5285`

## 🔧 Additional Commands

### Package Management
```bash
# Restore NuGet packages
dotnet restore

# Add new package
dotnet add package PackageName

# List installed packages
dotnet list package
```

### Build Commands
```bash
# Debug build
dotnet build

# Release build
dotnet build --configuration Release

# Clean build artifacts
dotnet clean
```

### Testing (if tests are added)
```bash
# Run tests
dotnet test

# Run tests with coverage
dotnet test --collect:"XPlat Code Coverage"
```

### Publishing
```bash
# Publish for deployment
dotnet publish --configuration Release --output ./publish

# Self-contained publish (includes runtime)
dotnet publish --configuration Release --runtime win-x64 --self-contained true --output ./publish
```

### Database (for future enhancements)
```bash
# Create migration (if using EF Core)
dotnet ef migrations add InitialCreate

# Update database
dotnet ef database update
```

## 📁 Project Structure

```
PortfolioWebsite/
├── Controllers/           # MVC Controllers
│   └── HomeController.cs  # Handles all page routes
├── Models/               # Data Models
│   ├── ContactViewModel.cs
│   └── ErrorViewModel.cs
├── Services/             # Business Logic
│   └── EmailService.cs   # SMTP email service
├── Views/                # Razor Views
│   ├── Home/
│   │   ├── Index.cshtml      # Landing page
│   │   ├── About.cshtml      # About page
│   │   ├── Skills.cshtml     # Skills showcase
│   │   ├── Projects.cshtml   # Project portfolio
│   │   ├── Contact.cshtml    # Contact form page
│   │   └── Privacy.cshtml
│   └── Shared/
│       ├── _Layout.cshtml    # Main layout with navigation
│       └── _ValidationScriptsPartial.cshtml
├── wwwroot/              # Static Files
│   ├── css/
│   │   └── site.css      # Custom styles & animations
│   ├── js/
│   │   └── site.js       # Custom JavaScript
│   ├── images/           # Profile and project images
│   └── lib/              # Bootstrap, jQuery libraries
├── .env                  # Environment Variables (not committed)
├── .env.example          # Environment template
├── .gitignore           # Git ignore rules
├── appsettings.json     # Application settings
├── Program.cs           # Application entry point
└── PortfolioWebsite.csproj  # Project configuration
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