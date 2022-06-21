import React, { useState } from 'react';
import axios from 'axios';


export default function HomePage() {
  const [data, setData]= useState("");
  const getDataFrom=()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then (res=>{
    console.log(res.data.title);
    setData(res.data.title);
    }).catch(err=>{

    })
  }
  
    return (
    <div>
        <button onClick={getDataFrom}>Click</button>
        <span>{data}</span>
    </div>
  )
}
