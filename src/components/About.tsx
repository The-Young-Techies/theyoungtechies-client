export default function AboutUs() {
    return (
        <section className="p-20 flex flex-col justify-start items-start gap-10">
            <div className="flex justify-between items-center gap-20">
                <div className="flex flex-col justify-start items-start">
            <p className="text-sm uppercase text-gray-500 font-bold mb-1">about us</p>
                    <h2 className="text-3xl font-bold capitalize">Helping brands grow with design, tech, and marketing that works.</h2>
                    <button className="text-white text-base mt-5 border border-blue-600 bg-blue-600 py-2 px-6 rounded-xl capitalize">get started</button>
                </div>
                <p className="text-lg text-gray-700">
                    We’re a creative agency focused on building standout digital experiences. From intuitive UI/UX and custom web applications to e-commerce platforms, SEO, and social media marketing—we bring ideas to life and help businesses grow online.
                </p>
            </div>
            <div className="h-[400px] flex justify-center gap-6">
                <div className="h-full flex flex-col justify-end rounded-xl gap-2 text-white bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent),url('/images/our-story.jpg')] bg-no-repeat bg-left bg-cover p-4">
                    <h4 className="text-2xl font-bold capitalize">our story</h4>
                    <p>We started with a simple goal: to create meaningful digital work that blends design, technology, and marketing. Since day one, we've been focused on building things that not only look good but actually help businesses grow.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="h-[50%] bg-amber-100 p-4 flex flex-col justify-end gap-2 rounded-xl">
                        <h4 className="text-2xl font-bold capitalize">our vision</h4>
                        <p>To become a trusted creative and tech partner for businesses looking to stand out online—by always pushing for better ideas, better execution, and better results.</p>
                    </div>
                      <div className="h-[50%] bg-purple-200 p-4 flex flex-col justify-end gap-2 rounded-xl">
                        <h4 className="text-2xl font-bold capitalize">our mission</h4>
                        <p>To help brands turn ideas into digital realities—through thoughtful design, clean code, and smart marketing. We aim to deliver work that’s creative, functional, and results-driven.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
