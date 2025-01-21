import react from "react";
import '../../App.css';
import { Link } from "react-router-dom";
import './Register.css';

export default function Register() {
    return (
    <div>
    <div className='register-container'>
         <h1>Create an account</h1>
        
        
         <div className='user-name'>
            <input type='text' placeholder='First Name' className='user-first-name'></input>
            <input type='text' placeholder='Last Name' className='user-last-name'></input>
        </div>
         <div className='register-info'>
             <input type='text' placeholder='Email or Phone Number' className='email-input'></input>
         </div>
         <div className='password'>
         <input type='password' placeholder='Password' className='password'></input>
         </div>
         <div className='submit'>
             <input type='submit' className='submit-button'></input>
         </div>
     </div>
     <div className='existing-account-container'>
         <h4><span>Already have an account?</span></h4>
         <Link to='/SignIn' className='signin'>Sign In</Link>
     </div>
     </div>
    );
}