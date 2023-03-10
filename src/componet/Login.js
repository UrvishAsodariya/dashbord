// import React, { useState } from 'react'
import Footer from './Footer';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, React } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const btn = () => {
        axios.post('http://localhost/work/insert.php', {
            email,
            password,
        })
            .then(function (response) {
                // handle success
                console.log(response);
                if ((response.data.Email == email) && (response.data.Password == password)) {
                    alert('Your data is currected...!')
                    window.localStorage.setItem('id', response.data.id)
                    window.location.href = '/Deshboard'
                }
                else {
                    alert('Please, Check your data...!')
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
  



    return (
        <>

            <div className='d-flex justify-content-center align-items-center'>
                <div className="login-box">
                    <div className="login-logo">
                        <Link to="/"><b>Admin</b>LTE</Link>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                       <button type="submit" className="btn btn-primary btn-block" onClick={btn}>Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Register a new membership</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Login
