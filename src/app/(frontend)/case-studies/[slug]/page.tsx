import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'
import { cache } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0 // disable ISR for nowß

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'case-studies',
      draft: false,
      limit: 1000, // Reasonable limit to prevent timeouts
    })
    return docs.map(({ slug }) => ({ slug }))
  } catch (error) {
    console.error('Failed to generate static params for case studies:', error)
    // Return empty array to allow build to continue
    // The pages will be generated on-demand instead
    return []
  }
}

// export const revalidate = 60

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CaseStudy({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: draft } = await draftMode()

  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      depth: 3,
      draft,
      limit: 1,
    })
    const caseStudy = docs[0]
    if (!caseStudy) return notFound()

    return (
      <>
        <RenderBlocks blocks={caseStudy.layout} pageData={caseStudy} />
      </>
    )
  } catch (error) {
    console.error(`Failed to fetch case study with slug "${slug}":`, error)
    return notFound()
  }
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const caseStudy = await queryCaseStudyBySlug({ slug })

  return generateMeta({ doc: caseStudy })
}

const queryCaseStudyBySlug = cache(async ({ slug }: { slug: string }) => {
  try {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'case-studies',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.error(`Failed to query case study by slug "${slug}":`, error)
    return null
  }
})
