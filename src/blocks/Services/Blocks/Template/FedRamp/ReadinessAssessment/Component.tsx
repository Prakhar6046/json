import { Media } from '@/payload-types'
import Image from 'next/image'

type ReadinessAssessmentProps = {
  items: {
    icon: Media
    width: number
    height: number
    alt: string
    text: string
  }[]
  subtitle: string
  title: string
  paragraphs: { text: string }[]
}
type ReadinessAssessmentProp = ReadinessAssessmentProps

const ReadinessAssessmentSection = ({
  items,
  subtitle,
  title,
  paragraphs,
}: ReadinessAssessmentProp) => {
  return (
    <div className="bg-(--background)">
      <div className="container mx-auto px-4 py-8 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
          <div className="flex flex-col justify-center gap-5 md:order-1 order-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.06)]"
              >
                <div className="size-8">
                  <Image src={item.icon?.url || ''} width={item.width} height={item.height} alt={item.alt} />
                </div>
                <h4 className="font-medium text-xl">{item.text}</h4>
              </div>
            ))}
          </div>

          <div className="my-auto order-1 md:order-2">
            <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
              {subtitle}
            </h3>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
              {title}
            </h2>

            {paragraphs.map((para, idx) => (
              <p key={idx}>{para.text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadinessAssessmentSection
