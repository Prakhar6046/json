import Image from 'next/image'
import React from 'react'

export default function FedrampServices() {
  return (
    <div>
      <section className={`bg-background md:px-14 py-10 md:py-20 `}>
        <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
              {/* {title} */} FISMA Assessment Services
            </h1>
            <p className="text-black text-lg md:text-xl font-normal max-w-[31rem]">description</p>

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
              Why do you need FISMA Compliance?
            </h1>
            <p className="col-span-2 text-center">
              Todays complex information systems and networks are enormously beneficial for most
              users, but they do come with certain inherent risks. Federal agencies are an alluring
              target for hackers because these agencies transmit, process, and store vital,
              strategic, and confidential information that could be used for personal gain or to
              harm national interests. That’s why proper information security is so vital to a
              federal agency’s ability to fend off cyber criminals and protect sensitive national
              security information.
            </p>{' '}
            <p className="text-xl col-span-2 text-center font-bold">
              It is critical that agencies conduct a FISMA assessment to determine the risks to
              federal information systems and become compliant with this regulation.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
            <h1 className="text-5xl font-bold text-(--wils_orang)">Key Benefits</h1>
          </div>
          <div className="col-span-2 md:col-span-1"></div>

          <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/keyBenefits.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
            <ul className="max-w-[245px] ps-5 pt-44 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
              <li className="font-medium">
                Assuring clients that their sensitive data is protected
              </li>
              <li className="font-medium">
                Protecting government information and assets with confidentiality, integrity, and
                availability
              </li>
              <li className="font-medium">Reducing IT related cost to the federal government</li>
              <li className="font-medium">Maintaining loyal clients and attract new ones</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/penalties.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
            <ul className="max-w-[215px] ps-5 pb-64 md:pb-72 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
              <li className="font-medium">Censure by congress</li>
              <li className="font-medium">Negative publicity for the agency</li>
              <li className="font-medium">Reduced federal funding for agencies</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1"></div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
            <h1 className="text-5xl font-bold text-(--foreground)">Penalties</h1>
          </div>
        </div>
      </section>

      <section className="bg-background md:px-14 py-10 md:py-20 relative">
        <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-2 static bg-white z-20 p-5 md:p-16 rounded-2xl shadow-lg mb-20">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl">How to become FISMA Compliance</h1>
              <div className="md:w-20 w-8 absolute top-0 -left-1 md:-top-4 md:-left-4">
                <Image width={80} height={80} src={'/images/fisma/border.svg'} alt="" />
              </div>
            </div>

            <div className="flex flex-col my-5 gap-4 max-w-5xl">
              <p className="text-lg my-4">
                To be FISMA compliant you need to information security controls across your
                organization based on the guidance from NIST. Specific FISMA requirements are
                detailed in NIST SP 800-53 Rev. 5 (current publication), the Federal Information
                Processing Standards (FIPS) publications 199 and 200.
              </p>
              <h3 className="text-xl font-bold">FISMA requirements include:</h3>
              <ul
                style={{ listStyleImage: "url('/images/fisma/star.svg')" }}
                className="flex flex-col gap-5 ps-5"
              >
                <li className="text-lg">
                  <span className="font-semibold">Information System Inventory: </span>FISMA
                  requires every agency to maintain an inventory of all systems and their
                  integrations in use.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Risk Categorization: </span>FIPS 199 documents how
                  an agency categorizes their risk and security requirements. Each agency is
                  responsible for maintaining the highest level of security necessary per this
                  document.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">System Security Plan: </span>FISMA requires that
                  each agency have a security plan in place and a process to make sure the plan is
                  updated regularly.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Security Controls: </span>NIST 800-53 Rev. 4
                  defines 20 security controls that each agency must implement to be FISMA
                  compliant.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Risk Assessments: </span>Any time an agency makes
                  a change to their systems, they are required to perform a three tiered risk
                  assessment using the Risk Management Framework (RMF).
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Certification and Accreditation: </span>FISMA
                  requires each agency to conduct yearly security reviews. Agencies must demonstrate
                  they can implement, maintain, and monitor systems to be FISMA compliant.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] w-full h-[800px] bg-[url(/images/fisma/bg-img.png)] bg-no-repeat bg-contain absolute left-0 top-40 z-10 hidden md:block"></div>
      </section>
    </div>
  )
}
