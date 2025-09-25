import Image from 'next/image'
import React from 'react'

export default function CaliforniaConsumerPolicy() {
  return (
    <>
      <section className={`bg-background md:px-14 py-10 md:py-20 `}>
        <div className="container mx-auto  px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
              {/* {title} */} Comprehensive Security Assessment
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

      {/* Comply Section Start */}
      <section className='bg-[url("/new-images/comply-bg.webp")] bg-no-repeat bg-cover bg-left sm:bg-center before:bg-black/50 before:absolute before:top-0 before:left-0 before:w-full before:h-full relative'>
        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20 z-10 relative">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="sm:col-span-3 lg:col-span-6"></div>

            <div className="sm:col-span-9 lg:col-span-6">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
                Who needs to comply?
              </h2>

              <p className="text-white">
                California Consumer Privacy Act (CCPA) applies to businesses, headquartered inside
                or outside of California, that collect personal information of California State
                Residents and that satisfy at least one of three conditions:
              </p>

              <div className="mt-8">
                <ul className="flex flex-col gap-8 before:w-0.5 before:h-10/12 before: before:bg-white before:absolute before:left-6 before:-z-10 before:top-1/2 before:-translate-y-1/2 relative">
                  <li className="flex items-center gap-4 text-white">
                    <div className="bg-(--wils_orang) rounded-full p-4 font-bold size-[50px] flex items-center justify-center">
                      01
                    </div>

                    <p>
                      Annual Gross revenue more than <strong>$25 million.</strong>
                    </p>
                  </li>

                  <li className="flex items-center gap-4 text-white">
                    <div className="bg-(--wils_orang) rounded-full p-4 font-bold size-[50px] flex items-center justify-center">
                      02
                    </div>

                    <p>
                      Handling (buying, selling, etc.) personal information of more than 
                      <strong>50,000</strong> CA consumers, households, or devices annually.
                    </p>
                  </li>

                  <li className="flex items-center gap-4 text-white">
                    <div className="bg-(--wils_orang) rounded-full p-4 font-bold size-[50px] flex items-center justify-center">
                      03
                    </div>

                    <p>
                      Gets at least <strong>50 percent</strong> of annual revenue from selling CA
                      consumers’ personal information.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Comply Section End */}
    </>
  )
}
