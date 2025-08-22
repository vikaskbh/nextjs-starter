export default function HomePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome</h1>
        <p className="mt-4 text-muted-foreground">
          This starter is now wired with shadcn/ui styles and a Button component.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/features"
          >
            Explore Features
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/dashboard"
          >
            Go to Dashboard
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/components"
          >
            Components Demo
          </a>
        </div>
      </div>
    </div>
  )
}


