import React,{useContext} from 'react'
// import darlana from'./darlana.css';
import media from'./media-query.css';
import paymentStyle from './payment-page.css';
import { ProContext } from "./../App";
import { useState } from 'react';


export default function Payment() {
    const { Cart , onAdd } = useContext(ProContext);
    const[Total,SetTotal]=useState();

    const alltotal=(a)=>
    <>
    SetTotal{((prev)=>prev+a)};
    </>

  return (
    <div>
              <div class="title-payment"style={{marginTop:"100px"}} >
            <div className='row text-center'>
                <h1 className='txtcolor fw-bold' style={{fontFamily:"-moz-initial",}}>Payment Page</h1>
                {/* textShadow:"2px 4px 4px #000033" */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in aliquam erat parturient elementum ornare consectetur laoreet nisl.</p>
            </div>
        </div>
        <div class="content-payment shadow-lg" style={{marginBottom:"200px"}}>
            <div class="order-summary">
                <div class="title-sumary">
                    <h4 className='txtcolor' >Order Summary</h4>
                </div>
                <div class="order-prodect">
                {Cart.map((i)=>
           
           <div className='d-flex  py-3 border-bottom' style={{justifyContent:"space-between"}}>
             <div class="master-img-order">
                       
               <img src={i.image} style={{width:"100px"}}/>
               </div>
               <div>
               <p className='fw-bold txtcolor'>${i.price}</p>
               </div>
{/* {alltotal(i.price)} */}
           </div>

            )}
                    {/* <div class="text-order">
                        <p className='txtdarkblu text-end mt-4 fw-bold'>Total:$<span className='txtcolor fw-bold'>{Total}</span></p>
                    </div> */}
                    <div class="num-order">
                      
                    </div>
                </div> 
            
                {/* <div class="total-order">
                    <div class="text-order">
                        <p className='txtcolor'>Discount (10%)</p>
                        <p className='txtcolor'>Total:{Total}</p>
                    </div>
                    <div class="num-order">
                      
                    </div>
                </div> */}
                
            </div>

            <div class="card-payment">
                <div class="select-payment">
                    <p>Please select your card:</p>
                    <select name="" id="">
                        <option value="">Paypal</option>
                    </select>
                </div>
                <div class="img-payment">
                    {/* <img src="./assest/imges/paypal.png" alt="" srcset=""/> */}
                </div>
                <div class="form-payment">
                    <form action="">
                        <div class="flex">
                            <label for="">Card Name</label>
                            <input type="text" name="" id="" placeholder="Ahmad Alzahrany"/>
                        </div>
                        <div class="flex">
                            <label for="">Card Number</label>
                            <input type="text" name="" id="" placeholder="1243  4576  7839  2115"/>
                        </div>
                        <div class="row-flex">
                            <div>
                                <label for="">Expire date</label>
                                <input type="text" name="" id="" placeholder="08    /    22"/>    
                            </div>
                            <div>
                                <label for="">CVC</label>
                                <input type="text" name="" id="" placeholder="154"/>    
                            </div>
                        </div>
                        <div class="save-card">
                            <input type="checkbox" name="" id=""/>
                            <label for="">Save card</label>
                        </div>
                        <button>Confirm Payment</button>
                    </form>
                </div>
            </div>

        
        </div>
    </div>
  )
}
