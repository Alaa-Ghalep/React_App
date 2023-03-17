import React  from 'react'
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

// import Style from'./Style.css';
export default function Card() {
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
  return (
       
//     <div>
//         <section class="food_section layout_padding-bottom">
//   <div class="container">
  

//     <div class="filters-content">
//       <div class="row grid">
//       {data.map((el)=>
//         <div class="col-sm-6 col-lg-4 all pizza">
//           <div class="box">
//             <div>
//               <div class="img-box">
//                 <img src={el.img} alt=""/>
//               </div>
//               <div class="detail-box">
//                 <h5>
// {el.name}               
//  </h5>
//                 <p>
//                  {el.description}
//                 </p>
//                 <div class="options">
//                   <h6>
//                    ${el.price}
//                   </h6>          
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>)}
       
//       </div>
//     </div>
  
//   </div>
// </section>

//     </div>

<div>
  <div className='container'>
    <div className='row'>
    {data.map((item)=>

      <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    

<div class="card mb-3" style={{maxWidth: "540px"}}>
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
    </div>
  </div>
    

</div>
 
     
     </div>
     )}
    </div>
  </div>
</div>
  );
  
}
