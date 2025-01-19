import React, { useState } from 'react'

const UsestateArray = () => {
    const employ=[
        {
            id:"1abbc",
            name:"tufgaming",
            company:"asus",
            operating:"windows"
        },
        {
            id:"2accv",
            name:"vivobook",
            company:"HP",
            operating:"windows"
        }
    ]
    const [laptop,setlaptop]=useState(employ)
    const deletehandle=(comingid)=>{
        console.log(comingid);
        const de=laptop.filter((e)=>e.id!==comingid)
        // const filterdata=laptop.filter((emp)=>{
        //     return emp.id !== comingid;
        // });
      
       setlaptop(de);
    }
  return (
    <div>UsestateArray
        <ul>
        {laptop.map((emp,index)=>{
            const {id,name,company,operating}=emp;
            return <li key={index}>
                <div>{name}</div>
                <div>{company}</div>
                <div>{operating}</div>
                <button onClick={()=>deletehandle(id)}>Delete</button>
                </li>
        })}

        </ul>
    </div>
  )
}

export default UsestateArray