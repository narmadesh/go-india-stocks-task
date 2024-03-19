export async function GET() {
    const data = [
        {
            title:'The Coldest Sunset',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?'
        },
        {
            title:'The Coldest Sunset',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?'
        },
        {
            title:'The Coldest Sunset',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?'
        },
        {
            title:'The Coldest Sunset',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro vel asperiores ducimus, repudiandae magnam rem excepturi. Harum deserunt veniam culpa inventore nobis, consequuntur consectetur molestias voluptate expedita porro sint?'
        }
    ];
    return Response.json(data)
  }