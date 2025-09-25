import React, { Fragment } from 'react'

import type { Page, CaseStudy, Service } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import HeroSection from '@/blocks/HeroHome/Component'
import HeroServices from '@/blocks/Services/HeroServices/Component'
import HeroService from '@/blocks/Services/Service/Hero/Component'
import ServiceAbout from '@/blocks/Services/Service/About/Component'
import OurServices from './Home/OurServices/Component'
import Industries from './Home/Industries/Component'
import Portfolio from './Home/Portfolio/Component'
import CaseStudies from './Home/CaseStudies/Component'
import FeaturedBlogs from './Home/Blogs/Component'
import ServicesTabs from './Services/OurServices/Component'
import ContactForm from './ContactForm/Component'
import CareerTabsBlock from './CareersBlocks/CareerTabs/Component'
import CompanyContentBlock from './CareersBlocks/CompanyContent/Component'
import ImageTextSectionBlock from './CareersBlocks/ImageTextSection/Component'
import JobListingsBlock from './CareersBlocks/JobListings/Component'
import SimpleInformationBlock from './CareersBlocks/SimpleInformation/Component'
import CompanyHeroBlock from './CompanyBlocks/CompanyHero/Component'
import ITExpertsBlock from './CompanyBlocks/ITExperts/Component'
import MissionVisionBlock from './CompanyBlocks/MissionVision/Component'
import LeadershipPointsBlock from './CompanyBlocks/LeadershipPoints/Component'
import TestimonialSliderBlock from './CompanyBlocks/TestimonialSlider/Component'
import Resources from './ResourceCenter/Resources/Component'
import InfoTabs from './ResourceCenter/InfoTabs/Component'
import ExtraInfoBlock from './ResourceCenter/ExtraInfo/Component'
import EbooksBlock from './ResourceCenter/Ebooks/Component'
import VideoTabsBlock from './ResourceCenter/VideoTabs/Component'
import CaseStudyHeroBlock from './CaseStudy/Hero/Component'
import CaseStudyContentBlock from './CaseStudy/Content/Component'
import ExperienceSection from './ExperienceSection/Component'
import HelpYou from './Services/Service/HelpYou/Component'
import WhyWCG from './Services/Service/WhyWCG/Component'
import FAQ from './Services/Service/FAQ/Component'
import ServicesRecommendations from './Services/Service/ServicesRecommendations/Component'
import ServiceOverview from './Services/Blocks/ServiceOverview/Component'
import { HelpYouV2 } from './Services/Service/HelpYouV2/Component'
import ServiceAbout2 from './Services/Service/AboutV2/Component'
import { HelpYouVideo } from './Services/Service/HelpYouVideo/Component'
import PeneterationTesting from './Services/Service/PeneterationTesting/Component'
import WCGHelpList from './Services/Service/WCGHelpList/Component'
import WCGTrainingServices from './Services/Service/TrainingServices/Component'
import GdprIntro from './Services/Blocks/Template/GdprIntro/Component'
import GdprPrinciples from './Services/Blocks/Template/GdprPriciples/Component'
import WhoNeedsToComplyComponent from './Services/Blocks/Template/california-consumer-privacy-act-ccpa-compliance/WhoNeedsToComply/Component'
import FedRampHead from './Services/Blocks/Template/FedRamp/FedRampHeading/Component'
import FedRampAdvisory from './Services/Blocks/Template/FedRamp/FedRampAdvisory/Component'
import FedRampAdvisoryV2 from './Services/Blocks/Template/FedRamp/FedRampAdvisoryV2/Component'
import ReadinessAssessmentSection from './Services/Blocks/Template/FedRamp/ReadinessAssessment/Component'
import AuthorizationMonitoringSection from './Services/Blocks/Template/FedRamp/FedRampAuthorization/Component'
import WhyChooseWCGSection from './Services/Blocks/Template/FedRamp/WhyChooseWCG/Component'
import FISMAComplianceSection from './Services/Blocks/Template/Fisma/FismaComplianceHeader/Component'
import FISMABecomeSection from './Services/Blocks/Template/Fisma/HowToBecome/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  'hero_home': HeroSection,
  hero_services: HeroServices,
  hero_service: HeroService,
  service_about: ServiceAbout,
  'our_services': OurServices,
  industries: Industries,
  portfolio: Portfolio,
  'case-studies': CaseStudies,
  'featured-blogs': FeaturedBlogs,
  srv: ServicesTabs,
  'contact-form': ContactForm,
  'career-tabs': CareerTabsBlock,
  'co-content': CompanyContentBlock,
  'image-text-section': ImageTextSectionBlock,
  'job-listings': JobListingsBlock,
  info: SimpleInformationBlock,
  'co-hero': CompanyHeroBlock,
  'it-experts': ITExpertsBlock,
  'mission-vision': MissionVisionBlock,
  'leadership-points': LeadershipPointsBlock,
  testimonials: TestimonialSliderBlock,
  resources: Resources,
  'info-tabs': InfoTabs,
  'extra-info': ExtraInfoBlock,
  ebooks: EbooksBlock,
  'video-tabs': VideoTabsBlock,
  'case-study-hero': CaseStudyHeroBlock,
  'case-study-cn': CaseStudyContentBlock,
  'experience-section': ExperienceSection,
  help_you_section: HelpYou,
  why_wcg_section: WhyWCG,
  faq_section: FAQ,
  services_more: ServicesRecommendations,
  servicesOverview: ServiceOverview,
  help_you_v2: HelpYouV2,
  service_about_2: ServiceAbout2,
  help_you_video: HelpYouVideo,
  penetration_testing: PeneterationTesting,
  wcg_help_list: WCGHelpList,
  wcg_training_services: WCGTrainingServices,
  gdpr_intro: GdprIntro,
  gdpr_principles: GdprPrinciples,
  who_needs_to_comply: WhoNeedsToComplyComponent,
  fedramp_header: FedRampHead,
  fedramp_advisory: FedRampAdvisory,
  fedramp_advisory_v2: FedRampAdvisoryV2,
  readiness_assessment_section: ReadinessAssessmentSection,
  fedramp_auth: AuthorizationMonitoringSection,
  why_choose_wcg: WhyChooseWCGSection,
  fisma_compliance: FISMAComplianceSection,
  fisma_how_to: FISMABecomeSection,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0] | Service['layout'][0][]
  pageData?: CaseStudy
}> = (props) => {
  const { blocks, pageData } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer pageData={pageData} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
