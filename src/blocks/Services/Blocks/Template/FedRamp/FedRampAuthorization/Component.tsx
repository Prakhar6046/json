import { Media } from '@/payload-types'
import Image from 'next/image'

type AuthorizationMonitoringProps = {
  authorization: {
    subtitle: string
    title: string
    paragraphs: { text: string; bold?: boolean }[]
    listItems: { text: string; icon?: Media }[]
    image: Media
  }
  monitoring: {
    subtitle: string
    title: string
    description: string
    listItems: { text: string; icon?: Media }[]
    image: Media
  }
}
type AuthorizationMonitoringProp = AuthorizationMonitoringProps

const AuthorizationMonitoringSection = ({
  authorization,
  monitoring,
}: AuthorizationMonitoringProp) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
      {/* Authorization Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
        <div className="my-auto order-2 md:order-1">
          <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
            {authorization.subtitle}
          </h3>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
            {authorization.title}
          </h2>

          {authorization.paragraphs.map((para, idx) => (
            <p key={idx} className={para.bold ? 'font-bold text-lg sm:text-xl my-3' : ''}>
              {para.text}
            </p>
          ))}

          <ul className="flex flex-col gap-3 mt-5">
            {authorization.listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Image
                  src={item.icon?.url || ''}
                  width={22}
                  height={22}
                  alt="Check Circle"
                  className="mt-[1px]"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src={authorization.image?.url || ''}
            width={590}
            height={365}
            alt={authorization.title}
            className="rounded-[14px] object-cover w-full mx-auto h-full"
          />
        </div>
      </div>

      {/* Continuous Monitoring Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-10 sm:mt-20">
        <div>
          <Image
            src={monitoring.image?.url || ''}
            width={590}
            height={365}
            alt={monitoring.title}
            className="rounded-[14px] object-cover w-full mx-auto h-full"
          />
        </div>

        <div className="my-auto">
          <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
            {monitoring.subtitle}
          </h3>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
            {monitoring.title}
          </h2>

          <p className="font-bold text-lg sm:text-xl my-3">{monitoring.description}</p>

          <ul className="flex flex-col gap-3 mt-5">
            {monitoring.listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Image
                  src={item.icon?.url || ''}
                  width={22}
                  height={22}
                  alt="Check Circle"
                  className="mt-[1px]"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AuthorizationMonitoringSection
