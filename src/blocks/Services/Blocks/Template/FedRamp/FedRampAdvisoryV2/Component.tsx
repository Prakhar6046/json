import Image from 'next/image'

// add types for props
type ConsultingListSectionProps = {
  description: string
  listItems: { text: string; icon?: string }[]
  imageSrc: string
  imageAlt: string
}

const FedRampAdvisoryV2 = ({
  description,
  listItems,
  imageSrc,
  imageAlt,
}: ConsultingListSectionProps) => {
  console.log("imageSrc", imageSrc)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-4 md:mt-20">
      <div className="my-auto">
        <p className="font-bold text-lg sm:text-xl mb-3">{description}</p>

        <ul className="flex flex-col gap-3 mt-5">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Image
                src={item.icon || '/new-images/prime_check-circle.svg'}
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

      <div>
        <Image
          src={imageSrc}
          width={590}
          height={365}
          alt={imageAlt}
          className="rounded-[14px] object-cover w-full mx-auto h-full"
        />
      </div>
    </div>
  )
}

export default FedRampAdvisoryV2
