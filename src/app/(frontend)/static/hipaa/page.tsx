import Image from 'next/image'
import React from 'react'

export default function FedrampServices() {
  return (
    <div>
      <section className={`bg-background md:px-14 py-10 md:py-20 `}>
        <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
              {/* {title} */} Health Insurance Portability and Accountability Act
            </h1>
            {/* <p className="text-black text-lg md:text-xl font-normal max-w-[31rem]">description</p> */}

            <button className="secondary_btn px-4 py-2 text-nowrap">Request Consultation</button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Image
              src={'/media/hero-main-img-1200x630.png'}
              alt=""
              // src={getMediaUrl(mainImage)}
              // alt={getMediaAlt(mainImage) || 'hero-image'}
              width={590}
              height={365}
              className="rounded-xl object-cover w-full mx-auto h-full"
            />

            <Image
              //   src={getMediaUrl(overlayIcon)}
              //   alt={getMediaAlt(overlayIcon) || 'overlay-icon'}
              src={'/media/sucess-rate.webp'}
              alt="sucess-rate"
              width={179}
              height={209}
              className="absolute -bottom-14 md:-left-16 -left-10"
            />
          </div>
        </div>
      </section>

      <section className={`bg-background md:px-14 py-10 md:py-20 `}>
        <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-2 flex flex-col gap-6 ">
            <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">
              How will WCG help you with HIPAA Compliance?
            </h1>
            <p className="col-span-2 text-center">
              Wilson Consulting Group (WCG) provides HIPAA Compliance Services for organizations
              looking to assess and determine their compliance with HIPAA’s administrative,
              physical, and technical safeguards.
            </p>{' '}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl white shadow-2xl rounded-2xl h-50"></div>
        </div>
      </section>
    </div>
  )
}
