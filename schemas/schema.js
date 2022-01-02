import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import note from './note'
import webUser from './webUser'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    webUser,
    note
  ])
})
