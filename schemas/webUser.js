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
    },
    {
      title: 'group',
      name: 'group',
      type: 'reference',
      to: [{type: 'group'}]
    }
  ]
}