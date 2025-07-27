export default function ServiceCarousel() {
  return (
    <div className="w-full bg-blue-600 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-10 text-white text-lg font-medium py-4 px-4">
        {[
          "Talk to Us",
          "*",
          "Web Design",
          "*",
          "Web Development",
          "*",
          "UI/UX Design",
          "*",
          "Social Media Marketing",
        ]
          .concat([
            "Talk to Us",
            "*",
            "Web Design",
            "*",
            "Web Development",
            "*",
            "UI/UX Design",
            "*",
            "Social Media Marketing",
          ]) 
          .map((item, index) => (
            <span key={index} className="inline-block">
              {item}
            </span>
          ))}
      </div>

      {/* Add this style in the same file OR in your global CSS */}
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
