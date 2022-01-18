import { MdNote } from 'react-icons/md'

export default {
  name: 'note',
  title: 'Notes',
  type: 'document',
  icon: MdNote,
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'belongsTo.email'
    }
  }
}
