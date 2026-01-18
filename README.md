# Casey Pek - Portfolio Website

A modern, responsive portfolio website showcasing my web development projects and skills.

## 🚀 Features

- **Modern Design**: Vibrant gradients, glassmorphism effects, and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Dynamic Projects**: Easily update projects through JavaScript data
- **Interactive UI**: Smooth scrolling, hover effects, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Lazy loading, intersection observers, and optimized assets

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: ES6+, DOM manipulation, async/await
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## 📁 Project Structure

```
Application/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images, CV, and other assets
│   └── cv.pdf         # Your resume (add your own)
└── README.md          # This file
```

## 🎨 Customization

### Update Your Information

1. **Personal Details**: Edit the text content in `index.html`
2. **Projects**: Modify the `projectsData` array in `script.js`
3. **Colors**: Adjust CSS custom properties in `styles.css` (`:root` section)
4. **Resume**: Replace `assets/cv.pdf` with your own CV

### Add New Projects

Edit the `projectsData` array in `script.js`:

```javascript
{
    title: "Your Project Name",
    category: "Category",
    description: "Project description...",
    image: null, // or "path/to/image.jpg"
    tags: ["Tag1", "Tag2", "Tag3"],
    year: "2025",
    duration: "X weeks",
    links: {
        live: "https://your-live-site.com",
        github: "https://github.com/yourusername/repo"
    }
}
```

### Integrate with Your GitHub Auto-Updater

Based on your previous work with the GitHub webhook server, you can integrate dynamic projects:

1. Update the `loadProjects()` function in `script.js`
2. Uncomment the fetch code and add your Render server URL:

```javascript
const response = await fetch('YOUR_RENDER_SERVER_URL/projects.json');
const data = await response.json();
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and your site will be live!

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. Go to Settings → Pages → Select main branch → Save

### Option 4: Manual Hosting

Upload all files to any web hosting service (Hostinger, Bluehost, etc.) via FTP.

## 🎯 Quick Start (Local Development)

1. Clone or download this repository
2. Open `index.html` in your browser
3. Or use a local server:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```

   **Using Node.js:**
   ```bash
   npx http-server
   ```

   **Using VS Code:**
   Install "Live Server" extension and click "Go Live"

## 📝 To-Do Before Deployment

- [ ] Add your own CV to `assets/cv.pdf`
- [ ] Update all personal information (name, email, phone, etc.)
- [ ] Add your actual project data
- [ ] Update social media links
- [ ] Add your own images for projects
- [ ] Test on multiple devices and browsers
- [ ] Set up contact form backend (optional)

## 🔗 Connect with Me

- **Email**: Pek.casey@gmail.com
- **Phone**: +65 8787 2335
- **GitHub**: [github.com/casey-pek](https://github.com/casey-pek)
- **LinkedIn**: [linkedin.com/in/casey-pek](https://www.linkedin.com/in/casey-pek)

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

---

Built with ❤️ by Casey Pek
