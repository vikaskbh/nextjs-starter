import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              About
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Learn more about this Next.js 15 starter project
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>What is this project?</h2>
          <p>
            This is a modern, full-featured Next.js 15 starter project designed to help you 
            build web applications quickly and efficiently. It includes all the latest 
            technologies and best practices for modern web development.
          </p>

          <h2>Key Technologies</h2>
          <ul>
            <li><strong>Next.js 15</strong> - The latest version with App Router and Server Components</li>
            <li><strong>TypeScript</strong> - Full type safety and better developer experience</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework with dark mode support</li>
            <li><strong>ESLint</strong> - Code quality and consistency</li>
            <li><strong>App Router</strong> - Next.js 13+ file-based routing system</li>
          </ul>

          <h2>Features</h2>
          <ul>
            <li>🚀 Fast development with hot reloading</li>
            <li>📱 Responsive design that works on all devices</li>
            <li>🌙 Dark mode support</li>
            <li>⚡ Optimized for performance</li>
            <li>🔍 SEO-friendly with metadata API</li>
            <li>🛠️ Type-safe development</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            To get started with this project, simply run the following commands:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <code>npm install
npm run dev</code>
          </pre>

          <h2>Customization</h2>
          <p>
            This starter is designed to be easily customizable. You can modify the styling, 
            add new components, and extend the functionality to suit your needs. Check out 
            the documentation for more information on customization options.
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/features" className="btn-secondary">
              View Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



