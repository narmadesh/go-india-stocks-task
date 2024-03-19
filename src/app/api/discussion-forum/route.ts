export async function GET() {
    const data = [
        {
            title:'Lorem Ipsum',
            sector:'Sector 2',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?',
            likes:'2k',
            views:'2k',
            comments:'2k',
            postedOn:'2 min ago'
        },
        {
            title:'Lorem Ipsum',
            sector:'Sector 2',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?',
            likes:'2k',
            views:'2k',
            comments:'2k',
            postedOn:'2 min ago'
        },
        {
            title:'Lorem Ipsum',
            sector:'Sector 2',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?',
            likes:'2k',
            views:'2k',
            comments:'2k',
            postedOn:'2 min ago'
        },
        {
            title:'Lorem Ipsum',
            sector:'Sector 2',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?',
            likes:'2k',
            views:'2k',
            comments:'2k',
            postedOn:'2 min ago'
        }
    ];
    return Response.json(data)
  }