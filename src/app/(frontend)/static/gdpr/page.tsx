'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Gdpr() {
  return (
    <>
      {/* What is the GDPR? Start */}
      <section>
        <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
              What is the GDPR?
            </h2>

            <p>
              The General Data Protection Regulation (GDPR) became enforceable on May 25, 2018 and
              is intended to harmonize data protection laws throughout the European Union (EU) by
              applying a single data protection law that is binding throughout each member state.
              GDPR protects any information that can be linked to an identifiable individual such as
              search-engine entries, employee authentication, payment transactions,
              closed-circuit-television footage, and visitor logs. The information can be in any
              format (structured or unstructured) and can be transferred in any medium including
              online, offline, or backup storage.
            </p>
          </div>
        </div>

        <div className='bg-[url("/new-images/gdpr-bg.webp")] bg-no-repeat bg-cover bg-left px-4 py-8 sm:py-14 lg:py-20'>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4 flex justify-center items-center size-full">
                <div className="bg-(--wils_orang) size-full xl:max-w-[18vw] lg:max-w-[24vw] w-52 sm:w-80 xl:max-h-[18vw] lg:max-h-[24vw] h-52 sm:h-80 flex justify-center items-center px-20 rounded-full">
                  <h2 className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.6em] m-0">
                    Key Principles Of GDPR
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className={`flex flex-col gap-6`}>
                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Right to access:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Right of revocation:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Data portability:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Breach notification:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Privacy by design:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row cursor-pointer">
                    {/* Check Icon */}
                    <div className="pt-5 w-1/12">
                      <Image
                        src={'/new-images/prime_check-circle.svg'}
                        alt="Check Icon"
                        width={41}
                        height={41}
                      />
                    </div>

                    {/* Industry Content */}
                    <div className={`py-5 border-b border-white/20 w-11/12`}>
                      <h4 className="flex gap-3 justify-between cursor-pointer">
                        <span
                          className={`md:text-[28px] sm:text-2xl text-xl font-medium text-white`}
                        >
                          Data protection officer:
                        </span>
                        <Image
                          src={'/new-images/accordian-arrow-1.svg'}
                          alt="Accordion Check"
                          width={40}
                          height={40}
                          className={`transition-transform duration-300`}
                        />
                      </h4>

                      {/* Accordion Content with smooth animation */}
                      <div
                        className={`overflow-hidden transition-all mt-3.5 duration-1500 ease-in-out hidden`}
                      >
                        <p className={`md:text-xl text-lg font-normal text-white`}>
                          Data subjects have the right to obtain information as whether or not their
                          information is being collected, where and for what purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What is the GDPR? End */}
    </>
  )
}
