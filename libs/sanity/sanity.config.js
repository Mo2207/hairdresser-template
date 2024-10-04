import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes'
import {richDate} from '@sanity/rich-date-input'

export default defineConfig({
  name: 'default',
  title: 'od-teams',

  projectId: 'aw3v4mxg',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), richDate()],

  schema: {
    types: schemaTypes,
  },
})
