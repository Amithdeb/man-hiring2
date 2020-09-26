import React, { useState } from 'react';
import Data from '../src/Components/Data/data.json';
import Person from './Components/Person/Person';
import Hire from './Components/Hire/Hire';
function App() {
  const [user,setuser]=useState([])
  const handlePeople=(y)=>{
    const newpeople=[...user,y]
    setuser(newpeople)
  }
  return (
    <div >
      {Data.map(x=><Person person={x} handlepeople={handlePeople}></Person>)}
      <Hire user={user} ></Hire>
    </div>
  );
}

export default App;
