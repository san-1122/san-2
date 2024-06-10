
import React, { useState, useEffect, useRef } from 'react';
import Menu from '../menu';
import './login-logout.css';
import { Link } from "react-router-dom"
function LoginLogout() {

    

    return (
        <div>
            <Menu />
            <div className='loginone'>
                <div class="wrapper">
                    <span class="icon-close" onclick="close_modal()">
                        <ion-icon name="close-outline"></ion-icon>
                    </span>
                    <div class="form-box login">
                        <h2>sanseeds</h2>
                        <form action="login_db.php">
                            <div class="input-box">
                            <span class="icon">
                                    <ion-icon name="person"></ion-icon>
                                </span>
                                
                                <input type="username" required />
                                <label>Username</label>
                            </div>
                            <div class="input-box">
                                <span class="icon">
                                    <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" required />
                                <label>password</label>
                            </div>
                            <div class="remember-forgot">
                                <label><input type="checkbox" />Rememver</label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type="submit" class="bin" name="login_user">Login</button>
                            <div class="login-register">
                                <p>Don't an count?<Link to={"/singup"}> register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginLogout