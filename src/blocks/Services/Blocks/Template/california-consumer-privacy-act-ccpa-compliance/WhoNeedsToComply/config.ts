import { Block } from 'payload'

export const WhoNeedsToComply: Block = {
  slug: 'who_needs_to_comply',
  labels: {
    singular: 'Who Needs To Comply',
    plural: 'Who Needs To Comply',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Who needs to comply?',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'California Consumer Privacy Act (CCPA) applies to businesses, headquartered inside or outside of California, that collect personal information of California State Residents and that satisfy at least one of three conditions:',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'text',
        },
        {
          name: 'text',
          type: 'textarea',
        },
      ],
      defaultValue: [
        { number: '01', text: 'Annual Gross revenue more than $25 million.' },
        {
          number: '02',
          text: 'Handling (buying, selling, etc.) personal information of more than 50,000 CA consumers, households, or devices annually.',
        },
        {
          number: '03',
          text: 'Gets at least 50 percent of annual revenue from selling CA consumers’ personal information.',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
