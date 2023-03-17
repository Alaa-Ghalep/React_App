import React,{useState,useRef} from 'react'
import { useEffect } from 'react';

export default function Loginalaa() {
    const userRef=useRef();
    const errorRef=useRef();

    const[User,SetUser]=useState('');
    const[Pass,SetPAss]=useState('');
    const[ErrorMessage,SetErrorMessage]=useState('');
    const[Success,SetSuccess]=useState(false);

    // const[User,SetUser]=useState();

    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        SetErrorMessage('');
    },[User,pass])
  return (
    <div>
         <section>
          <p
            ref={errorRef}
            className={ErrorMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >{ErrorMessage}</p>
      </section>
    </div>
  )
}
