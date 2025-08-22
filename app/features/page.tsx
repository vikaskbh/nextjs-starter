import Link from 'next/link'

const features = [
  {
    name: 'Next.js 15 App Router',
    description: 'Built with the latest Next.js 15 App Router for improved performance and developer experience.',
    icon: '⚡',
    category: 'Framework',
    details: [
      'Server Components for better performance',
      'App Router for simplified routing',
      'Built-in API routes',
      'Automatic code splitting',
      'Image optimization',
    ],
  },
  {
    name: 'TypeScript Support',
    description: 'Full TypeScript integration with strict type checking and excellent IntelliSense support.',
    icon: '🔷',
    category: 'Development',
    details: [
      'Strict TypeScript configuration',
      'Type-safe API routes',
      'Component prop types',
      'Path aliases (@/*)',
      'Automatic type generation',
    ],
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework with custom design system and dark mode support.',
    icon: '🎨',
    category: 'Styling',
    details: [
      'Custom color palette',
      'Dark mode support',
      'Responsive design utilities',
      'Custom component classes',
      'PurgeCSS optimization',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Features
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Everything you need to build modern web applications
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid - 3 Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {feature.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to start building?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              This starter template provides everything you need to create modern, scalable web applications.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link 
                href="https://nextjs.org/docs" 
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Start
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Install dependencies:</h4>
                <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm font-mono">
                  npm install
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Run the development server:</h4>
                <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm font-mono">
                  npm run dev
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Open your browser:</h4>
                <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm font-mono">
                  http://localhost:3000
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
