import React from 'react'
import './login-logout.css';
import { Link } from "react-router-dom"
import Menu from '../menu';

function Singup() {
  return (

    <div >
        <Menu />
        <div className='loginone'>
        <div class="wrapper2" >
        <div class="form-box login">
                        <h2>Registration</h2>
                        <form action="register_db.php" method="post">
                            <div class="input-box">
                                <span class="icon">
                                    <ion-icon name="person"></ion-icon>
                                </span>
                                <input type="text" name="username" id="" />
                                <label>Username</label>
                            </div>
                            <div class="input-box">
                                <span class="icon">
                                    <ion-icon name="mail"></ion-icon>
                                </span>
                                <input type="mail" name="email" id="" />
                                <label>Email</label>
                            </div>
                            <div class="input-box">
                                <span class="icon">
                                    <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" name="password" id="" />
                                <label>password</label>
                            </div>
                            <div class="remember-forgot">
                                <label><input type="checkbox" />Rememver</label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type="submit" class="bin" >Register</button>
                            <div class="login-register">
                                <p>Don't an count?<Link to={"/login"}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
    </div>

  )
}

export default Singup