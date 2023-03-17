import React, { Component } from 'react'
// import logo from'../images/logo2.jpg';
import logo from'../images/0logo.png';
import icon1 from'../images/icon1.png';
import fac1 from'../images/face1.png';
import fac2 from'../images/face2.png';
import insta1 from'../images/insta1.png';
import insta2 from'../images/insta2.png';
import twitter1 from'../images/twitter1.png';
import twitter2 from'../images/twitter2.png';
import home1 from'../images/home1.png';
import car1 from'../images/car1.png';
import like1 from'../images/like1.png';










// style={{backgroundColor:"rgb(270, 142, 175)"}}


export default class Footer2 extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid bgdarkblu' >
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center p-5'>
                        <div>
                            <div className='mb-2'><img src={home1} 
                         style={{borderRadius:"50%"
                         // ,backgroundColor:" rgb(247, 195, 212)",
                         ,backgroundColor:" #ccccff",  padding:"20px"}}/>
                         </div>
                            <p className='text-white'>Safe shoppingBuy with confidence</p>

                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center px-5 py-5'>
                        <div>
                        <div className='mb-2'><img src={car1} style={{borderRadius:"50%"
                        // ,backgroundColor:" rgb(247, 195, 212)",
                        ,backgroundColor:" #ccccff",  padding:"20px"}}/>
                         </div>
                     <p className='text-white'> Fast shipping Get your product fast</p>


                        </div>
                    </div>  <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center p-5'>
                        <div>
                        <div className='mb-2'><img src={like1} style={{borderRadius:"50%"
                        // ,backgroundColor:" rgb(247, 195, 212)",
                        ,backgroundColor:" #ccccff",  padding:"20px"}}/>
                         </div>                            <p className='text-white'> Satisfaction guaranteeOr get your money back</p>


                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-3 border-top footer w-100">

<div className='container'>

    

<nav class="navbar navbar-expand-md navbar-light text-center m-auto mt-3">
    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
    <div>
                  <img src={logo} style={{borderRadius:"50%",width:"99px"}}/>
                 </div>  
                
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                                <div class="text-center pt-4">
                                    <p className='text-white'> Template design by<span className='fw-bold'> Alaa Abu Hamra</span> - Image License InfoPowered by Webflow</p>

                                </div>


                            </div>
            
               
               
                 <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                 <div >
                    <a href='#'><img src={fac1} className='me-2 ms-2'/></a>
                    <a href='#'> <img src={insta1} className='me-2 ms-2'/></a>
                    <a href='#'><img src={twitter1} className='me-2 ms-2'/></a>

                 </div>
        </div>    
    </nav>

</div>                     
  </div>      
        </div>
      </div>
    )
  }
}
