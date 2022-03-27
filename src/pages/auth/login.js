import React, { useState} from 'react';

import Navbar from "../../components/navbar";
import { AnimateInOut } from "../../components/animateInOut";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import {signIn} from "../../redux/actions/user";

function Login() {
    const [show, ] = useState(true);
    const dispatch = useDispatch()
    const [object, setObject] = useState({})
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = {email:object.email, password:object.password}
        dispatch(signIn({user, history}))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setObject({
            ...object,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
        <Navbar/>
      <AnimateInOut classname={show ? 'slide-in-top one' : 'slide-out-left'}>
      <div className="auth">
       <form className="pb-5" onSubmit={handleLogin}>
       <h3 className="text-center">Login</h3>
           <div className="form-element">
               <label>EMAIL</label>
               <input type="text" name="email" placeholder="ade@gmail.com" onChange={e => handleChange(e)}/>
           </div>
           <div className="form-element">
               <label>PASSWORD</label>
               <input type="password" name="password" onChange={e => handleChange(e)}/>
           </div>
           <div className="form-element mt-3">
              <button className="btn-pry" type="submit">LOGIN</button>
           </div>
       </form>
      </div>
      </AnimateInOut>
      </>
    );
  }
  
  export default Login;
  