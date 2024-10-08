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
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    }, {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: ['Eyebrow Wax', 'Eyebrow Tint & Shape', 'Eyebrows Lamination', 'Eyelash Lift and Tint', 'Classic Fill', 'Classic Full Set']
      }
    }
  ]
}