import { cn } from '@/lib/utils'
import React from 'react'



const Badges = ({className} : any) => {

  return (
    <div className={cn(className," text-black flex flex-col items-center justify-center md:gap-x-4 gap-y-4 text-xl font-semibold")}>
        
        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500'>Our Solution is </h1>
       
        <div className="flex flex-col md:flex-row">
          <p>User friendly ✅</p>
          <p>Efficient Computer Resource Usage ✅</p>
          <p>Accurate Detection ✅</p>
        </div>
        

    </div>
  )
}

export default Badges