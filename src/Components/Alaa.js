import React,{useRef,useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from "axios";
axios.create({
    baseURL: "http://localhost:3500",
  });
export default function Alaa() {
    const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const userRef = useRef();
    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);



    useEffect(() => {
        userRef.current.focus();
      }, []);
function aa(e){
setUser(e.target.value);
console.log(user);

}
  return (
    <div>
          <form >
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                // icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                // icon={faTimes}
                className={
                  validName || !user ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={ aa}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
                <label htmlFor="password">
              Password:
             
             
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
      </form>
    </div>
  )
}
