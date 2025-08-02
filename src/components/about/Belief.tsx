import { Award, Lightbulb, Target, Users } from "lucide-react"

export default function Belief() {
    const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in every project.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      desc: "We partner closely with our clients for shared success.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      desc: "We embrace new technologies and creative thinking.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Focus",
      desc: "Your business goals drive every strategy and solution.",
    },
  ]
  return (
    <section className="w-full px-16     py-20 flex flex-col gap-8 bg-blue-50 mb-20">
      <h3 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight text-center">The <span className='text-blue-500'>Beliefs</span> Behind Every Project</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, i) => (
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