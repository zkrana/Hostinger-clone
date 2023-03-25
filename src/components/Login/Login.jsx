import React, { useState } from 'react'
import './login.css'
import Google from '../../images/google.svg'
import Facebook from '../../images/fb.svg'
import Github from '../../images/github.svg'

import { useNavigate } from 'react-router-dom'

import Loginheader from '../Login-Header/LoginHeader'
export default function Login() {

    /* 
    Show password filed value
    */
    const [type, setType] =   useState('password');
    const [color, setColor] = useState(false);
    let showColor = color ? 'activePass' : null;

    const showPass = () =>{
        if (type === 'password'){
            setType('text');
            setColor(true);
        }else{
            setType('password');
            setColor(false);
        }
    }
    /* 
    Submit button value change after submit
    */
    const [loginvalue, setLoginvalue] = useState('Log in');

    /* 
    Form Validation
    */
    const [value, setValue] = useState({
        email: '',
        password:''
    })

    const handlevalechange = (e) =>{
        setValue({...value, [e.target.name]: e.target.value});
    }

    const [error, setErrors] = useState({ })

    const formValidation = (e) =>{
        e.preventDefault();
        setErrors(validation(value));
    }

    const navigate = useNavigate();

    const validation = () =>{
       let error = {};
        if (!value.email){
            error.email = "Email must not be empty!"
        }else if(!value.password){
            error.password = "Password must not be empty!"
        }else{
            setLoginvalue('Loggin in ...')
            navigate('/index')
        }
        return error;
    }
 

  return (
    <div className='bgWhite'>
        <Loginheader />
        <div className='container'>
            <div className="login-wrapper">
                <div className="login">
                    <h2 className='text-dark font-bold text-[25px]'> Login </h2>
                    <div className="social-login">
                        <a href='#' className='item google'>
                            <img src={Google} width={24} height={24} alt='Facebook' />
                        </a>
                        <a href='#' className='item fb'>
                            <img src={Facebook} width={24} height={24} alt='Facebook' />
                        </a>
                        <a href='#' className='item git'>
                            <img src={Github} width={24} height={24} alt='Facebook' />
                        </a>
                    </div>
                    <div className="or-wrapper">
                        <div className="or-divider">
                            <span> or </span>
                        </div>
                    </div>
                    <form className='form-wrapper' onSubmit={formValidation}>

                    <div class="input-floating-label text-left">
                        <input onChange={handlevalechange} value={value.email} class="input" type="email" id="input" name="email" placeholder="email" />
                        <label for="input">Email</label>
                        {error.email && <span className='error'> {error.email} </span>}
                    </div>
                    <div class="input-floating-label text-left">
                        <input onChange={handlevalechange} value={value.password} class="input" type={type} id="input" name="password" placeholder="password" />
                        <label for="input">Password</label>
                        {error.password && <span className='error'> {error.password} </span>}

                        <div class="h-form-field-icon" >
                            <svg className={showColor} onClick={showPass} fill="#727586" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path data-v-d20c4c3c="" clip-rule="evenodd" d="m12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>

                        {/* <NavLink to={'./index'}> */}
                        <button className='loginSubmit' type='submit' >{loginvalue}</button>
                        {/* </NavLink> */}
                    </form>
                    <a className='forgot' href='#'>
                        Forgot Passowrd?
                    </a>
                    <p class="not-a-member">Not a member yet? <a class="text-h-hpanel-primary" href="/web-hosting">Choose a hosting plan</a> and get started now!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
