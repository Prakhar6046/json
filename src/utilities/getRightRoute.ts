import { CollectionSlug, getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'

interface Options {
  priority: CollectionSlug
  fallback: CollectionSlug
}

export async function getRightRoute(slug: string, options: Options) {
  const payload = await getPayload({ config: configPromise })

  const { isEnabled: draft } = await draftMode()
  const { priority, fallback } = options

  try {
    const result = await payload.find({
      collection: priority,
      draft,
      limit: 1,
      depth: 10,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (result.docs?.[0]) {
      return result.docs[0]
    }
  } catch (error) {
    console.warn(`Failed to get right route for slug "${slug}" in priority collection:`, error)
  }

  // Try fallback collection
  try {
    const fallbackResult = await payload.find({
      collection: fallback,
      draft,
      limit: 1,
      depth: 10,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (fallbackResult.docs?.[0]) {
      return fallbackResult.docs[0]
    }
  } catch (error) {
    console.warn(`Failed to get right route for slug "${slug}" in fallback collection:`, error)
  }

  return null
}
