import Image from 'next/image'
import React from 'react'

export default function FedrampServices() {
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

      {/* FedRAMP Services Section Start */}
      <section>
        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
              FedRamp Services
            </h2>
            <p>
              We provide the following FedRAMP services to assist your organization in pursuing
              FedRAMP ATO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-8 sm:mt-14 lg:mt-20">
            <div>
              <Image
                src={'/new-images/consulting-assistance.webp'}
                width={590}
                height={365}
                alt="Consulting and Documentation Assistance"
                className="rounded-[14px] object-cover w-full mx-auto h-full"
              />
            </div>

            <div className="my-auto">
              <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
                FedRAMP Advisory
              </h3>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
                Consulting and Documentation Assistance
              </h2>

              <p>
                Before a CSP can begin the FedRAMP certification process, they must first develop
                and implement FedRAMP documentation and security controls. WCG FedRAMP consultants
                will guide you throughout the process and assist with Security Artifact Creation,
                such as Security Assessment Plan (SAP), System Security Plan (SSP), Security
                Assessment Report (SAR), and Plan of Action and Milestone (POA&M). WCG’s FedRAMP
                Consulting Services ensure you are fully prepared for FedRAMP audit and
                authorization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-4 md:mt-20">
            <div className="my-auto">
              <p className="font-bold text-lg sm:text-xl mb-3">
                We also provide the following as part of our FedRAMP Consulting Services:
              </p>

              <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Assist in determining your cloud solution’s proper Federal Information Processing
                  Standards (FIPS)-199 categorization of the risk level.
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Conduct FedRAMP Vulnerability Assessment and Penetration Test.
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Conduct a Gap Analysis to evaluate the sufficiency of security controls to
                  determine organizations’ compliance level against FedRAMP requirements.
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Evaluate, review, and revise your Incident Response Plan, Process, and Procedures
                  to ensure they adequately address FedRAMP requirements.
                </li>
              </ul>
            </div>

            <div>
              <Image
                src={'/new-images/consulting-assistance-2.webp'}
                width={590}
                height={365}
                alt="Consulting and Documentation Assistance"
                className="rounded-[14px] object-cover w-full mx-auto h-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-(--background)">
          <div className="container mx-auto  px-4  py-8 sm:py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
              <div className="flex flex-col justify-center gap-5 md:order-1 order-2">
                <div className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.06)]">
                  <div className="size-8">
                    <Image
                      src={'/new-images/gear-icon.svg'}
                      width={32}
                      height={32}
                      alt="Gear Icon"
                    />
                  </div>

                  <h4 className="font-medium text-xl">Readiness Assessment Report</h4>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.06)]">
                  <div className="size-8">
                    <Image
                      src={'/new-images/hands-joint.svg'}
                      width={35}
                      height={35}
                      alt="Gear Icon"
                    />
                  </div>

                  <h4 className="font-medium text-xl">Joint Authorization Board</h4>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.06)]">
                  <div className="size-8">
                    <Image
                      src={'/new-images/cloud-service.svg'}
                      width={26}
                      height={26}
                      alt="Gear Icon"
                    />
                  </div>

                  <h4 className="font-medium text-xl">Cloud Service Offering</h4>
                </div>
              </div>

              <div className="my-auto order-1 md:order-2">
                <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
                  FedRAMP Preparation
                </h3>
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
                  FedRAMP Readiness Assessment
                </h2>

                <p>
                  WCG FedRAMP assessors review your organization’s environment and conduct a
                  technical capability assessment to determine if it meets FedRAMP compliance
                  requirements. This service results in a comprehensive FedRAMP Readiness Assessment
                  Report (RAR), offering reassurance in your FedRAMP readiness.
                </p>

                <p>
                  In order to kick off the authorization process with the Joint Authorization Board
                  (JAB), CSPs must achieve the FedRAMP Ready JAB designation for their Cloud Service
                  Offering (CSO) through a FedRAMP Readiness Assessment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
            <div className="my-auto order-2 md:order-1">
              <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
                FedRAMP Authorization
              </h3>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
                Full Security Assessment
              </h2>

              <p>
                Our FedRAMP assessors perform an independent assessment of the system to evaluate
                critical control implementation and verify your compliance level to FedRAMP. This
                3PAO Full Security Assessment is conducted in accordance with NIST SP 800-53
                Revision 5 and FedRAMP baselines for low, moderate, or high-impact cloud
                organizations’ products and/or services.
              </p>

              <p>
                FedRAMP Penetration Test activities are also within the scope of this Full Security
                Assessment.
              </p>

              <p className="font-bold text-lg sm:text-xl my-3">
                A 3PAO-required Security Authorization Package will be developed and issued by WCG
                which contains:
              </p>

              <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Security Assessment Plan (SAP)
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Security Assessment Report (SAR)
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Plan of Action and Milestones (POA&M) generated from FedRAMP assessment
                </li>
              </ul>
            </div>

            <div className=" order-1 md:order-2">
              <Image
                src={'/new-images/full-security-assesment.webp'}
                width={590}
                height={365}
                alt="Full Security Assessment"
                className="rounded-[14px] object-cover w-full mx-auto h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-10 sm:mt-20">
            <div>
              <Image
                src={'/new-images/annual-assessment.webp'}
                width={590}
                height={365}
                alt="Full Security Assessment"
                className="rounded-[14px] object-cover w-full mx-auto h-full"
              />
            </div>

            <div className="my-auto">
              <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
                FedRAMP Continuous Monitoring
              </h3>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
                Annual Assessment
              </h2>

              <p className="font-bold text-lg sm:text-xl my-3">
                We provide ongoing support with risk evaluation to maintain your organizations
                FedRAMP ATO by the following:
              </p>

              <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Work with your organization to provide evidentiary information to Authorizing
                  Officials (AOs) at least monthly, annually, every three years, and on an as-needed
                  basis.
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  As a certified FedRAMP 3PAO, we perform the FedRAMP assessment on an annual basis
                  for a subset of the overall controls implemented on the system to ensure your
                  organization’s operational visibility.
                </li>

                <li className="flex items-start gap-2">
                  <Image
                    src={'/new-images/prime_check-circle.svg'}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                  Assist with the integrated change control process to maintain a secure baseline
                  configuration of your architecture.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FedRAMP Services Section End */}

      {/* Why Choose WCG Section Start */}
      <section className="bg-(--background)">
        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.2em]">
              Why choose WCG for your
              <br />
              FedRAMP needs?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
            <div>
              <Image src={'/new-images/time-saving.svg'} width={64} height={64} alt="Time Saving" />

              <h3 className="font-bold text-xl my-3.5">Time Saving</h3>

              <p>
                Our FedRAMP process and use of internal application provide a faster and simplified
                approach to evaluate controls and identify deficiencies. We can effectively and
                efficiently get you ready for the authorization up to 60 days, which saves 80%
                faster time to market.
              </p>
            </div>

            <div>
              <Image src={'/new-images/cost-saving.svg'} width={64} height={64} alt="Time Saving" />

              <h3 className="font-bold text-xl my-3.5">Cost Saving</h3>

              <p>
                Our pricing is competitive and straightforward with no hidden agenda, miscellaneous
                charges, or add-on fees, which provides you with at least 40% cost savings compared
                to others’ pricing and approach.
              </p>
            </div>

            <div>
              <Image
                src={'/new-images/experienced-team.svg'}
                width={64}
                height={64}
                alt="Time Saving"
              />

              <h3 className="font-bold text-xl my-3.5">Experienced Team</h3>

              <p>
                Our team is highly talented, knowledgeable, and experienced in conducting FedRAMP
                assessments and providing consulting in accordance with NIST 800-53 Rev 5. We have
                unique experiences in working with federal agencies, which allow us to have the
                know-how to ensure businesses are successful with their assessments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose WCG Section End */}
    </>
  )
}
