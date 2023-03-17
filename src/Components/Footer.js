import React, { Component } from 'react'
import icon from'../images/icon.png';

export default class Footer extends Component {
  render() {
    return (
        <div>
     
        <div class="container-fluid shadow pb-5" style={{backgroundColor:"white"}}>
        <div class="container-fluid border-bottom" style={{backgroundColor:"white"}}>

            
            <div className='container pb-3 pt-5'>
                <div className='row pt-5'>
                    <div className='col-lg-3'>
                    <div>
                 {/* <a href="index.html"> <img src={moon} class=" mb-3" /></a> */}
                        <p class=" px-3" style={{fontSize:"14px"}}>Darlana is one of the biggest GCC fashion companies. The customer is at the heart of our unique business model, which includes design, production, distribution, and sales, through our extensive retail network..</p>
                 </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='row '>
                            <div className='col-lg-6'>
                            <div class="colnn mb-5">
                        <h5 class="fw-bold   ">Darlana compony</h5>

                        <ul class="nav flex-column d-flex justify-content-end">
                            <li class="nav-item">    <a href="#" class="nav-link ">  Shipping & returns
</a></li>
                            <li class="nav-item">    <a href="#" class="nav-link"> Conditions of Use
 </a></li>
                            <li class="nav-item">    <a href="#" class="nav-link"> About us
 </a></li>
 <li class="nav-item">    <a href="#" class="nav-link"> Contact us

 </a></li>
                        </ul>
                    </div>
                            </div>
                            <div className='col-lg-6'>
                            <div className=''>
                <h5 class="fw-bold  "><span><img src={icon}/></span>My account</h5> 
        <ul class="nav flex-column">
    <li class="nav-item"><a href="#" class="nav-link">  My account </a></li>
    <li class="nav-item"><a href="#" class="nav-link">  Orders </a></li>

    <li class="nav-item"><a href="#" class="nav-link"> Shopping cart</a></li>
    <li class="nav-item">    <a href="#" class="nav-link">Wishlist</a></li>

                        </ul>
                    </div>  
                                    </div>
                        </div>
                        <div className='row'>
                            {/* <h5 className=' pb-2'>Payment method</h5> */}
                            <div className='d-flex'>
                              {/* <img className='me-2 ' style={{width:"60px"}} src={tabby}/>  
                              <img className='me-2 '  style={{width:"60px"}} src={tmara}/>  
                              <img className='me-2 ' style={{width:"60px"}}  src={visa}/>  
                              <img className='me-2 ' style={{width:"60px"}} src={mastercard}/>  
                              <img className='me-2 '  style={{width:"60px"}} src={hyperpay}/>   */}


                            </div>
                        </div>
                </div>

                <div className='col-lg-5'>
                <div>
        <h6 className='pb-2'>Subscribe to our newsletter and be the first to know about our updates.</h6>
        <div class="input-group mb-3">
<input type="text" class="form-control bgsecondary" style={{height:"55px"}} placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="button-addon2"/>
<button class="btn btn-secondary text-black" type="button" id="Subscrib">Subscrib</button>
</div>
 
        <h4 className=' pb-3 '>Follow us</h4>
        <div className='d-flex mb-5'>
        {/* <a href='#'><img className='me-4 ' style={{width:"35px"}} src={fac}/>  </a> */}
                              {/* <a href='#'> <img className='me-4 '  style={{width:"35px"}} src={you}/>  </a>
                            <a href='#'><img className='me-4 ' style={{width:"35px"}}  src={twi}/>  </a> 
                            <a href='#'> <img className='me-4 ' style={{width:"35px"}}  src={wats}/>  </a> 
 */}

                            </div>

    </div>
                </div>
            </div>
 
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='d-flex ' style={{justifyContent: "space-between"}}>

        <div><h6>Powered by Wasltec</h6></div>
        <div><h6>Copyright © 2022 Darlana Store.</h6></div>

    </div>
   </div>
    </div>

      </div>
      </div>
 
 );}}