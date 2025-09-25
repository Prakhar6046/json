import { Block } from 'payload'
const FedrampAdvisoryConfigV2: Block = {
  slug: 'fedramp_advisory_v2',
  labels: {
    singular: 'Consulting List Section',
    plural: 'Consulting List Sections',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'listItems',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default FedrampAdvisoryConfigV2
