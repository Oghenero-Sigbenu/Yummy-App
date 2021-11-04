import React, { useState} from 'react';

import Navbar from "../../components/navbar";
import { AnimateInOut } from "../../components/animateInOut";

function Login() {
 const [show, ] = useState(true);
    return (
        <>
        <Navbar/>
      <AnimateInOut classname={show ? 'slide-in-top one' : 'slide-out-left'}>
      <div className="auth">
       <form className="pb-5">
       <h3 className="text-center">Login</h3>
           <div className="form-element">
               <label>Email</label>
               <input type="text" placeholder="ade@gmail.com"/>
           </div>
           <div className="form-element">
               <label>Password</label>
               <input type="password" />
           </div>
           <div className="form-element mt-3">
              <button className="btn-pry ">Register</button>
           </div>
       </form>
      </div>
      </AnimateInOut>
      </>
    );
  }
  
  export default Login;
  