import { Block } from 'payload';
import { v4 as uuidv4 } from 'uuid';

export const ServiceAbout2: Block = {
  slug: 'service_about_2',
  labels: {
    singular: 'Service About With List (Service)',
    plural: 'Service About With List (Service)',
  },
  fields: [
    {
      name: 'heading',
      type: 'group',
      label: 'Section Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          defaultValue: 'What is IT Change Management?',
          admin: {
            description: 'Main section heading',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'image',
          type: 'group',
          label: 'Featured Image',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              admin: { description: 'Featured image for the content section' },
            },
          ],
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Content Paragraphs',
          minRows: 1,
          fields: [
            {
              name: 'id',
              type: 'text',
              defaultValue: () => uuidv4(),
              admin: { readOnly: true },
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading Text',
              admin: { description: 'Heading text' },
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              admin: { description: 'Content paragraph' },
            },
            {
              name: '_order',
              type: 'number',
              required: true,
              defaultValue: 0,
              admin: { readOnly: true },
            },
          ],
        },
        {
          name: 'list',
          type: 'array',
          label: 'List',
          fields: [
            {
              name: 'id',
              type: 'text',
              defaultValue: () => uuidv4(),
              admin: { readOnly: true },
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
              admin: { description: 'List icon' },
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'List Text',
              required: true,
              admin: { description: 'List text' },
            },
            {
              name: '_order',
              type: 'number',
              required: true,
              defaultValue: 0,
              admin: { readOnly: true },
            },
          ],
        },
      ],
    },
  ],
};
