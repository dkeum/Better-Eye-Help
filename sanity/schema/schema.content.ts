const pageContent = {
  name: 'pagecontent',
  title: 'pageContent',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: ' Title',
      type: 'string', 
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: ' Description',
      type: 'string', 
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name:'poster',
      title:'Poster',
      type:'image',
      validation: (Rule: any) => Rule.required(),
      options:{
        hotspot:true,
      }
    },
  ]
}

export default pageContent