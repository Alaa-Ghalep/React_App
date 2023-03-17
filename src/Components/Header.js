import React, { Component } from 'react'
import logo from'../images/0logo.png';
import {NavLink,Link,Router,useNavigate} from 'react-router-dom'
import Style from'./Style.css';
import axios from "./axios/Axios";


export default function Header(props) {
const navigate = useNavigate();


  const logout = () => {
    axios
      .post("http://api.escuelajs.co/api/v1/auth/profile")
      .then((response) => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div>
    <div className='container-fluid shadow' >

        <div class="container-fluid border-top footer w-100">

<div className='container'>



<nav class="navbar navbar-expand-md navbar-light ">
        <div>
      <img src={logo} style={{borderRadius:"50%",width:"115px"}}/>
    </div> <button class="navbar-toggler" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainnav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  header " id="mainnav">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2 animate__heartBeat" exact to="/">Home</Link></li>
            <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="/Shop">Shop</Link></li>
            {/* <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="#">About us</Link></li> */}
            <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="/Section2">Testimonial <i className='fa fa-'></i></Link></li>
           <li className='nav-item'><Link className='nav-link txtcolor fw-bold me-2 ms-2 ' to="/ConcateUs">Concat Us</Link></li>

            {/* <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="/Register">Register</Link></li> */}
{/* <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="/Login">About us <i className='fa fa-'></i></Link></li> */}

            {/* <li class="nav-item"><Link class="nav-link txtcolor fw-bold me-2 ms-2" to="/Products">Login <i className='fa fa-'></i></Link></li> */}
            {/* <li class="nav-item"><a class="nav-link txtcolor fw-bold" href="#">Cantact Us</a></li> */}
        </ul>
     <div className='d-flex'>
    {/* <button className='btn text-white rounded-5 px-3 py-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>
      <Link className='text-white text-decoration-none fw-bold' to="/ConcateUs">ConcateUs</Link>
      </button> */}
<button  onClick={logout} className='btn text-white rounded-5 px-3 py-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>
      <Link className='text-white text-decoration-none fw-bold' to="/register">Logoute</Link>
      </button>
      {/* <button onClick={logout} className="btn-info btn text-white rounded-5 px-3 py-2">logout</button> */}
      <Link to="/Cart">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
              width="33px"
              alt=""
            />
          </Link>

          <Link  to="/Cart" className='text-decoration-none'>   <span className=" badg badg-danger bg-danger  px-1 text-white rounded">
            {props.cart}
          </span>
          </Link> 

     </div>
    </div>
</nav>

</div>       
</div>
  
    </div>



  </div>
  )

}


