import React, { Component ,useState} from 'react'
import img2 from'../images/img2.webp';
import { useHistory } from 'react-router-dom';
// import logo from'../images/logo2.jpg';
import logo from'../images/0logo.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function Login() {
  const[Email,SetEmail]=useState();
  const[Password,SetPassword]=useState();

// const history=useHistory();
// useEffect(()=>{
//   if(localStorage.getItem('user-info')){
//     history.push("/add");
//   }
// }
// )



async function LoginFun(){
  console.warn(Email,Password)
  let item={Email,Password};
  console.log(item)

  let result=await fetch("http://127.0.0.1:8000/api/auth/login",{
  method:'Post',
  body:JSON.stringify(item),

  headers:{
    "Content-Type":"application/json",
    "Accept":'application/json'
  }
});


result=await result.json();
localStorage.setItem(JSON.stringify(result))
// history.push("/add");

console.log("tamam");

}


  return (
    <div>
      <div className='container-fluid ' style={{marginTop:"100px",marginBottom:"155px"}}>         
    <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
      
<div className='col-md-2 col-lg-3'></div>



<div className='col-sm-12 col-sm-auto col-md-12 col-lg-6 col-xl-6 py-3 px-5 shadow'>
<img className='d-flex m-auto  pt-3'src={logo}  style={{width:"120px",borderRadius:"50%"}} />
<div className=' '>
<div><h5 className='fw-bold text-center  pt-3 ' >Login</h5>
<h5 className='fw-bold  pb-2'>Hello ! Welcome back.</h5>
<div>
<label class="form-label text-start d-flex fw-bold txtcolor" >Email</label>
<input  class="form-control"  type="email" placeholder='Email' value={Email}  onChange={(e)=>SetEmail(e.target.value)}/>

<label class="form-label mt-2  text-start d-flex  fw-bold txtcolor" >Password:</label>
<input  class="form-control"  type="password" placeholder='********' value={Password}  onChange={(e)=>SetPassword(e.target.value)}/>
<a className='text-secondary d-flex mb-2 mt-1' style={{fontSize:"13px",justifyContent:"flex-end"}} href='#'>Forget password?</a>
<div>
<button onClick={()=>LoginFun()}   className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>
  <Link className='text-decoration-none text-white' to="/">Login</Link></button>
</div>
</div>
<p  className='text-secondary mb-5 pt-2' style={{fontSize:"13px"}}>Already have an account?<a className=' text-decoration-none fw-bold txtcolor ' href='#'> Sign up</a></p>
</div>

</div>
</div>


<div className='col-md-2 col-lg-3'></div>
              </div>

          
           
        </div>
        </div>
    </div>
)
}

