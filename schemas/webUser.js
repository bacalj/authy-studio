import { MdPerson } from 'react-icons/md'

export default {
  name: 'webUser',
  title: 'Website Users',
  type: 'document',
  icon: MdPerson,
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
    }
  ]
}