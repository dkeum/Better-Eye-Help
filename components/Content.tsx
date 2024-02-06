import Image from 'next/image'
import React from 'react'



interface ContentProp {
  title : string,
  description: string,
  image:string,
  swap?: boolean
}


const Content = ({title, description, image, swap=false} : ContentProp) => {
  return (
    <div className={`flex flex-col md:flex-row md:gap-x-20 gap-y-5 w-full justify-center p-10   ${swap === false ? '' : 'md:flex-row-reverse '}}`}>
      <div className="flex flex-col gap-y-5 text-center items-center justify-center ">
        <header className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>{title}</header>
        <p>{description}</p> 
      </div>
      <div 
        className={`
            flex 
            items-center 
            justify-center 
            max-w-[350px] 
            w-full 
            max-h-[350px] 
            h-full 
            bg-white 
            p-5 rounded-xl 
            ${swap === false ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' : 'md:flex-row-reverse bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}
            `}>
      <Image
        className="rounded-lg"
        src={image}
        alt="Page content image"
        width= {300}
        height={300}
      />
      </div>
      
      
    </div>
  )
}

export default Content