import PageTemplate, { generateMetadata } from './[slug]/page'

export const dynamic = 'force-dynamic'
export const revalidate = 0 // disable ISR for nowß

export default PageTemplate

export { generateMetadata }
