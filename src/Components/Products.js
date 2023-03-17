// import {React,useState,useEffect}  from 'react'
// import Skeleton from 'react-loading-skeleton';
// import { NavLink ,Link} from 'react-router-dom';
// // import bg from './bg.webp';
// // import bgg from'./bg.webp';

// // import Style from './Products.css';

// export default function Products() {


//     const PAGE_PRODUCTS='data';
//     const PAGE_CARTS='Carts';

 
//     const [Total,SetTotal]=useState();
//     function increaseCount(a) {
//       SetTotal((prevcount) => prevcount + a);
//     }
  
//     const alaa=(a)=>
//     <>
//        SetTotal{(prevCount => prevCount + a)}
//     </>
  
  
//   const [Cart,SetCart]=useState([]);
  
//   const AddToCart=(pro)=>{
//     SetCart([...Cart,{...pro}]);
//     console.log('Added To Cart');
//   }
//   const [Page,SetPage]=useState(PAGE_PRODUCTS);

  
  
//   const renderCarts=()=>
// <>



// <div className='container'>
//     <div className='row g-5'>
     
//       <div className='col-lg-4'></div>
//       <div className='col-lg-4'>
//         <div className='text-center p-4'>
//         <p className=' fs-1 mt-5 pt-5 '>See Products In Cart</p>
//         <div className='d-flex'  style={{justifyContent:"center"}}>
//         <button className='btn btn-outline-primary d-flex ms-4' onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>

//         </div>
     
//         </div>
//       </div>
//       <div className='col-lg-4'></div>

//             <>
          
//             {/* <button onClick={()=> navigateTo(PAGE_CARTS)}>Cart({Cart.length})</button> */}

    
// {Cart.map((el)=>
//              <div class="col-md-3 col-lg-4 mb-4 all  g-5 " >
//  <li key={el.toString()}></li>
//     <div class="card w-75 box g-5 ">
//         <div className='img-box h-100 text-center p-4'>
//       <img src={el.image} class="card-img-top" alt="..." height={250}/>
//       </div>
//       <div class="card-body">
//         <p>{el.category}</p>
//         <p class="card-text "><span className='text-danger'>Price:</span> ${el.price}</p>
// <button onClick={()=>RemoveFromCart(el)} className='btn btn-danger'>Remove From  cart</button>

//       </div>


//       </div>
//       {/* <button onClick={()=>increaseCount(el.price)}>Calc Total</button> */}
//       {() => SetTotal(Total + `${el.price}`)}
     

// </div>

//   )}
  
  
//   {/* {alaa(`${el.price}`)} */}
//   <p>Total:{Total}</p>
  
//   </>
//    <p>{Total}</p>
//    </div>
// </div>
  
  
  
  
//   </>



  
  
//   const navigateTo=(nextPage)=>{
  
//     SetPage(nextPage);
//   }
  
//   const RemoveFromCart=(productToRemove)=>{
  
//     SetCart(Cart.filter((pro)=>pro!==productToRemove))
//   }


//     const[listdata,Setdata]=useState([]);
//     const[fillter,Setfillter]=useState(listdata);
//     const[loading,Setloading]=useState(false);
//     let ComponentMounted=true;
//     useEffect(()=>{
//         const GetProducts=async()=>{
//             Setloading ( true);

 

//             fetch("https://gitlswebsite.000webhostapp.com/public/api/getItem").then((res)=>res.json()).then((dat)=> {

//             Setdata(dat.data)
//           console.log(dat.data)
//           console.log({fillter})

//         });
//             // const response=await fetch("https://gitlswebsite.000webhostapp.com/public/api/getItem")
//             // console.log("Response::", response);
//             // if(ComponentMounted){
//             //     Setdata(await response.clone().json());
//             //     Setfillter(await response.json());
//             //     console.log(listdata)
//             //     Setloading(false);
//             //     console.log(fillter);

//             // }
//             return    ComponentMounted=false;

//         }
//         GetProducts();

//     },[])
//     const Loading=()=>{
//         return  <><div className='col-md-3'><Skeleton height={350}/></div><div className='col-md-3'><Skeleton height={350}/></div><div className='col-md-3'><Skeleton height={350}/></div></>
//         //  <div><p>Loading....</p></div>
//     }

// const filterProduct=(cat)=>{
//     const UpdateList=listdata.filter((x)=>x.categorie.name===cat);
// Setfillter(UpdateList);}

// // function aa() {
// //     var rows = [];
// //     for (var i = 15; i < listdata.length; i++) {
       
// //         <div>
// //             rows.push(    <p>listdata[i].id</p>);
// //             {/* <p>listdata[i].id</p> */}
// //         </div>
// //     } 

// //     return (rows);
// // }

// const ShowProducts=()=>
//     <>


// {/* 
// <Header/> */}

// <div className='container'>
//     <div className='row g-5'>
//             <h1 className='fw-bold fs-1 mt-5 pt-5 '>See Products</h1>
//             <>
//             {/* <button onClick={()=> navigateTo(PAGE_CARTS)}><a ><img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' width="40px"/></a></button>
//      <span className=" badg badg-danger bg-danger p-1 px-2 text-white rounded" >{Cart.length}</span>

//             <button onClick={()=> navigateTo(PAGE_CARTS)}>Cart({Cart.length})</button>
//         <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button> */}

//             <div>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>Setfillter(listdata)} >All</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("\u0641\u0633\u0627\u062a\u064a\u0646")}>فساتين</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("\u062c\u0627\u0643\u064a\u062a")}> جاكيت</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("\u0628\u0644\u0627\u0637\u064a\u0646")}>بلاطين</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Elecotronic</button>

//         </div>
       

    
// {listdata.map((el)=>
//         //   <li key={number.toString()}></li>
//              <div class="col-md-3 col-lg-4 mb-4 all  g-5 " >
//  {/* <li key={el.toString()}></li> */}
//     <div class="card w-75 box g-5 " key={el.toString()}>
//         <div className='img-box h-100 text-center p-4'>
//       {/* <img src="https://gitlswebsite.000webhostapp.com/public/images/photo_item/${el.image}" class="card-img-top" alt="..." height={250}/> */}
//       <img className='' style={{width:"100px"}} src={`https://gitlswebsite.000webhostapp.com/public/images/photo_item/${el.photo.name_photo}`} />

//       </div>
//       <div class="card-body">
//         <p>ID:{el.id}</p>
//         <p>{el.name}</p>
//         <p>{el.categorie.name}</p>


//         {/* <p class="card-text "><span className='text-danger'>Price:</span> ${el.price}</p> */}

//         <NavLink to={`Product/${el.id}`} className="btn btn-outline-dark ms-2 me-2">Details</NavLink>
//         <button onClick={()=>AddToCart(el)} className='btn btn-outline-dark ms-2 me-2'>Add To Cart</button>
//       </div>


//       </div>
    
    
// </div>
//   )}
  
  
  
  
//   </>
   
//    </div>
// </div>



//   </>



//   return (
// <div>


// {/* <Navbar cart={Cart.length}/> */}
        
// <nav class="navbar navbar-expand-lg bg-ligh w-100 py-3">
//   <div class="container-fluid">
//     <a class="navbar-brand  fw-bold fs-3" href="#">Shooping</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav  mx-auto ">
          
//               <li class="nav-item">   <Link class="nav-link text-danger fw-bold" to="/Products"> Products</Link></li> 
//               <li class="nav-item">   <Link class="nav-link text-danger fw-bold" to="/Product"> Product</Link></li> 
//               <li class="nav-item">   <Link class="nav-link text-danger fw-bold" to="/Cart"> Cart</Link></li> 
//               <li class="nav-item">   <Link class="nav-link text-danger fw-bold" to="/CartItem"> CartItem</Link></li> 

//              </ul>
    
//     </div>

//     <div>
//           <button onClick={()=> navigateTo(PAGE_CARTS)}><a ><img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' width="40px"/></a></button>
//      <span className=" badg badg-danger bg-danger p-1 px-2 text-white rounded" >{Cart.length}</span>


//       </div>

//   </div>
// </nav>


// {/* <Header/> */}







//       {Page===PAGE_PRODUCTS && ShowProducts()}
//       {/* {Page===PAGE_PRODUCTS && aa()} */}

//       {Page===PAGE_CARTS && renderCarts()}

// {/* 


// <div className='container'>
//     <div className='row g-5'>
//             <h1 className='fw-bold fs-1 mt-5 pt-5 '>See Products</h1>
//             <>
//             <button onClick={()=> navigateTo(PAGE_CARTS)}><a ><img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' width="40px"/></a></button>
//      <span className=" badg badg-danger bg-danger p-1 px-2 text-white rounded" >{Cart.length}</span>

//             <button onClick={()=> navigateTo(PAGE_CARTS)}>Cart({Cart.length})</button>
//         <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>

//             <div>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>Setfillter(data)} >All</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Mens Clothes</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Womens Clothes</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
//                 <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Elecotronic</button>

//         </div>
       

//     {Page===PAGE_PRODUCTS && ShowProducts()}
//       {Page===PAGE_CARTS && renderCarts()}
//         </>
   
//         </div>
//     </div> */}

// </div>  )
// }




















import {React,useState,useEffect,useContext}  from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink ,Link} from 'react-router-dom';
import { ProContext } from "../App";
import StyleProj from'./StyleProj.css';
import Card2Sec5Style from "./Card2Sec5.css";
import { ContainerFliud } from './ContainerFliud';



export default function Products() {
  const { Cart, RemoveFromCart, AddCart, isExists } = useContext(ProContext);



    const PAGE_PRODUCTS='data';
    const PAGE_CARTS='Carts';

 
    const [Total,SetTotal]=useState();
    function increaseCount(a) {
      SetTotal((prevcount) => prevcount + a);
    }
  
    const alaa=(a)=>
    <>
       SetTotal{(prevCount => prevCount + a)}
    </>
  
  
  // const [Cart,SetCart]=useState([]);
  
  // const AddToCart=(pro)=>{
  //   SetCart([...Cart,{...pro}]);
  //   console.log('Added To Cart');
  // }
  const [Page,SetPage]=useState(PAGE_PRODUCTS);

  
  
  const renderCarts=()=>
<>



<div className='container'>
    <div className='row g-5'>
     
      <div className='col-lg-4'></div>
      <div className='col-lg-4'>
        <div className='text-center p-4'>
        <p className=' fs-1 mt-5 pt-5 '>See Products In Cart</p>
        <div className='d-flex'  style={{justifyContent:"center"}}>
        <button className='btn btn-outline-primary d-flex ms-4' onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>

        </div>
     
        </div>
      </div>
      <div className='col-lg-4'></div>

            <>
    
{Cart.map((el)=>
             <div key={el.toString()}  class="col-md-3 col-lg-4 mb-4 all  g-5 " >
    <div class="card w-75 box g-5 ">
        <div className='img-box h-100 text-center p-4'>
      <img src={el.image} class="card-img-top" alt="..." height={250}/>
      </div>
      <div class="card-body">
        <p>{el.category}</p>
        <p class="card-text "><span className='text-danger'>Price:</span> ${el.price}</p>
<button onClick={()=>RemoveFromCart(el)} className='btn btn-danger'>Remove From  cart</button>

      </div>


      </div>
      {() => SetTotal(Total + `${el.price}`)}
     

</div>

  )}
  
  
  <p>Total:{Total}</p>
  
  </>
   <p>{Total}</p>
   </div>
</div>
  
  </>

  
  const navigateTo=(nextPage)=>{
  
    SetPage(nextPage);
  }
  
  // const RemoveFromCart=(productToRemove)=>{
  
  //   SetCart(Cart.filter((pro)=>pro!==productToRemove))
  // }


    const[data,Setdata]=useState([]);
    const[fillter,Setfillter]=useState(data);
    const[loading,Setloading]=useState(false);
    let ComponentMounted=true;
    useEffect(()=>{
        const GetProducts=async()=>{
            Setloading ( true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(ComponentMounted){
                Setdata(await response.clone().json());
                Setfillter(await response.json());
                Setloading(false);
                console.log(fillter);

            }
            return    ComponentMounted=false;

        }
        GetProducts();

    },[])
    const Loading=()=>{
        return  <><div className='col-md-3'><Skeleton height={350}/></div><div className='col-md-3'><Skeleton height={350}/></div><div className='col-md-3'><Skeleton height={350}/></div></>
        //  <div><p>Loading....</p></div>
    }

const filterProduct=(cat)=>{
    const UpdateList=data.filter((x)=>x.category===cat);
Setfillter(UpdateList);}

const AllList=()=><>
{/* <ContainerFliud/> */}
<ShowProducts/>
</>
const AllList2=()=><>
<ContainerFliud/> 
<ShowProducts/>
</>


const ShowProducts=()=>
    <>
<div className='container'>
    <div className='row g-5'>
            <h1 className='fw-bold fs-1 mt-5 pt-5 txtdarkblu' style={{fontFamily:"-moz-initial", textShadow:"4px 3px 3px pink"}}>Exclusive Products</h1>
            <>
            <div>
                <button className='btn  me-2 bgdarkblu text-white' onClick={()=>Setfillter(data)} >All</button>
                <button className='btn bgdarkblu text-white me-2' onClick={()=>filterProduct("men's clothing")}>Mens Clothes</button>
                <button className='btn bgdarkblu text-white me-2' onClick={()=>filterProduct("women's clothing")}>Womens Clothes</button>
                <button className='btn bgdarkblu text-white me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                <button className='btn bgdarkblu text-white me-2' onClick={()=>filterProduct("electronics")}>Elecotronic</button>

        </div>
      
        <section id="team" class="team">
      <div class="container ">
        <div class="row">  

 {fillter.map((el)=>
             <div class="col-md-3 col-lg-4 mb-4   g-5 " >
    <div key={el.toString()} class=" w-75 box g-5 member">
        <div className='img-box h-100 text-center p-4 img-fluid'>
      <img src={el.image} class="card-img-top" alt="..." height={250}/>
      </div>
      <div className="member-info">
    <div className="member-info-content">
      <div className='px-4'>
      <p className='text-white fw-bold'>{el.category}</p>
    <div className='d-flex' style={{justifyContent:"space-between"}}>

    <p class="text-white "><span className='text-danger'></span> ${el.price}</p>
    <p class="text-white "><span className='text-danger'>Rating:</span>{el.rating.rate}</p>

    </div>
    <NavLink to={`Product/${el.id}`} className="btn bgcolor text-white ms-2 me-2">Details</NavLink>
        <button 
                    onClick={
                      isExists(el)
                        ? () => RemoveFromCart(el)
                        : () => AddCart(el)
                    }
                    className="btn bgcolor text-white"
                  >
                    {isExists(el) ? "Remove" : "Add"}
                  </button>
      </div>
  
      </div>
      </div>
   

      </div>
    
    
</div>
  )} 
  
</div>
</div>
</section>

  </>
   
   </div>
</div>

  </>
  return (
<div>     
      {Page===PAGE_PRODUCTS && <AllList/>}
      {Page===PAGE_CARTS && renderCarts()}


</div>  )
}












