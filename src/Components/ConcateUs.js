import React, { Component ,useState,useContext} from 'react'
import img2 from'../images/img2.webp';
import { useHistory } from 'react-router-dom';
import logo from'../images/0logo.png';
import bgconcatus from'../images/bgconcatus.png';
import bgconcaaat from'../images/bgconcaaat.jpg';


import { useEffect } from 'react';
import Header from './Header';
import { ProContext } from "../App";
import Footer2 from './Footer2';




export default function ConcateUs() {
    const[Email,SetEmail]=useState();
    const[Password,SetPassword]=useState();
    const { Cart} = useContext(ProContext);

  return (
    <div>
      <Header cart={Cart.length}/>
        <div className='container-fluid  py-auto w-100' style={{height:"500px" ,backgroundImage: `url(${bgconcaaat})`,backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"conver"}}>
<div className='container'>
    <div className='row text-center   '>
            <div className=''  style={{justifyItems:"center",justifyContent:"center",textAlign:"center", 
         verticalAlign:"center", paddingTop:"150px"}}>
        <h1 className='fw-bold txtdarkblu' style={{fontSize:"77px", fontFamily:"-moz-initial"}}>Contact us</h1>
        <p className='px-5' style={{fontSize:"19px", fontFamily:"initial"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
        </div>
    </div>
</div>
        </div>
    <div className='container-fluid ' style={{marginTop:"100px",marginBottom:"155px"}}>         
  <div className='container mt-5 mb-5'>
      <div className='row mt-5'>




<div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-6 py-3 px-5 '>
    <div className=' '>
    <h3 className='text-start' style={{color:"darkblue",}}><span className='fw-bold txtcolor' style={{fontSize:"36px",fontFamily:"-moz-initial"}}>Get in touch </span> with us.</h3>
    <p className='text-secondary text-start'>Question about our products or services? Feel free to send us an email any time. We'd love to hear from you.</p>
<div>

<div>
    <div className='row mt-4 mb-4'>
        <div className='col-lg-6'>
            
<input  class="form-control active"  type="text" placeholder='First Name' value={Email}  onChange={(e)=>SetEmail(e.target.value)}/>
        </div>
        <div className='col-lg-6'>
            
            <input  class="form-control active"  type="text" placeholder='Last Name' value={Email}  onChange={(e)=>SetEmail(e.target.value)}/>
                    </div>
    </div>
<input  class="form-control mb-4 active"  type="email" placeholder='Email' value={Email}  onChange={(e)=>SetEmail(e.target.value)}/>

<input  class="form-control mb-4 active " style={{border:"bottom"}}  type="text" placeholder='Phone Number' value={Password}  onChange={(e)=>SetPassword(e.target.value)}/>
<textarea  class="form-control mb-4 active"  type="text" placeholder='Your Message' value={Password}  onChange={(e)=>SetPassword(e.target.value)}/>

<div>
<button    className='btn text-white fw-bold mb-2 d-flex text-start px-4 py-2' 
 style={{backgroundColor:"rgb(224, 48, 107)", backgroundRepeat:"no-repeat", backgroundPositionY:"top", backgroundSize:"conver"}}>Send</button>
</div>
</div>

</div>

</div>
    </div>



    <div className='col-sm-12 col-md-12 col-lg-6 py-3 px-5 'style={{backgroundImage: `url(${bgconcatus})`}}> 

</div>

</div>
</div>

            </div>
      </div>
      </div>
      <Footer2/>
  </div>
  )
}
