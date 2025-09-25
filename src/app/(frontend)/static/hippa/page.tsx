import Image from 'next/image'
import React from 'react'

export default function Hippa() {
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

      {/* HIPPA Compliance Section Start */}
      <section>
        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
              How will WCG help you with HIPAA Compliance?
            </h2>
            <p>
              Wilson Consulting Group (WCG) provides HIPAA Compliance Services for organizations
              looking to assess and determine their compliance with HIPAA’s administrative,
              physical, and technical safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.15)] p-5 max-w-md lg:max-w-none mx-auto">
              <Image src={'/new-images/design.webp'} alt="Design" width={500} height={500} />

              <div className="mt-3">
                <h3 className="font-bold text-2xl mb-1">Design:</h3>
                <p>
                  The results of this HIPAA security risk assessment are displayed in a report which
                  can be used to determine risks in policies, processes, and systems. Tailored to
                  the client’s needs and business goal, our experienced consultants and Compliance
                  Experts design strategies to mitigate weaknesses and minimize risks listed in
                  HIPAA security risk assessment report.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.15)] p-5 max-w-md lg:max-w-none mx-auto">
              <Image src={'/new-images/evaluate.webp'} alt="Evaluate" width={500} height={500} />

              <div className="mt-3">
                <h3 className="font-bold text-2xl mb-1">Evaluate :</h3>
                <p>
                  Prior to the start of any active assessment activity, our Compliance Experts will
                  gather all necessary information to perform a thorough security risk assessment.
                  Then, we conduct a thorough HIPAA security risk assessment for healthcare
                  providers as required by the HIPAA Security Rule and the Centers for Medicare and
                  Medicaid Service Electronic Health Record Incentive Program.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.15)] p-5 max-w-md lg:max-w-none mx-auto">
              <Image src={'/new-images/manage.webp'} alt="Manage" width={500} height={500} />

              <div className="mt-3">
                <h3 className="font-bold text-2xl mb-1">Manage :</h3>
                <p>
                  WCG also offers HIPAA compliant cloud services to healthcare organizations in
                  order to secure their cloud infrastructure, protecting patients’ sensitive
                  personal and health information. Our HIPAA compliant cloud services consist of a
                  set of control-based technologies and policies designed to maintain data security,
                  adhere to compliance regulations, and provide a data backup plan in the event of a
                  security breach.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center">
            These HIPAA Compliance Services help organizations within the healthcare industry to
            design, restructure, and/or implement the necessary safeguards to ensure the
            confidentiality, integrity, and security of electronically protected health information,
            thereby satisfying the Security Rule and ensuring their HIPAA compliance.
          </p>
        </div>
      </section>
      {/* HIPPA Compliance Section End */}
    </>
  )
}
