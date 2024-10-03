export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }, {
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }, {
      name: 'date',
      type: 'string',
      title: 'Date',
    }, {
      name: 'comments',
      type: 'string',
      title: 'Comments',
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