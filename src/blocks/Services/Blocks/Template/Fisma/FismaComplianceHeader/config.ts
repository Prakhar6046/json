import { Block } from 'payload'

const FISMAComplianceSectionConfig: Block = {
  slug: 'fisma_compliance',
  labels: {
    singular: 'FISMA Compliance Section',
    plural: 'FISMA Compliance Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'boldText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'benefitsBgUrl',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image for the Key Benefits section',
      },
    },
    {
      name: 'penaltiesBgUrl',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image for the Penalties section',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'penalties',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default FISMAComplianceSectionConfig
