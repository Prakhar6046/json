import { Block } from 'payload'

const FedRampAdvisoryConfig: Block = {
  slug: 'fedramp_advisory',
  labels: {
    singular: 'Consulting Section',
    plural: 'Consulting Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default FedRampAdvisoryConfig
