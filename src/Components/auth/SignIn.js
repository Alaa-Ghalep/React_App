import React, { useEffect, useState } from "react";
import "./master.css";
import axios from "./../axios/Axios";
import { useNavigate ,Link} from "react-router-dom";
import logo from'../../images/0logo.png';


const SignIn = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem("authToken")) {
    //   navigate("/");
    // }

  }, []);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Errormsg, SetErrormsg] = useState("");


  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
console.log("00000000");


    axios
    //  .post("/auth/login", {
      .post("http://api.escuelajs.co/api/v1/auth/login/", {

        email: email,
        password: pass,
        avatar:"https://i.pinimg.com/originals/4d/b8/3d/4db83d1b757657acf5edc8bd66e50abf.jpg"
      })
      .then((response) => {
console.log("010101");

        // window.localStorage.setItem("adminName", response.data.data.name);
        window.localStorage.setItem("adminEmail", response.data.email);
        window.localStorage.setItem("adminPass", response.data.password);

        window.localStorage.setItem("authToken", response.data.token);

console.log("11111111");

          const user = localStorage.getItem("authToken");
console.log("2222222");

    if (!user) {
      navigate("/register");
console.log("333333");

    }
  else{
        navigate("/");
console.log("4444444");

  }
      })
      .catch((err) => {
        console.log(err);
        SetErrormsg("Login Faild ")
      });
      // navigate("/");

  };

  return (
    <div className=" container-fluid" style={{marginBottom:"55px"}}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6  py-3 px-5 shadow">
          <img className='d-flex m-auto  pt-3'src={logo}  style={{width:"120px",borderRadius:"50%"}} />
           <div>
           {/* <h5 className='fw-bold text-center  pt-3 ' >Login</h5>
       <h5 className='fw-bold  pb-2'>Hello ! Welcome back.</h5> */}
            </div>
            <div>
            <form className="" onSubmit={submitHandler}>
        <div className="">
          {/* <h3 className="">Sign In</h3> */}
          <h5 className='fw-bold text-center  pt-3 ' >Login</h5>
       <h5 className='fw-bold  pb-2'>Hello ! Welcome back.</h5>
          <div className="form-group mt-3 text-start" >
            <label className="text-start">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              onChange={emailChangeHandler}
            />
          </div>
          <div className="form-group mt-3 text-start">
            <label >Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              onChange={passChangeHandler}
            />
            <a className='text-secondary d-flex mb-2 mt-1' style={{fontSize:"13px",justifyContent:"flex-end"}} href='#'>Forget password?</a>
          </div>
          <p>{Errormsg}</p>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn text-white" style={{backgroundColor:"rgb(224, 48, 107)"}}>
              Login
            </button>
          </div>
          <p  className='text-secondary mb-5 pt-2' style={{fontSize:"13px"}}>Already have an account?<Link className=' text-decoration-none fw-bold txtcolor ' to="/register"> Sign up</Link></p>
          {/* <p>Not have account<Link to="/register">SignUp</Link></p> */}
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="google.com">password?</a>
          </p> */}
        </div>
      </form>
            </div>
          </div>

          <div className="col-lg-3"></div>

        </div>
      </div>
     

    </div>




    
//     <div>
//       <form className="" onSubmit={submitHandler}>
//     <div className='container-fluid ' style={{marginTop:"100px",marginBottom:"155px"}}>         
//   <div className='container mt-5 mb-5'>
//       <div className='row mt-5'>
    
// <div className='col-md-2 col-lg-3'></div>



// <div className='col-sm-12 col-sm-auto col-md-12 col-lg-6 col-xl-6 py-3 px-5 shadow'>
// <img className='d-flex m-auto  pt-3'src={logo}  style={{width:"120px",borderRadius:"50%"}} />
// <div className=' '>
// <div><h5 className='fw-bold text-center  pt-3 ' >Login</h5>
// <h5 className='fw-bold  pb-2'>Hello ! Welcome back.</h5>
// <div>
// <label class="form-label text-start d-flex fw-bold txtcolor" >Email</label>
// <input 
//   type="email"
//             className="form-control mt-1"
//             placeholder="Enter email"
//             required
//             onChange={emailChangeHandler}

// />

// <label class="form-label mt-2  text-start d-flex  fw-bold txtcolor" >Password:</label>
// <input 
//       type="password"
//                 className="form-control mt-1"
          
//                 required
//                 onChange={passChangeHandler}

// placeholder='********' value={pass}  />
// <a className='text-secondary d-flex mb-2 mt-1' style={{fontSize:"13px",justifyContent:"flex-end"}} href='#'>Forget password?</a>
// <div>
// <button onClick={submitHandler}  type="submit"  className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>
// <a className='text-decoration-none text-white'>Login</a></button>
// </div>
// </div>
// <p  className='text-secondary mb-5 pt-2' style={{fontSize:"13px"}}>Already have an account?<a className=' text-decoration-none fw-bold txtcolor ' href='#'> Sign up</a></p>
// </div>

// </div>
// </div>


// <div className='col-md-2 col-lg-3'></div>
//             </div>

        
         
//       </div>
//       </div>
//       </form>
//   </div>
  );
};

export default SignIn;
