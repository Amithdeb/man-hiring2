import React, { useState } from 'react';
import Data from '../src/Components/Data/data.json';
import Person from './Components/Person/Person';
import Hire from './Components/Hire/Hire';
function App() {
  const [user,setuser]=useState([])
  const handlepeople=(y)=>{
    const newpeople=[...user,y]
    setuser(newpeople)
  }
  return (<div style={{display:"flex"}}>
    <div >
      {Data.map(x=><Person person={x} handlepeople={handlepeople}></Person>)}
      
    </div>
    <div><Hire user={user} ></Hire></div></div>
  );
}

export default App;
