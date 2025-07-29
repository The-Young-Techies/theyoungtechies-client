import { serviceCarouselItems } from "../../utils/data";

export default function ServiceCarousel() {
  const repeatedItems = [...serviceCarouselItems, ...serviceCarouselItems]; 

  return (
    <div className="w-full bg-blue-600 overflow-hidden mb-20">
      <div className="animate-marquee whitespace-nowrap flex gap-10 text-white text-lg font-medium py-4 px-4">
        {repeatedItems.map((item, index) => (
          <span key={index} className="inline-block">
            {item}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
