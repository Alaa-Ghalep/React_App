import React ,{useContext}from 'react'
import { ProContext } from "./../App";

export default function Buy() {
  const { Cart , onAdd } = useContext(ProContext);

  return (
    <div>
      <div className='container-fliud'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
          <div>
            {Cart.map((i)=>
           
<div className='d-flex'>
    <img src={i.image} style={{width:"100px"}}/>
    <p>${i.price}</p>
</div>
 )}
          </div>
                </div>
                <div className='col-lg-5 bg-danger'>
<div>

</div>
                </div>
                <div className='col-lg-1'></div>

            </div>
        </div>
      </div>
    </div>
  )
}
