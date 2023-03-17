import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { ProContext } from "./../App";
import Product from "./ProductCat";
import Style from'./Style.css';

export default function Shop() {
  const { Cart , onAdd } = useContext(ProContext);

  // const [quentity, Setquentity]=useState(1);

const Increment=(id)=>{
  // Cart.map((item)=>{
    console.log(id);
  // });

  // for(let key in obj){
  //   console.log(obj[key]);
  // }

}

// const Decrement=(id)=>{
//   Cart.map((item)=>item.id===id)
//   if(quentity<=1)return;
//   Setquentity(prev=>prev-1);

// }




// const[Num,SetNum]=useState(1);


//       function incressquentity(idd){
//         console.log("*******");

//   return Cart.map((i)=>{
//     console.log("*******");

//     if(i.id==idd){
//       return[...Cart,Setquentity(quentity+1)]


//     }

//   else{return i}
// });

// }



// function ChangeQuentity(event){
//     console.log(quentity);
// if(event.target.value<1)return;
// Setquentity(event.target.value);
// console.log(quentity);
// }







  return (
    <div>
        
      <h1  className="mt-5 mb-5 fw-bold txtdarkblu" style={{fontFamily:"-moz-initial"}}>Cart Page</h1>
          <div className="container">
            <div className="row g-5 mb-5">
            
              {Cart.map((item) => (
             <div class="col-md-3 col-lg-4 mb-4 all  g-5 " key={item.id} >
              {/* <li className="" style={{listStyleType: 'none'}}  key={item.toString()}></li> */}
               <div class="card w-75 box g-5 ">
             <Product
              id={item.id}
              img={item.image}
              // name={item.name}
              // price={item.price*quentity}
              price={item.price}

              // rating={item.rating}
              
            ></Product>
            {/* <p>quentity:{quentity}</p> */}
            <div className="d-flex" style={{justifyContent:"center"}}>
              {/* <button className="btn bgcolor text-white ms-2 me-2">-</button> */}
           {/* <input type="" readonly value={quentity} onChange={ChangeQuentity}/>  */}

              {/* <h4 className=" ms-1 me-1">{quentity}</h4> */}
              {/* <button onClick={()=>Increment(item.id)} className="btn bgcolor text-white  ms-2 me-2">+</button> */}

              </div>
            {/* <input className="d-flex text-start w-25" type="number" value={quentity} onChange={ChangeQuentity} min="1"/> */}
            {/* <p><span className='txtcolor fw-bold text-start'>Total:</span>  {quentity*item.price}</p> */}



{/* 
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" onClick={()=>Decrement(item.id)}>-</button>

  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" value={quentity}/>
  <button class="btn btn-outline-secondary" type="button" onClick={()=>Increment(item.id)}>+</button>

</div>
<p>Price:{quentity}</p> */}
              </div>
              </div>

          )
        
          )}

             
            </div>
         
<div className="row g-5 mb-5 text-center d-flex" style={{justifyContent:"center"}}>
<button className="btn bgdarkblu text-white w-25 d-flex" style={{justifyContent:"center"}}><Link className="text-decoration-none text-white" to="/Buy">Buy Now</Link></button>
     
</div>
           </div>
    </div>
  );
}
