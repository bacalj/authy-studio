export default {
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'belongsTo',
      title: 'User',
      type: 'reference',
      to: [ { type: 'webUser' } ]
    }
  ]
}
