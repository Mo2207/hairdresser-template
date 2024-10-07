
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
      title: 'Date',
      type: 'date',
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