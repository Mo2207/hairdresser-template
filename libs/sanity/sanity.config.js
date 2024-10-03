import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'od-teams',

  projectId: 'aw3v4mxg',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
