import React from 'react'
import Card from './Card'

function Tours({tours,removeTourHandler}) {
  return (
    <div className='flex-col w-[100vw] h-[100vh]'>

    <div className='flex text-center justify-center text-4xl my-4 '>
    <h2 className='border-dashed border-2 border-sky-500 px-8 py-3 rounded-md text-center bg-violet-200 cursor-pointer'>Choose Your Destination</h2>
    </div>

    <div className='flex flex-wrap w-[1300px] justify-center items-center mx-auto'>

    {/* it maps all 7 card entry and ...tour it will spread all entry */}
      { 
        tours.map( (tour) =>{
          return <Card {...tour} removeTourHandler = {removeTourHandler}></Card>
        })
      }
    </div>
    
   
      
    </div>
  )
}

export default Tours
