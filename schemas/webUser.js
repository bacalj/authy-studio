export default {
  name: 'webUser',
  title: 'Web User',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string'
    },
    {
      name: 'Notes',
      title: 'notes',
      type: 'array',
      of: [
        { type: 'reference',
          to: [ 
            { type: 'note' }
          ]
        }
      ]
    }
  ]
}