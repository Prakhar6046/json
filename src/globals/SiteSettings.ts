export const SiteSettings: any = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
      required: false,
      admin: {
        description: 'Upload the site favicon (usually a .ico or small .png)',
      },
    },
    {
      name: 'WebsiteTitle',
      type: 'text',
      label: 'Website Title',
      defaultValue: 'AWCWS',
    },
  ],
}
