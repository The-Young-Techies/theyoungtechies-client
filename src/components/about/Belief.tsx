import { aboutBelief } from "@/utils/data"

export default function Belief() {
  return (
    <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 py-20 flex flex-col gap-8 bg-blue-50 mb-20">
      <h3 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight text-center">The <span className='text-blue-500'>Beliefs</span> Behind Every Project</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutBelief.map((value, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm px-6 py-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <div className="mb-4">{value.icon}</div>
            <h4 className="font-semibold text-h6 mb-2">{value.title}</h4>
            <p className="text-gray-500 text-body">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}