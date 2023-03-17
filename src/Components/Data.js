import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Data() {
    const [List, setListOfOrder] = useState([]);

    useEffect(()=>

{

//     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
// {
//     setListOfOrder(res.data)
// console.log(res.data)
// });
  fetch("https://gitlswebsite.000webhostapp.com/public/api/getItem").then((res)=>res.json()).then((data)=> {

    setListOfOrder(data.data)
  console.log(data.data)
  console.log({List})
})
},
[]);

    return (
    <div>
          <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">photo_id</th>

                   




                </tr>
            </thead>
             
             <tbody>
                {List.map((el)=><tr>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.description}</td>
                    <td>{el.photo_id}</td>

                   
                   
                </tr>)}
               
              
            </tbody> 
        </table>

    </div>
  )
}
