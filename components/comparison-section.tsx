import Image from "next/image"
import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 rounded-lg overflow-hidden">
      <div className="bg-red-600/20 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Without Us</h3>
        <div className="relative h-[250px] w-full mb-6 rounded-lg overflow-hidden">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEoPKR4vZ_N6Jq9c0NUm92tFUBqXwwR6ivw&s" alt="Without The Young Techies" fill className="object-cover" />
        </div>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Website crashes and frequent downtime</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Inconsistent fonts and broken layouts</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Slow loading times and poor performance</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Broken links and navigation issues</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Poor mobile experience and responsiveness</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span>Vulnerable to security threats</span>
          </li>
        </ul>
      </div>
      <div className="bg-green-600/20 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">With Us</h3>
        <div className="relative h-[250px] w-full mb-6 rounded-lg overflow-hidden">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqurztBxb6GA9we6WyJHAI7bWZwUVdZlwMA&s" alt="With The Young Techies" fill className="object-cover" />
        </div>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>High-quality, reliable website with 99.9% uptime</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>Consistent, professional design and typography</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>Blazing-fast load times and optimized performance</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>Intuitive navigation and seamless user experience</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>Fully responsive design that works on all devices</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>Enhanced security and regular maintenance</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
