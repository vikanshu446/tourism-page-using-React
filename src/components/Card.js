import React, { useState } from 'react'

function Card({id, image , info , name , price, removeTourHandler}) {

  const[readmore , setReadmore] = useState(false)


  const description = readmore ? info :`${info.substring(0,200)}...`

  
  function readmoreHandler(){
    setReadmore(!readmore);
  } 

  
  
  return (
   
    <div className='card w-[400px] box flex-col p-1 m-1 align-center border-2 rounded-md border-violet-100 pl-2 pt-2'> 

      <img src = {image} className='image w-[380px] h-[350px] aspect-square object-cover rounded-md '></img>

      <div className='tour-info'>
        <div  className='tour details  text-xl'>
          <h4 className='price text-teal-800'> $ {price}</h4> 
          <h4 className='name mb-2'>{name}</h4>
        </div>

        <div className='description w-[350px] '>{description}
          <span onClick={readmoreHandler} className='text-indigo-500     cursor-pointer'>
            {readmore ? 'show less' : 'readmore'}
          </span>
        </div>
      </div>
      
      <button className='not intrested bg-violet-200 px-2 my-2 rounded-md py-1 text-xl hover:text-violet-600 tranisition-transform' onClick={() => removeTourHandler(id)}>Not Intrested</button>
    </div>
   
  )
}

export default Card
