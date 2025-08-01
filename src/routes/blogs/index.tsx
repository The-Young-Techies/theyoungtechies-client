// routes/blogs/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import React from 'react';

type Blog = {
  title: string;
  slug: string;
  summary: string;
  image: string
};

const blogs: Blog[] = [
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  // Add more blogs as needed
];

export const Route = createFileRoute('/blogs/')({
  component: BlogListPage,
});

function BlogListPage() {
  const [visibleBlogs, setVisibleBlogs] = React.useState<number>(9);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const showAllBlogs = () => setVisibleBlogs(filteredBlogs.length);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasMoreBlogs = visibleBlogs < filteredBlogs.length;

  return (
    <section className="bg-white text-black my-20 mt-10 px-6 sm:px-10 md:px-14 lg:px-16">
      <div className="container mx-auto flex justify-center gap-4 md:gap-10 items-center flex-col">
        <div className="text-center">
          <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold leading-tight">
            Our <span className="text-[#3468E9]">Blogs</span>
          </h2>
          <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 mt-4 max-w-4xl mx-auto">
            Dive into our latest articles and insights on technology, development, and digital strategy from The Young Techies.
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <div className="relative flex-1 w-full">
            <span className="absolute top-2.5 left-3 text-blue-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleBlogs(9);
              }}
              placeholder="Search blogs..."
              className="w-full rounded-lg border border-blue-100 pl-10 pr-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.slice(0, visibleBlogs).map((blog, i) => (
              <a
                href={`/blogs/${blog.slug}`}
                key={i}
                className="block w-full border rounded-lg shadow hover:shadow-md transition bg-white overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">{blog.summary}</p>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-gray-400 text-lg pt-16 pb-14 text-center">
              No blogs found matching your search.
            </div>
          )}
        </div>

        {hasMoreBlogs && filteredBlogs.length > 0 && (
          <button
            onClick={showAllBlogs}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View All Blogs
          </button>
        )}
      </div>
    </section>
  );
}
