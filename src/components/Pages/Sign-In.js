import react from "react";
import '../../App.css';
import { Link } from "react-router-dom";
import './SignIn.css';

export default function Signin() {
    return (    
   <div>
   <div className='sign-in-container'>
        <h1>Sign In</h1>
        <div className='user-info'>
            <h3>Email or Phone Number</h3>
            <input type='text' className='user-input'></input>
        </div>
        <div className='password'>
            <h3>Enter password</h3>
        <input type='password' className='password'></input>
        <Link className='reset-password'>Forgot password?</Link>
        </div>
        <div className='submit'>
            <input type='submit' className='submit-button'></input>
        </div>
    </div>
    <div className='new-account-container'>
        <h4><span>New?</span></h4>
        <Link to='/Register' className='create'>Create an account</Link>
    </div>
    </div>
    )
}
