// routes/blogs/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

type Blog = {
  title: string
  slug: string
  summary: string
}

const blogs: Blog[] = [
  { title: 'Best Web Development Services in Burari - The Young Techies', slug: 'best-web-development-services-in-burari', summary: 'lorem ipsum' },
]

export const Route = createFileRoute('/blogs/')({
  component: BlogListPage,
})

function BlogListPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            to="/blogs/$slug"
            params={{ slug: blog.slug }}
            className="block p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
