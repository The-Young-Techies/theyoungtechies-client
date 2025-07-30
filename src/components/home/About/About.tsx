import { aboutContent } from "../../../utils/data";

export default function AboutUs() {
    const parts = aboutContent.title.split("brands");
    return (
        <section id="about" className=" px-6 sm:px-10 md:px-14 lg:px-16 mb-20 flex flex-col justify-center items-center md:justify-start md:items-start gap-10">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-center gap-3 md:gap-10">
                    <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start">
                        <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2 text-center">
                            About Us
                        </p>
                        <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight" >
                            {parts[0]}
                            <span className="text-[#3468E9]">brands</span>
                            {parts[1]}
                        </h2>
                    </div>
                    <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 text-center md:text-start ">
                        {aboutContent.description}
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="md:h-[400px] flex flex-col md:flex-row justify-center gap-6 w-full">
                {/* First section with full height */}
                <div
                    className={`h-full flex flex-col justify-end rounded-xl gap-1 lg:gap-2 leading-tight w-full ${aboutContent.sections[0].textColor} ${aboutContent.sections[0].bg} bg-no-repeat bg-left bg-cover p-4`}
                >
                    <h4 className="text-para sm:text-h6 font-bold capitalize">{aboutContent.sections[0].title}</h4>
                    <p className="text-body-small md:text-body">{aboutContent.sections[0].text}</p>
                </div>

                {/* Next two sections stacked vertically */}
                <div className="flex flex-col gap-6 w-full">
                    {aboutContent.sections.slice(1).map((section) => (
                        <div
                            key={section.id}
                            className={`h-[50%] ${section.bg} ${section.textColor} p-4 flex flex-col justify-end gap-1 lg:gap-2 rounded-xl leading-tight`}
                        >
                            <h4 className="text-para sm:text-h6 font-bold capitalize">{section.title}</h4>
                            <p className="text-body-small md:text-body text-gray-700">{section.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
