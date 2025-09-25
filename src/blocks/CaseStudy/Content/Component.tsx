import React from 'react'
import RichText from '@/components/RichText'
import type { Media, Page } from '@/payload-types'
import Sidebar from './Sidebar'
import Image from 'next/image'

type CaseStudyContentProps = Extract<Page['layout'][0], { blockType: 'case-study-cn' }>

export const CaseStudyContentBlock: React.FC<CaseStudyContentProps> = (props) => {
  const {
    'main-title': mainTitle,
    'main-content': mainContent,
    content,
    'main-image': mainImage,
    sb: sidebar,
  } = props

  const getMediaAlt = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  const getMediaUrl = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  return (
    <>
      <section className="md:py-24 py-16">
        <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-16 gap-6 relative">
          <div className="md:w-[62%] w-full space-y-10">
            <h2 className="text-3xl md:text-[58px] md:leading-[60px] font-normal text-black tracking-[-2px] leading-[-20px]">
              {mainTitle}
            </h2>
            {mainContent && (
              <div className="text-black text-lg font-normal">
                <RichText data={mainContent} enableGutter={false} />
              </div>
            )}
            {content &&
              content.map((item, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl text-[45px] font-normal text-wils_orang tracking-[-2px] leading-[55px]">
                    {item['sub-title']}
                  </h2>
                  {item['sub-content'] && (
                    <div className="text-black text-[18px] font-normal">
                      <RichText data={item['sub-content']} enableGutter={false} />
                    </div>
                  )}
                </div>
              ))}
          </div>
          {sidebar?.title && sidebar.title !== '' && (
            <aside className="md:w-[38%] w-full">
              <div className="md:sticky md:top-24 md:max-h-[calc(100vh-6rem)]">
                <Sidebar sidebar={sidebar} />
              </div>
            </aside>
          )}
        </div>
      </section>

      {mainImage && (
        <section className="md:pb-16 pb-10">
          <div className="container mx-auto">
            <Image
              src={getMediaUrl(mainImage as Media)}
              alt={getMediaAlt(mainImage as Media) || 'Main Image'}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}
    </>
  )
}

export default CaseStudyContentBlock
