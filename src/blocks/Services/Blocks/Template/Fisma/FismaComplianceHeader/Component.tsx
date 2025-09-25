'use client'
import React from 'react'

type FISMAComplianceSectionProps = {
  heading: string
  description: string
  boldText: string
  benefits: { text: string }[]   
  penalties: { text: string }[] 
  benefitsBgUrl: string
  penaltiesBgUrl: string
}

const FISMAComplianceSection = ({
  heading,
  description,
  boldText,
  benefits,
  penalties,
  benefitsBgUrl,
  penaltiesBgUrl,
}: FISMAComplianceSectionProps) => {
  return (
    <section className={`bg-background md:px-14 py-10 md:py-20 `}>
      <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-span-2 flex flex-col gap-6 ">
          <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">{heading}</h1>
          <p className="col-span-2 text-center">{description}</p>
          <p className="text-xl col-span-2 text-center font-bold">{boldText}</p>
        </div>

        <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
          <h1 className="text-5xl font-bold text-(--wils_orang)">Key Benefits</h1>
        </div>
        <div className="col-span-2 md:col-span-1"></div>

        <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/keyBenefits.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
          <ul className="max-w-[245px] ps-5 pt-44 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
            {benefits.map((item, idx) => (
              <li key={idx} className="font-medium">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/penalties.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
          <ul className="max-w-[215px] ps-5 pb-64 md:pb-72 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
            {penalties.map((item, idx) => (
              <li key={idx} className="font-medium">
               {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1"></div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
          <h1 className="text-5xl font-bold text-(--foreground)">Penalties</h1>
        </div>
      </div>
    </section>
  )
}

export default FISMAComplianceSection
