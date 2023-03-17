import React from 'react'
import iimg from '../images/2img.webp';

import {Link} from 'react-router-dom';

export  function ContainerFliud() {
    return (
      <div >
        <div class="container-fluid cf1 " style={{marginTop:"80px"}}>
                      <div class="container">
                          <div class="row pb-5  ">
                              <div class="col-xs  col-sm-12   col-md-auto  col-lg-6  ">
                                  <div class=" d-block text-sm-center  text-md-center text-lg-start">
  
  
                                      <p class="animated fadeInUp text-secondary  mt-5">Absulutely Hot Collections 🔥</p>
                                      <h1 class="animated fadeInUp  txtdarkblu fw-bold">
                                   
                                      The Best Place To Finde And Buy Amazing Products </h1>
  
                                      <p class="animated fadeInUp text-secondary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit Ornare nisi, at sede integer nec, velit vulputate est at.</p>
                                      <div class="mt-5 mb-5 translate rounded ">
                                          <Link class="animated fadeInUp p-4 px-5 rounded  text-white text-decoration-none bgcolor2 " to="/Shop">SHOP COLLECTION</Link>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col col-sm-auto col-md-auto  col-lg-6  ">
                                  <div class=" hero-image2 w-100 h-100 wow ">
                              
                                      <img class="img-fluid w-100  rounded" src={iimg} />
                                  </div>
  
  
                              </div>
                          </div>
                      </div>
                  </div>
      </div>
    )
  }
  
