import {React,useContext} from 'react'
import slider1 from'../images/slider1.png';
import slider2 from'../images/slider2.png';
import slider3 from'../images/slider3.png';
import Header from './Header';
import Style from'./Style.css';
import { ProContext } from "../App";
import Footer2 from './Footer2';




export default function Section2() {
  const { Cart} = useContext(ProContext);

    const list=[
        {
        img:"https://gamaluk.com/wp-content/uploads/2019/01/%D8%A7%D9%84%D8%AC%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9-%D8%B9%D9%81%D8%B1%D8%A7%D8%A1-%D8%B3%D8%A7%D8%B1%D8%A7%D8%AA%D8%B4-%D8%A7%D9%88%D8%BA%D9%84%D9%88.jpg",
        name:"Afra Sarach",
        comment:"Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
    {
        img:"https://elwekalanews.com/wp-content/uploads/2018/11/2-28-300x300.jpg",
        name:"Nafas",
        comment:"Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },        {
        img:"https://themewagon.github.io/famms/images/client.jpg",
        name:"Sara gh",
        comment:"Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
];



return(
    <div>
      <Header cart={Cart.length}/>
   <div className='container-fliud mb-5 bgcolor2'>
        <div className='container mb-5'>
            <div className='row mb-5 text-center'>
<h1 className='text-white fw-bold py-5 '>Testimonial</h1>
            </div>
        </div>
      </div>


      <div id="carouselExampleIndicators" class="carousel slide" style={{marginTop:"90px",marginBottom:"140px"}}> 

  <div className='container'>
    <div className='row'>
        <h1 className='txtdarkblu mb-5' style={{fontFamily:"-moz-initial",fontSize:"44px"}}>Customer<span className='borderbottom'>'s T</span>estimonial</h1>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
      
  <div class="carousel-inner">  

    <div class="carousel-item active">
        <div className='d-flex' style={{justifyContent:"center", textAlign:"center", alignItem:"center"}}>
            <div>

  <button style={{borderRadius:"50%", width:"50px", height:"50px" , marginTop:"50px",color:"#000066"}} class="carousel-control-prev bgcolor2 ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
            </div>
        <div >
      <img className='img-box' src="https://gamaluk.com/wp-content/uploads/2019/01/%D8%A7%D9%84%D8%AC%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9-%D8%B9%D9%81%D8%B1%D8%A7%D8%A1-%D8%B3%D8%A7%D8%B1%D8%A7%D8%AA%D8%B4-%D8%A7%D9%88%D8%BA%D9%84%D9%88.jpg" style={{backgroundColor:"linear-gradient(900deg,#f8f6f4  34%,transparent)",borderRadius:"50%",width:"150px"}}/>
      <p className='pt-3 txtcolor'>Afra Sarach</p>
      <p className='fw-bold txtdarkblue'>Customer</p>
            <p className='text-secondary'>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
        </div>
        <div>
        <button style={{borderRadius:"50%",width:"50px",  height:"50px" , marginTop:"50px"}} class="carousel-control-next fw-bold bgcolor2 me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        </div>
     
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
     

    <div class="carousel-item ">
        <div className='d-flex' style={{justifyContent:"center", textAlign:"center", alignItem:"center"}}>
            <div>

  <button style={{borderRadius:"50%", width:"50px", height:"50px" , marginTop:"50px",color:"#000066"}} class="carousel-control-prev bgcolor2 ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
            </div>
        <div >
      <img className='img-box' src="https://elwekalanews.com/wp-content/uploads/2018/11/2-28-300x300.jpg" style={{backgroundColor:"linear-gradient(900deg,#f8f6f4  34%,transparent)",borderRadius:"50%",width:"150px"}}/>
      <p className='pt-3 txtcolor'>Nafas</p>
      <p className='fw-bold txtdarkblue'>Customer</p>
      <p className='text-secondary'>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>        </div>
        <div>
        <button style={{borderRadius:"50%",width:"50px",  height:"50px" , marginTop:"50px"}} class="carousel-control-next fw-bold bgcolor2 me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        </div>
     
      <div class="carousel-caption d-none d-md-block">

      </div>
  
  
  
    </div> <div class="carousel-item ">
        <div className='d-flex' style={{justifyContent:"center", textAlign:"center", alignItem:"center"}}>
            <div>

  <button style={{borderRadius:"50%", width:"50px", height:"50px" , marginTop:"50px",color:"#000066"}} class="carousel-control-prev bgcolor2 ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
            </div>
        <div >
      <img className='img-box' src="https://themewagon.github.io/famms/images/client.jpg" style={{backgroundColor:"linear-gradient(900deg,#f8f6f4  34%,transparent)",borderRadius:"50%",width:"150px"}}/>
      <p className='pt-3 txtcolor'>Amany Alaa</p>
      <p className='fw-bold txtdarkblue'>Customer</p>
      <p className='text-secondary'>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>        </div>
        <div>
        <button style={{borderRadius:"50%",width:"50px",  height:"50px" , marginTop:"50px"}} class="carousel-control-next fw-bold bgcolor2 me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        </div>
     
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
      
  </div>
  <div className='col-lg-2'></div>

    </div>
  <div class="carousel_btn_box">
   
</div>
  </div>

</div>






<Footer2/>
    </div>
);
}
