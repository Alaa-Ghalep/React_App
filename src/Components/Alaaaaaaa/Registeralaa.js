import React,{useRef,useState,useEffect} from 'react'
import { useNavigate ,Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faTimes,faInfoCircle} from'@fortawesome/free-solid-svg-icons';
import AuthContext from "../context/AuthProvider";
import axios from "../axios/Axios";
// import axios from "axios";
//  axios.create({
//     baseURL: "http://localhost:3500",
//   });

const Register = () => {
const REGISTER_URL = "/register";
const navigate = useNavigate();


    const USER_REGEX = /^[A-z]+[A-z0-9-_]{3,23}$/;
    // const USER_REGEX = /^[A-z]+$/;
    const regex = new RegExp('^[A-z]{2,40}$');   

    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const userRef = useRef();
    const errRef = useRef();
    // const errMsg = useRef();

    const[fname,Setfname]=useState('');
    const [validfName, setValidfName] = useState(false);
    const[errMsgfname,SetErroMessgfname]=useState('');

    const[lname,Setlname]=useState('');
    const [validlName, setValidlName] = useState(false);
    const[errMsglname,SetErroMessglname]=useState('');

    const[email,Setemail]=useState('');

    const[pass,Setpass]=useState('');
    const [validlpass, setvalidlpass] = useState(false);
    const[errMsgpass,SeterrMsgpass]=useState('');



    const[confirmpass,Setconfirmpass]=useState('');
    const [validMatch, setValidMatch] = useState(false);
    const[errMsg,SetErroMessg]=useState('');
    const[ErrMsg,setErrMsg]=useState('');
    const [success, setSuccess] = useState(false);




    // const [validpass, setValidpass] = useState(false);




    // State events

    function fnamehandel(e){
      Setfname(e.target.value);
    }
    function lnamehandel(e){
        Setlname(e.target.value);
      }
      function emailhandel(e){
        Setemail(e.target.value);
      }
      function passhandel(e){
        Setpass(e.target.value);
      }
      function confirmpasshandel(e){
        Setconfirmpass(e.target.value);
      }
      
    //  const FormHandel = async (e) => {

    async  function FormHandel(e){

        const v1 = USER_REGEX.test(fname);
        const v2 = USER_REGEX.test(lname);
console.log(v1);
        if (!v1 ) {
        //   setErrMsg("Invalid Entry");
        SetErroMessgfname("Invalid Entry");
        
          console.log("!!!!!!!!!!!!")
        }

        else{SetErroMessgfname("");}
        if( !v2){SetErroMessglname("Invalid Entry");}
        else{SetErroMessglname("");}

        
        if(pass === confirmpass)
        {
    
            setValidMatch(!validMatch);
        console.log("OOOOOOOOOK");
    SetErroMessg("");
    console.log(validMatch);
        }
        else{
            setValidMatch(validMatch);
    SetErroMessg("The two passwords do not match");
    // console.log(validMatch);
        }


     
            // const response = await axios.post(
            //   'http://127.0.0.1:8000/api/register',
            //   JSON.stringify({ fname,lname, pass }),
            //   {
            //     headers: { "Content-Type": "application/json" },
            //     withCredentials: true,
            //   }
            // );
            // setSuccess(true);
            // //clear state and controlled inputs
            // Setlname("");
            // Setfname("");
            // Setemail("");
            // Setpass("");
            // Setconfirmpass("");
            // console.log(   JSON.stringify({ fname,lname, pass }));

            


            e.preventDefault();

            axios
            //   .post("/auth/register", {
             //.post("http://127.0.0.1:8000/api/register", {
              .post("https://api.escuelajs.co/api/v1/users/", {
                name:fname,
                email: email,
                password: pass,
                 avatar:"https://i.pinimg.com/originals/4d/b8/3d/4db83d1b757657acf5edc8bd66e50abf.jpg"
              })
              .then((response) => {
                window.localStorage.setItem("adminName", response.data.name);
                window.localStorage.setItem("authToken", response.data.token);
                console.log("Eveeeeeeeeeet")

                 navigate("/");

             Setlname("");
             Setfname("");
             Setemail("");
             Setpass("");
             Setconfirmpass("");
            console.log(   JSON.stringify({ fname,lname, pass }));

            
              })
              .catch((err) => {
                console.log(err);
              });



      }
  
  
useEffect(() => {
    userRef.current.focus();
  }, []);
  
  
// ********************************************************************************


// ********************************************************************************



    return (
      <>
     <section>
     {/* <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p> */}
          {/* <h1> ErrMsg: {ErrMsg}</h1> */}
          {/* <h1>Register</h1> */}
               
               <div>
          {/* offset-sm-3//center */}
          <div className='container-fluid ' style={{marginTop:"100px",marginBottom:"155px"}}>         
        <div className='container mt-5 mb-5'>
            <div className='row mt-5'>
          
<div className='col-md-2 col-lg-3'></div>



  <div className='col-sm-12 col-sm-auto col-md-6 col-lg-6 col-xl-6 py-3 px-5 shadow'>
  <img className='d-flex m-auto  pt-3'  style={{width:"120px",borderRadius:"50%"}} />
<div className=' '>
  <div><h5 className='fw-bold text-center  pt-3 ' >SignUp</h5>
  <h5 className='fw-bold  pb-2'>Hello dear !</h5>
  <p>Please fill in this form to create your account! .</p>
  <div  >  

    <label class="form-label text-start d-flex fw-bold txtcolor" >First Name</label>
    <input ref={userRef}  class="form-control"  type="text" placeholder='First Name' value={fname} onChange={fnamehandel}/>
    <p>{errMsgfname}</p>
    <label class="form-label text-start d-flex fw-bold txtcolor" >Last Name</label>
    <input  class="form-control"  type="text" placeholder='Last Name' value={lname} onChange={lnamehandel}/>
    <p>{errMsglname}</p>

    <label class="form-label text-start d-flex fw-bold txtcolor" >Email</label>
    <input  class="form-control"  type="email" placeholder='Email' value={email}  onChange={emailhandel}/>
   
    <label class="form-label mt-2  text-start d-flex  fw-bold txtcolor" >Password:</label>
    <input  class="form-control"  type="password" placeholder='********' value={pass}  onChange={passhandel}/>
    
    <label class="form-label mt-2  text-start d-flex  fw-bold txtcolor" >Confirm Password:</label>
    <input  class="form-control"  type="password" placeholder='********' value={confirmpass}  onChange={confirmpasshandel}/>

   <a className='text-secondary d-flex mb-2 mt-1' style={{fontSize:"13px",justifyContent:"flex-end"}} href='#'>Forget password?</a>
   <p >{errMsg}</p>
   <div>
   <button onClick={FormHandel}  type="submit" className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>SignUp</button>

   </div>
  </div>
 <p  className='text-secondary mb-5 pt-2' style={{fontSize:"13px"}}>Already have an account?<Link className=' text-decoration-none fw-bold txtcolor ' to='/login'> Sign In</Link></p>
  </div>

  </div>
  </div>

{/* <button onClick={()=>SignUpFun()}  className='btn text-white w-100 mb-2' style={{backgroundColor:"rgb(224, 48, 107)"}}>alllllla</button> */}
  <div className='col-md-2 col-lg-3'></div>
                  </div>

              
               
            </div>
            </div>
        </div>
               
     </section>
        
      </>
    );
  };
  
  export default Register;