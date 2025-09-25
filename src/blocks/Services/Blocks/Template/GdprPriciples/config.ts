import { Block } from "payload"

export const gdprPrinciples: Block = {
  slug: 'gdpr_principles',
  labels: {
    singular: 'GDPR Block',
    plural: 'GDPR Blocks',
  },
  fields: [
    {
      name: 'circleText',
      type: 'text',
      required: true,
      defaultValue: 'Key Principles Of GDPR',
    },
    {
      name: 'principles',
      type: 'array',
      label: 'Principles',
      labels: { singular: 'Principle', plural: 'Principles' },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
        },
      ],
    },
  ],
}
