import React from 'react';
import axios from 'axios';

export default function HomePage() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then (res=>{
    console.log(res.data.content);
    }).catch(err=>{

    })
    return (
    <div>
        
    </div>
  )
}
