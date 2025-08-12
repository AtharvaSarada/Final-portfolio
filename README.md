# 🚀 Personal Portfolio Website

A modern, responsive, and creative portfolio website built with HTML, CSS, and JavaScript. This multi-page portfolio showcases your skills, projects, education, and provides a professional way for potential clients or employers to learn about you.

## ✨ Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Multi-Page Structure**: Organized sections for better user experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Project filtering, skill bars, FAQ accordion
- **Contact Form**: Professional contact form with validation
- **Dark Theme**: Optional dark mode toggle
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Smooth animations and lazy loading

## 📁 File Structure

```
portfolio/
├── index.html          # Home/Landing page
├── about.html          # About me page
├── skills.html         # Skills and expertise page
├── projects.html       # Portfolio projects page
├── education.html      # Education and certifications page
├── contact.html        # Contact information and form page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS (for customization)
- Text editor (VS Code, Sublime Text, etc.)

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start customizing the content!

### Local Development
1. Open the project folder in your code editor
2. Make changes to the HTML, CSS, or JavaScript files
3. Refresh your browser to see changes
4. Use a local server for better development experience

## 🎨 Customization Guide

### 1. Personal Information
Update the following files with your personal details:

#### `index.html`
- Change "Your Name" to your actual name
- Update the hero description
- Modify the stats numbers
- Update social media links

#### `about.html`
- Replace placeholder text with your personal story
- Update contact information
- Modify interests and hobbies
- Change profile details

#### `skills.html`
- Adjust skill percentages based on your expertise
- Add/remove programming languages
- Update soft skills
- Modify skill categories

#### `projects.html`
- Replace sample projects with your actual projects
- Update project descriptions and technologies
- Add real project images
- Update project links

#### `education.html`
- Replace with your actual education history
- Update certifications
- Add your online courses
- Modify language proficiency

#### `contact.html`
- Update contact information
- Modify availability schedule
- Update social media links
- Customize FAQ content

### 2. Styling Customization

#### Colors
The main color scheme is defined in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1d4ed8;   /* Darker blue */
    --accent-color: #fbbf24;      /* Yellow accent */
    --text-color: #333;           /* Main text color */
    --light-bg: #f8fafc;         /* Light background */
}
```

#### Typography
The website uses the Inter font family. You can change this in `styles.css`:
```css
body {
    font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 3. Adding Real Images
Replace placeholder icons with real images:

```html
<!-- Instead of this: -->
<div class="hero-avatar">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Use this: -->
<div class="hero-avatar">
    <img src="path/to/your/photo.jpg" alt="Your Name">
</div>
```

### 4. Adding Real Projects
Update the projects section with your actual work:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="path/to/project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="live-demo-url" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="github-url" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. You can customize the domain name

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first navigation
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Proper viewport meta tags

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🚀 Performance Features

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minimal external dependencies
- Efficient CSS and JavaScript

## 🎨 Additional Features

### Dark Theme
Click the moon/sun icon in the top-right corner to toggle dark mode.

### Animations
- Smooth scroll behavior
- Fade-in effects
- Skill bar animations
- Counter animations
- Parallax effects

### Interactive Elements
- Project filtering by category
- FAQ accordion
- Contact form validation
- Mobile navigation
- Smooth transitions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

## 🎉 Credits

- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Design Inspiration**: Modern web design principles and best practices

---

**Happy coding! 🎨✨**

Remember to replace all placeholder content with your actual information and add your real projects and images to make this portfolio truly yours!
