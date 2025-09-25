import { Media } from '@/payload-types';
import Image from 'next/image'

type WhyChooseWCGProps = {
  heading: string
  items: { image: Media; alt: string; title: string; description: string }[]
}
type WhyChooseWCGProp = WhyChooseWCGProps

const WhyChooseWCGSection = ({ heading, items }: WhyChooseWCGProp) => {
  return (
    <section className="bg-(--background)">
      <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
        <div className="text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.2em]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
          {items.map((item, idx) => (
            <div key={idx}>
              <Image src={item.image?.url || ""} width={64} height={64} alt={item.alt} />
              <h3 className="font-bold text-xl my-3.5">{item.title}</h3>
              <p>{item.description || ''}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseWCGSection
