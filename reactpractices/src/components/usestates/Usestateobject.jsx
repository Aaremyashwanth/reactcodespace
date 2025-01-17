import React, { useState } from 'react'

const Usestateobject = () => {
    
    //if u need to write in function>>write inside return
    //we can use usestate no.of times
    const empolye={
        name:"yashwanth",
        city:"hydrabad",
        college:"vnrvjiet"
    };
    const[data,setdata]=useState(empolye)
    const setvaluehandler=()=>{
      
      setdata({
        ...data,
        name:"aarem"})
    }
  return (
    <div>Usestateobject
        <div>{data.name}</div>
      <button onClick={setvaluehandler}>change value</button>
    </div>
  )
}

export default Usestateobject