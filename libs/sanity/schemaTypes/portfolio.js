export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }, {
      name: 'image',
      type: 'image',
      title: 'Image',
    }, {
      name: 'youtubeLink',
      type: 'string',
      title: 'Youtube link',
    }, {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    } 
  ]
}