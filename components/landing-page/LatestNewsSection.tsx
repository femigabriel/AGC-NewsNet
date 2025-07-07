// components/LatestNewsSection.tsx
import Image from "next/image"

export default function LatestNewsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">LATEST NEWS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={`/news/latest${i + 1}.jpg`}
              alt={`Latest ${i}`}
              width={400}
              height={250}
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-red-600 mb-1">Entertainment</p>
              <p className="text-sm font-semibold">
                Example headline for latest news item goes here
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
