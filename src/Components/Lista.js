import React,{useContext} from 'react'
import imgg from '../images/img.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img12 from '../images/img12.png';
import img13 from '../images/img13.png';
import img14 from '../images/img14.png';
import img15 from '../images/img15.png';
import img16 from '../images/img16.png';
import img17 from '../images/img17.jpg';
import { ProContext } from "../App";
import iimg from '../images/2img.webp';
import Header from './Header';
import Style from'./Style.css';
import {Link} from 'react-router-dom';


export default function Lista() {
  return (
    <div>
      <ContainerFliud/>
      <ListaProduct/>
    </div>
  )
}

export  function ListaProduct() {
  const { Cart, RemoveFromCart, AddCart, isExists } = useContext(ProContext);

    const data=[
        {
        id:"1",
        name:"img1",
        catergory:"dress",
        price:"1000",
        rating:"💛💛💛💛",
        img:imgg
    },

    {
        id:"2",
        name:"img2",
        catergory:"dress",
        price:"2000",
        rating:"💛💛💛",
        img:img2
    },
    {
        id:"3",
        name:"img3",
        catergory:"dress",
        price:"3000",
        rating:"💛",
        img:img3
    },
    {
        id:"4",
        name:"img4",
        catergory:"dress",
        price:"4000",
        rating:"💛💛💛💛",
        img:img4
    },

    {
        id:"5",
        name:"img5",
        catergory:"dress",
        price:"5000",
        rating:"💛💛💛",
        img:img5
    },

    {
        id:"6",
        name:"img6",
        catergory:"dress",
        price:"6000",
        rating:"💛💛💛",
        img:img6
    },

    {
        id:"7",
        name:"img7",
        catergory:"dress",
        price:"7000",
        rating:"💛💛💛",
        img:img7
    },

    {
        id:"8",
        name:"img8",
        catergory:"dress",
        price:"8000",
        rating:"💛💛💛",
        img:img8
    },
    {
        id:"9",
        name:"img9",
        catergory:"dress",
        price:"9000",
        rating:"💛💛💛",
        img:imgg
    },
    {
        id:"10",
        name:"img10",
        catergory:"dress",
        price:"10000",
        rating:"💛💛💛",
        img:img10
    },
    {
        id:"11",
        name:"img11",
        catergory:"dress",
        price:"11000",
        rating:"💛💛💛",
        img:img11
    },

    {
        id:"12",
        name:"img12",
        catergory:"dress",
        price:"12000",
        rating:"💛💛💛",
        img:img12
    },
    {
        id:"13",
        name:"img13",
        catergory:"dress",
        price:"13000",
        rating:"💛💛💛",
        img:img13
    },
    {
        id:"14",
        name:"img14",
        catergory:"dress",
        price:"14000",
        rating:"💛💛💛",
        img:img14
    },
    {
        id:"15",
        name:"img15",
        catergory:"dress",
        price:"15000",
        rating:"💛💛💛",
        img:img15
    },
    {
        id:"16",
        name:"img16",
        catergory:"dress",
        price:"16000",
        rating:"💛💛💛",
        img:img16
    },
    {
        id:"17",
        name:"img17",
        catergory:"dress",
        price:"17000",
        rating:"💛💛💛",
        img:img17
    },



]

function ShowPRoducts(){
    <div className='container'>
        <div className='row'>
            {data.map((pro)=><>
            
            <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                <div >
                    <img src={pro.img}/>
                </div>
                <p>{pro.id}</p>
                <p>{pro.price}</p>
            </div>
            </>)}
        </div>
    </div>
console.log("aaa@@@@@@@@@@@@@@@");

}
  return (
    <div>
   
      {/* { ShowPRoducts()} */}


      {/* <div className='container '>
    <div className='row g-5'>
            <h1 className='fw-bold fs-1 mt-5 pt-5  animate__pulse  see' style={{fontFamily:"-moz-initial"}}>Exclusive Products</h1>
            <>
         

{data.map((el)=>
             <div class="col-md-3 col-lg-4 mb-4 all  g-5 " >
 <li className="" style={{listStyleType: 'none'}}  key={el.toString()}></li>

    <div class="card w-75 box g-5 ">
        <div className='img-box h-100 text-center p-4'>
      <img src={el.img} class="card-img-top w-100  " alt="..." height={250}/>
      </div>
      <div class="card-body">
        <p>{el.name}</p>

      <p class="card-text animate__pulse "><span className='fw-bold txtcolor'>Price:</span> ${el.price}</p>

        <p> {el.rating}</p>


<button
                    onClick={
                      isExists(el)
                        ? () => RemoveFromCart(el)
                        : () => AddCart(el)
                    }
                    className="btn btn-outline-success"
                  >
                    {isExists(el) ? "Remove" : "Add"}
                  </button>
      </div>


      </div>
    
    
</div>
  )}

  </>
   
   </div>
</div> */}

        


<div>
  <div className='container'>
    <div className='row g-4'>
    <h1 className='fw-bold fs-1 mt-5 pt-5 mb-5  animate__pulse  see' style={{fontFamily:"-moz-initial"}}>Exclusive Products</h1>

    {data.map((item)=>

      <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'  key={item.toString()}>
    

<div class="card mb-3 " style={{maxWidth: "540px",borderColor:"#000066"}}>
  <div class="row" >

  
    <div class="col-md-4">
      <img className='h-100 w-100' src={item.img} style={{width:"100px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div className='card-footer bg-white ' style={{borderTop:"none"}}>
      <button
                    onClick={
                      isExists(item)
                        ? () => RemoveFromCart(item)
                        : () => AddCart(item)
                    }
                    className="btn btn-outline-success"
                  >
                    {isExists(item) ? "Remove" : "Add"}
                  </button>
      </div>
    </div>
  </div>
    

</div>
 
     
     </div>
     )}
    </div>
  </div>
</div>
    
    </div>


  )
}


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
