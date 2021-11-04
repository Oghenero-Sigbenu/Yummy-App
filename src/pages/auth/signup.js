import React, { useState} from 'react';
import Navbar from "../../components/navbar";
import { AnimateInOut } from "../../components/animateInOut";

function Signup() {
 const [show, ] = useState(true);

  return (
    <>
    <Navbar/>
       <AnimateInOut classname={show ? 'slide-in-top one' : 'slide-out-left'}>
      <div className="auth">
       <form>
       <h3 className="text-center">Signup</h3>
       <div className="form-element">
               <label>Full Name</label>
               <input type="text" name="fullName" placeholder="ade@gmail.com"/>
           </div>
           <div className="form-element">
               <label>Username</label>
               <input type="text" name="userName" placeholder="ade@gmail.com"/>
           </div>
           <div className="form-element">
               <label>Email</label>
               <input type="text" name="email" placeholder="ade@gmail.com"/>
           </div>
           <div className="form-element">
               <label>Phone</label>
               <input type="text" name="phone" placeholder="ade@gmail.com"/>
           </div>
           <div className="form-element">
               <label>Password</label>
               <input type="password" />
           </div>
           <div className="form-element">
              <button className="btn-pry">Register</button>
           </div>
       </form>
      </div>
      </AnimateInOut>
      </>
  );
}

export default Signup;
