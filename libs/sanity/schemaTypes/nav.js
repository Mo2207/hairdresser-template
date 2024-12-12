export default {
  name: 'navigation',
  title: 'Navigation',
  maxCount: 1,
  type: 'document',
  // readOnly: true,
  // type: 'array',
  // of: [{type: 'block'}],
  fields: [
      {
          name: "title",
          type: "string",
          title: "Title"
        },
        {
          name: 'navId',
          type: 'slug',
          title: "Navigation Id"
        },
  ]
}