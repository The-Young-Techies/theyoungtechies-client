// routes/blogs/$slug.tsx
import { services, socialLinks } from '@/utils/data'
import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircleIcon, Quote } from 'lucide-react'

type Blog = {
    title: string
    content: string
    head1: string
    description: string
    description2: string[]
    head2: string
    head3: string
    list: string[]
    tags: string[]
}

const blogData: Record<string, Blog> = {
    'best-web-development-services-in-burari': {
        title: 'Best Web Development Services in Burari - The Young Techies',
        content:
            "When it comes to building a strong digital presence, your website is everything. It's your first impression, your 24/7 salesperson, and the backbone of your brand online. If you're a business or startup in Burari looking for professional, reliable, and modern web development, The Young Techies is the name to trust.",
        head1: "Who We Are",
        description: "At The Young Techies, we’re not just another agency. We’re a team of passionate developers and designers based right here in Burari, helping local businesses go digital the right way. We combine technical skill with creative thinking to build websites that actually work—fast, responsive, and optimized for real-world results.",
        head2: "What We Offer",
        list: [
            "We design visually compelling websites that align with your brand identity and business goals, ensuring a strong first impression.",
            "From intuitive user interfaces to robust backend systems, we deliver complete development solutions tailored to your requirements.",
            "We build secure, scalable online stores with integrated payment systems, product management, and user-friendly navigation.",
            "Every website is optimized for seamless performance on desktops, tablets, and smartphones to ensure a consistent user experience.",
            "We fine-tune your website for speed and efficiency, reducing load times and improving overall functionality.",

        ],
        head3: "Who We Work With",
        description2: [
            "Whether you’re a small business, a growing startup, or even a solo creator—if you’ve got a vision, we can build it.", "We’ve already worked with local institutes, retail stores, fitness brands, and freelancers in Burari, Sant Nagar, and nearby areas."
        ],
        tags: ['websites', 'web development', 'frontend', 'backend']
    },
}

export const Route = createFileRoute('/blogs/$slug')({
    component: BlogDetailPage,
})

function BlogDetailPage() {
    const { slug } = Route.useParams()

    const blog = blogData[slug]

    if (!blog) {
        return <div className="p-10 text-red-600">404: Blog not found.</div>
    }

    return (
        <div>
            <header className={`w-full h-[60vh] relative  flex justify-center items-center m-auto text-center bg-[url('/images/blogs/web-agency.jpg')] bg-no-repeat bg-left bg-cover`}>
                <div className="absolute h-[100%] inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
                <div className='relative z-10'>
                        <h1 className='text-white text-h2 font-bold leading-tight w-[70%] m-auto'>{blog.title}</h1>
                </div>
            </header>
            <div className='px-10 my-10 flex justify-between gap-10 '>
                <div className='w-fit flex flex-col justify-start items-start gap-8 border border-gray-200 rounded-xl shadow-md px-8 py-8'>
                    <p className='text-lg text-gray-600'>{blog.content}</p>
                    <img src="/images/header/home-header.jpg" alt="" className='w-[100%]' />
                    <span className='flex flex-col gap-2'>
                        <h3 className='text-h4 leading-tight font-semibold'>
                            {blog.head1}
                        </h3>
                        <p className='text-lg text-gray-600'>{blog.description}</p>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <h3 className='text-h4 leading-tight font-semibold'>
                            {blog.head3}
                        </h3>
                        {
                            blog.description2.map((value, index) => (
                                <p key={index} className='text-lg text-gray-600'>{value}</p>
                            ))
                        }
                    </span>
                    <div className='flex justify-start items-start gap-5 border border-blue-300 rounded-xl p-6 bg-blue-50'>
                        <Quote color='#000' />
                        <span className='flex flex-col gap-2'>
                            <p className='text-para font-semibold text-blue-600'>Websites promote you 24/7: No employee will do that.</p>
                            <p className='text-gray-500 font-bold text-sm'>— Paul Cookson</p>
                        </span>
                    </div>
                    <span className='flex flex-col gap-6'>
                        <h3 className='text-h4 leading-tight font-semibold'>{blog.head2}</h3>
                        <span className='flex justify-start items-center gap-8'>
                            <img src="/images/blogs/blog-about.jpg" alt="" className='w-[45%] border border-gray-200 rounded shadow-md' />
                            <img src="/images/blogs/blog-about2.jpg" alt="" className='w-[45%] border border-gray-200 rounded shadow-md' />
                        </span>
                        <ul className='flex flex-col gap-3'>
                            {
                                blog.list.map((value, index) => (
                                    <li key={index} className='flex justify-start items-start gap-3 text-lg text-gray-600'>
                                        <CheckCircleIcon color='#3468E9' className='shrink-0' />
                                        {value}
                                    </li>
                                ))
                            }
                        </ul>
                    </span>
                    <hr className='w-full text-gray-400' />
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-h4 capitalize leading-tight'>share</h3>
                        <span className='flex justify-start items-start gap-5'>
                            {
                                socialLinks.map((value, index) => (
                                    <Link key={index} to={value.path}>
                                        <img src={value.icon} alt="" className='w-8 rounded' />
                                    </Link>
                                ))
                            }
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='w-fit h-fit flex flex-col gap-6 justify-start items-start border border-gray-200 rounded-xl shadow-md px-8 py-8'>
                        <h3 className='font-semibold text-h5 capitalize leading-tight'>tags</h3>
                        <span className='flex flex-wrap gap-3'>
                            {
                                blog.tags.map((value, index) => (
                                    <p className='text-base text-gray-600 border border-blue-500 rounded p-2 hover:bg-blue-50 transition-all cursor-pointer capitalize' key={index}>{value}</p>
                                ))
                            }
                        </span>
                    </div>
                    <div className="relative w-full h-[30vh] bg-[url('/images/blogs/contact-pop.jpg')] bg-no-repeat bg-left bg-cover rounded-lg">
                        <div className="absolute h-[100%] inset-0 bg-gradient-to-b from-black/30 to-black/30 rounded-lg"></div>
                        <span className='relative z-10 flex flex-col justify-center items-start gap-3 text-start  m-5'>
                            <h3 className='text-white text-h5 font-bold capitalize leading-tight'>Need a website that works?</h3>
                            <button className='bg-amber-50 p-2 w-fit rounded text-body capitalize font-semibold'>
                                get in touch
                            </button>
                        </span>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-6 justify-start items-start border border-gray-200 rounded-xl shadow-md px-8 py-8'>
                        <h3 className='capitalize text-h5 font-semibold'>main services</h3>
                        <ul className='flex flex-col gap-5 '>
                            {
                                services.map((value, index) => (
                                    <span key={index} className='flex flex-col gap-3 group cursor-pointer '>
                                        <li className='group-hover:text-blue-500 transition-all text-lg text-gray-600 ' >{value.title}</li>
                                        {index !== services.length - 1 && (
                                            <hr className='text-gray-300 group-hover:text-blue-500 transition-all w-full' />
                                        )}                                    </span>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
