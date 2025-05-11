export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-[10%] left-[5%] w-24 h-24 border border-white/10 rotate-45 bg-white/5"></div>
      <div className="absolute top-[30%] right-[10%] w-32 h-32 border border-white/10 rotate-12 bg-white/5"></div>
      <div className="absolute bottom-[15%] left-[15%] w-20 h-20 border border-white/10 rotate-30 bg-white/5"></div>
      <div className="absolute top-[60%] right-[20%] w-16 h-16 border border-white/10 rotate-[60deg] bg-white/5"></div>

      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-blue/80"></div>
    </div>
  )
}
