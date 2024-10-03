export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }, {
      name: 'description',
      type: 'string',
      title: 'Short description',
    }, {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    }, {
      name: 'image',
      type: 'image',
      title: 'Image',
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