# Joel Ewaldo - Portfolio

🚀 **Live Site**: [www.jewaldo.dev](https://www.jewaldo.dev/)

A modern, responsive portfolio website showcasing my work as a Full Stack Software Engineer. Built with cutting-edge technologies and featuring stunning 3D visuals, glass morphism design, and comprehensive SEO optimization.

![Portfolio Preview](https://www.jewaldo.dev/assets/extra/pfp.jpg)

## ✨ Features

### 🎮 Interactive 3D Background

- **Three.js Integration**: Immersive 3D geometric object with particle system
- **Scroll-Based Animation**: Object rotates and scales based on user scroll position
- **Performance Optimized**: Smooth 60fps animations with hardware acceleration
- **Subtle & Professional**: Non-intrusive background that enhances the experience

### 🎨 Modern Glass Morphism Design

- **Backdrop Blur Effects**: Semi-transparent containers with glass-like appearance
- **Dynamic Hover States**: Interactive elements with smooth color transitions
- **Gradient Accents**: Blue-to-purple gradients throughout the design
- **Professional Polish**: Multi-layer depth effects and shadows

### 📱 Fully Responsive Design

- **Mobile-First Approach**: Optimized layouts for all screen sizes
- **Touch-Friendly**: Proper spacing and sizing for mobile interaction
- **Adaptive Layouts**: Content reorganizes intelligently across devices
- **Cross-Browser Compatible**: Tested on all major browsers

### 🔍 Advanced SEO Optimization

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for rich search results
- **Sitemap & Robots.txt**: Proper search engine crawling configuration
- **Performance Optimized**: Fast loading with optimized assets

### 🎯 Content Sections

- **Experience**: Research work at UCI Language and Learning Analytics Lab
- **Freelancing**: Client projects including Snowbliss Cafe
- **Startups**: Co-founding and development work (Typo, Statpass)
- **Projects**: Personal projects showcasing technical skills

### 🖼️ Enhanced Image Galleries

- **Modern Carousels**: Glass-container image galleries with hover effects
- **Touch Gestures**: Swipeable on mobile devices
- **Image Counter**: Visual indicators showing number of images
- **Zoom Effects**: Subtle hover animations for better engagement

## 🛠️ Technologies Used

### Frontend

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### 3D Graphics

- **Three.js** - WebGL 3D graphics library
- **Custom Shaders** - Optimized rendering and effects

### UI Components

- **React Multi Carousel** - Touch-enabled image carousels
- **React Icons** - Scalable vector icons
- **Custom Glass Components** - Handcrafted morphism effects

### Development Tools

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **Bun** - Fast package manager and runtime

### Deployment & SEO

- **Vercel** - Serverless deployment platform
- **Custom Domain** - Professional branding
- **Web Manifest** - PWA support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/joelewaldo/code-portfolio.git
   cd code-portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
# Build the project
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
code-portfolio/
├── public/
│   ├── assets/          # Images and media files
│   │   ├── favicon.svg      # Custom "J" favicon
│   │   ├── manifest.json    # PWA manifest
│   │   ├── robots.txt       # SEO crawling rules
│   │   └── sitemap.xml      # Search engine sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Profile.tsx      # About section
│   │   │   ├── Showcase.tsx     # Project galleries
│   │   │   ├── Section.tsx      # Reusable section wrapper
│   │   │   └── ThreeBackground.tsx  # 3D background
│   │   ├── data/
│   │   │   └── profileData.ts   # Portfolio content data
│   │   ├── App.tsx          # Main application component
│   │   └── main.tsx         # Application entry point
│   ├── index.html           # HTML template with SEO meta tags
│   ├── package.json         # Dependencies and scripts
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── vite.config.ts       # Vite build configuration
├── README.md
└── LICENSE
```

## 🎨 Design System

### Colors

- **Primary**: Blue (`#3b82f6`)
- **Secondary**: Purple (`#8b5cf6`)
- **Background**: Dark Gray (`#1e293b`)
- **Text**: White with gray variants
- **Glass**: Semi-transparent overlays with backdrop blur

### Typography

- **Headings**: Bold, clean sans-serif
- **Body**: Readable font sizes with proper line height
- **Responsive**: Scales appropriately on all devices

## 📊 Performance Features

- **Lazy Loading**: Images load as needed
- **Code Splitting**: Optimized bundle sizes
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and assets
- **CDN Delivery**: Fast global content delivery via Vercel

## 🔧 Customization

### Adding New Projects

1. Add project data to `src/data/profileData.ts`
2. Include images in `public/assets/`
3. Follow the existing data structure

### Updating Content

- **Personal Info**: Edit `profileData.ts`
- **Styling**: Modify Tailwind classes
- **3D Effects**: Adjust `ThreeBackground.tsx` parameters

## 🌐 Deployment

The portfolio is deployed on **Vercel** with automatic deployments from the main branch.

### Manual Deployment

1. Connect repository to Vercel
2. Configure custom domain
3. Push to main branch for automatic deployment

## 📈 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Rich snippets for search results
- **Performance**: Optimized Core Web Vitals
- **Mobile-First**: Google mobile-friendly design
- **Fast Loading**: Sub-second initial load times

## 📧 Contact

**Joel Ewaldo**

- Website: [www.jewaldo.dev](https://www.jewaldo.dev/)
- Email: jewaldo03@gmail.com
- GitHub: [@joelewaldo](https://github.com/joelewaldo)
- LinkedIn: [joel-ewaldo-291523201](https://linkedin.com/in/joel-ewaldo-291523201)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Joel Ewaldo**
