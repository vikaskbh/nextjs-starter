"use client"

import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Welcome to your protected dashboard
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="btn-secondary">
                Home
              </Link>
              <button 
                onClick={() => {
                  // Clear the session cookie
                  document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                  window.location.href = '/login'
                }}
                className="btn-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              1,234
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              +12% from last month
            </p>
          </div>

          {/* Stats Card */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              $45,678
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              +8% from last month
            </p>
          </div>

          {/* Stats Card */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Active Sessions
            </h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              567
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Currently online
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  New user registration: john.doe@example.com
                </span>
                <span className="text-sm text-gray-500">2 minutes ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Payment received: $299.99
                </span>
                <span className="text-sm text-gray-500">15 minutes ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  System maintenance completed
                </span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-medium text-gray-900 dark:text-white">Manage Users</div>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-gray-900 dark:text-white">View Reports</div>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-medium text-gray-900 dark:text-white">Settings</div>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-medium text-gray-900 dark:text-white">Messages</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

