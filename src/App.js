import React, { useState } from "react";
import data from './data'
import Tours from './components/Tours'

const App = () => {

  const[tours , setTours] = useState(data)


  // for refresh button << 
  if(tours.length===0){
    return(<div className="flex-col items-center justify-center h-screen">
      <h2 className=" text-2xl">No Tours Left</h2>

      <button onClick={() => setTours(data)} className="bg-violet-200 px-4 py-1 rounded-md cursor-pointer hover:text-violet-800 w-[150px] h-[40px] text-2xl my-4">Refresh</button>
    </div>
    )
  }

  

// for not intrested button  << remove the card on basis of id not match
  function removeTourHandler(id){
   const newTours = tours.filter(tour =>tour.id !== id);
   setTours(newTours)    
  }
  return <div>
    <Tours tours = {tours} removeTourHandler={removeTourHandler}></Tours>
  </div>
};

export default App;
