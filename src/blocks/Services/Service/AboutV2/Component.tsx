import { ServiceAboutClient2 } from './Component.client'
import type { Service } from '@/payload-types'

type ServiceAboutBlockProps = Extract<Service['layout'][0], { blockType: 'service_about_2' }>

export default function ServiceAbout2(props: ServiceAboutBlockProps) {
  return <ServiceAboutClient2 {...props} />
}
