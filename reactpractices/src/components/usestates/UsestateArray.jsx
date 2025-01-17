import React, { useState } from 'react'

const UsestateArray = () => {
    const employ=[
        {
            id:1,
            name:"tufgaming",
            company:"asus",
            operating:"windows"
        },
        {
            id:2,
            name:"vivobook",
            company:"HP",
            operating:"windows"
        }
    ]
    const [laptop,setlaptop]=useState(employ)
    const deletehandle=(comingid)=>{
        const filterdata=laptop.filter((emp)=>{
            return emp.id !== comingid;
        });
      
       setlaptop(filterdata);
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
                <button onClick={deletehandle(id)}>Delete</button>
                </li>
        })}

        </ul>
    </div>
  )
}

export default UsestateArray