const software_product = {
    name: 'software_product',
    title: 'Software_product',
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
        title: 'Description',
        type: 'string', 
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number', 
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name:'views',
        title:'Views',
        type:'number',
        initialValue: 0,
      },
      {
        name:'STRIPE_product_ID',
        title:'STRIPE_PRODUCT_ID',
        type:'string',
        initialValue: 0,
      },
      {
        name:'STRIPE_price_ID',
        title:'STRIPE_PRICE_ID',
        type:'string',
        initialValue: 0,
      },
      {
        name:'stars',
        title:'Stars',
        type:'number',
        initialValue: 0,
      },
      {
        name:'poster',
        title:'Poster',
        type:'image',
        validation: (Rule: any) => Rule.required(),
        options:{
          hotspot:true,
        },
      },
      
      {
        name: 'downloadLink',
        title: 'DownloadLink',
        type: 'string', 
        require,
        validation: (Rule: any) => Rule.required()
      },
    ]
  }
  
  export default software_product