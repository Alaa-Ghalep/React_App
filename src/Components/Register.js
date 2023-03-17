import React, {useState,Component } from 'react'
import img2 from'../images/img2.webp';
// import logo from'../images/logo2.jpg';
import logo from'../images/0logo.png';

export default function Register() {
  const[Name,SetName]=useState();
  const[Email,SetEmail]=useState();
  const[Password,SetPassword]=useState();


  async function SignUpFun(e){
    // e.preventDefault();
    console.log(Name);
    console.log(Email);
    console.log(Password);

    let item={Name,Email,Password};
console.log(item); 
  
  let result=  await  fetch("http://localhost:8000/api/register",{
      method:'Post',
      body:JSON.stringify(item),
      Headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    });
    result=await result.json();
    console.log("Result", result);
console.log("OOOK");

}
    return (
        <div>
          {/* offset-sm-3//center */}
          <div className='container-fluid ' style={{marginTop:"100px",marginBottom:"155px"}}>         
        <div className='container mt-5 mb-5'>
            <div className='row mt-5'>
          
<div className='col-md-2 col-lg-3'></div>



  <div className='col-sm-12 col-sm-auto col-md-6 col-lg-6 col-xl-6 py-3 px-5 shadow'>
  <img className='d-flex m-auto  pt-3'src={logo}  style={{width:"120px",borderRadius:"50%"}} />
<div className=' '>
  <div><h5 className='fw-bold text-center  pt-3 ' >SignUp</h5>
  <h5 className='fw-bold  pb-2'>Hello dear !</h5>
  <p>Please fill in this form to create your account! .</p>
  <div  >  

    <label class="form-label text-start d-flex fw-bold txtcolor" >Name</label>
    <input  class="form-control"  type="text" placeholder='Name' value={Name} onChange={(e)=>SetName(e.target.value)}/>
    <label class="form-label text-start d-flex fw-bold txtcolor" >Email</label>
    <input  class="form-control"  type="email" placeholder='Email' value={Email}  onChange={(e)=>SetEmail(e.target.value)}/>
   
    <label class="form-label mt-2  text-start d-flex  fw-bold txtcolor" >Password:</label>
    <input  class="form-control"  type="password" placeholder='********' value={Password}  onChange={(e)=>SetPassword(e.target.value)}/>
   <a className='text-secondary d-flex mb-2 mt-1' style={{fontSize:"13px",justifyContent:"flex-end"}} href='#'>Forget password?</a>
   <div>
   <button onClick={()=>SignUpFun()}  type="submit" className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>SignUp</button>

   </div>
  </div>
 <p  className='text-secondary mb-5 pt-2' style={{fontSize:"13px"}}>Already have an account?<a className=' text-decoration-none fw-bold txtcolor ' href='#'> Sign up</a></p>
  </div>

  </div>
  </div>

{/* <button onClick={()=>SignUpFun()}  className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>alllllla</button> */}
  <div className='col-md-2 col-lg-3'></div>
                  </div>

              
               
            </div>
            </div>
        </div>
    )
}
