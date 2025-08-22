# Next.js 15 Starter

A modern, full-featured Next.js 15 starter project with TypeScript, Tailwind CSS, and a beautiful design system.

## 🚀 Live Demo

Check out the deployed starter on Vercel:  
[https://nextjs-starter-three-beryl.vercel.app/](https://nextjs-starter-three-beryl.vercel.app/)


## ✨ Features

- **Next.js 15** - Latest version with App Router and Server Components
- **TypeScript** - Full TypeScript support with strict configuration
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **Modern Design** - Beautiful, responsive UI with custom components
- **SEO Optimized** - Built-in metadata API and search engine optimization
- **Performance** - Optimized for speed with automatic code splitting
- **Developer Experience** - ESLint, Prettier, and hot reloading

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # App Router directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── features/          # Features page
│       └── page.tsx
├── public/                # Static assets
├── components/            # Reusable components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
The project uses Tailwind CSS with a custom design system. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component styles using Tailwind classes

### Components
Create reusable components in the `components/` directory:

```tsx
// components/Button.tsx
export function Button({ children, ...props }) {
  return (
    <button className="btn-primary" {...props}>
      {children}
    </button>
  )
}
```

### Pages
Add new pages in the `app/` directory following the App Router convention:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  )
}
```

## 🔧 Configuration

### Next.js
Configure Next.js in `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Add your custom configuration here
}

module.exports = nextConfig
```

### TypeScript
TypeScript is configured with strict mode enabled. Configure in `tsconfig.json`.

### Tailwind CSS
Customize Tailwind in `tailwind.config.js`:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add your custom theme here
    },
  },
  plugins: [],
}
```

## 📱 Responsive Design

The project is built with a mobile-first approach and includes:

- Responsive navigation
- Flexible grid layouts
- Touch-friendly interfaces
- Optimized typography

## 🌙 Dark Mode

Dark mode is supported out of the box with:

- Automatic system preference detection
- Manual toggle capability
- Consistent theming across components

## 🚀 Deployment

### Vercel (Recommended)
Deploy to Vercel with zero configuration:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:

```bash
npm run build
npm run start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js 15 and Tailwind CSS



