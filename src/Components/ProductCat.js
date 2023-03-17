import React, { useContext } from "react";
import { ProContext } from "../App";
import Style from'./Style.css';

export default function ProductCat({ id, name, price, rating, img }) {
  const { RemoveFromCart, AddCart, isExists } = useContext(ProContext);
  const pro = { id, name, price, rating, img };

  return (

    
    <div className="row text-center">
      
         <div className='img-box h-100 text-center p-4'>
              <img src={img} width={100} alt="" />

              </div>
      {/* <img src={img} width={100} alt="" /> */}
      <div class="card-body">
      {/* <p>{id}</p> */}
      <p>{name}</p>
      <p class="card-text  "><span className='fw-bold txtcolor'>Price:</span> ${price}</p>

      <p>{rating}</p>
      </div>
      <div class="card-body">
      <button
        onClick={isExists(pro) ? () => RemoveFromCart(pro) : () => AddCart(pro)}
        className="btn bgdarkblu text-white"
      >
        {isExists(pro) ? "Remove " : " Add To Cart"}
      </button>
      </div>
    </div>
  );
}
