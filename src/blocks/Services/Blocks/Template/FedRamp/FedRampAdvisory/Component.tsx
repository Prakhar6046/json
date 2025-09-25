import Image from 'next/image'

// add the type for the props
type FedRampAdvisoryProps = {
  imageSrc: { url: string }
  imageAlt: string
  subtitle: string
  title: string
  description: string
}

const FedRampAdvisory = ({
  imageSrc,
  imageAlt,
  subtitle,
  title,
  description,
}: FedRampAdvisoryProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-8 sm:mt-14 lg:mt-20">
      <div>
        <Image
          src={imageSrc.url}
          width={590}
          height={365}
          alt={imageAlt}
          className="rounded-[14px] object-cover w-full mx-auto h-full"
        />
      </div>

      <div className="my-auto">
        <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
          {subtitle}
        </h3>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
          {title}
        </h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default FedRampAdvisory
