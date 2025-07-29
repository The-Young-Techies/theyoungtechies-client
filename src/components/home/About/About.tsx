import { aboutContent } from "../../../utils/data";

export default function AboutUs() {
    return (
        <section id="about" className=" px-6 sm:px-10 md:px-14 lg:px-16 mb-20 flex flex-col justify-center items-center md:justify-start md:items-start gap-10">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-center gap-3 md:gap-10">
                    <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start">
                        <p className="text-sm uppercase text-gray-500 font-bold mb-1">about us</p>
                        <h2 className="text-h6 md:text-h5 xl:text-h4 font-bold capitalize">
                            {aboutContent.title}
                        </h2>
                    </div>
                    <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-center md:text-start text-gray-700">
                        {aboutContent.description}
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="md:h-[400px] flex flex-col md:flex-row justify-center gap-6 w-full">
                {/* First section with full height */}
                <div
                    className={`h-full flex flex-col justify-end rounded-xl gap-2 ${aboutContent.sections[0].textColor} ${aboutContent.sections[0].bg} bg-no-repeat bg-left bg-cover p-4`}
                >
                    <h4 className="text-2xl font-bold capitalize">{aboutContent.sections[0].title}</h4>
                    <p>{aboutContent.sections[0].text}</p>
                </div>

                {/* Next two sections stacked vertically */}
                <div className="flex flex-col gap-6 w-full">
                    {aboutContent.sections.slice(1).map((section) => (
                        <div
                            key={section.id}
                            className={`h-[50%] ${section.bg} ${section.textColor} p-4 flex flex-col justify-end gap-2 rounded-xl`}
                        >
                            <h4 className="text-2xl font-bold capitalize">{section.title}</h4>
                            <p>{section.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
