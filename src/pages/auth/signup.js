import React, { useState} from 'react';
import Navbar from "../../components/navbar";
import { AnimateInOut } from "../../components/animateInOut";
import { useDispatch } from "react-redux"
import {signUp} from "../../redux/actions/user";
import { useHistory } from 'react-router-dom';

function Signup() {
 const [show, ] = useState(true);
 const [object, setObject] = useState(true);
 const dispatch = useDispatch();
 const history = useHistory();

 const handleLogin = (event) => {
    event.preventDefault();
    const user = {  email:object.email, 
                    password:object.password,  
                    fullName:object.fullName,  
                    phone:object.phone, 
                    userName:object.userName
                }
    dispatch(signUp({user, history}))
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
       <form onSubmit={handleLogin}>
       <h3 className="text-center">Signup</h3>
       <div className="form-element">
               <label>Full Name</label>
               <input type="text" name="fullName" placeholder="ade@gmail.com" onChange={(e) =>handleChange(e)}/>
           </div>
           <div className="form-element">
               <label>Username</label>
               <input type="text" name="userName" placeholder="ade@gmail.com" onChange={(e) =>handleChange(e)}/>
           </div>
           <div className="form-element">
               <label>Email</label>
               <input type="email" name="email" placeholder="ade@gmail.com" onChange={(e) =>handleChange(e)}/>
           </div>
           <div className="form-element">
               <label>Phone</label>
               <input type="text" name="phone" placeholder="ade@gmail.com" onChange={(e) =>handleChange(e)}/>
           </div>
           <div className="form-element">
               <label>Password</label>
               <input type="password" name="password" onChange={(e) =>handleChange(e)} />
           </div>
           <div className="form-element">
              <button className="btn-pry" type="submit">Register</button>
           </div>
       </form>
      </div>
      </AnimateInOut>
      </>
  );
}

export default Signup;
