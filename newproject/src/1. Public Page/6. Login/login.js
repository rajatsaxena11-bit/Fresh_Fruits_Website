import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const[mail, setMail] = useState("")
    const[password, setPassword] = useState("")
    const[message, setMessage] = useState(" ")

    const Login = () =>{
        if(mail == " " || password == " "){
            setMessage("Enter Login Details")
        }else{
            setMessage("Please Wait Validating")

            fetch(" http://localhost:4567/accountlogin")
            .then(Response=>Response.json())
            .then(Userinfo=>{
                if(Userinfo[0].mail == mail && Userinfo[0].password == password){
                    setMessage("SuccessFully : Please Wait Redirecting.........")
                    localStorage.setItem("adminid", Userinfo[0].mail);
                    localStorage.setItem("adminidname", Userinfo[0].password);
                    window.location.href = " http://localhost:3000/login#/"
                    window.location.reload();
                }else{
                    setMessage("Fail : Invalid or Not Exits !");
                }
            })
        }
    }
    return (
        <>
            <div className="section bg-dark" style={{ height: "220px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 flexproperties">
                            <li>
                                <a href="#" className='fs-3'><b><i><i class="fa-solid fa-apple-whole"></i> Fresh-Fruits</i></b></a>
                            </li>
                            <li>
                            <Link to = "/"><a href="#"><b><i>Home</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/about"><a href="#"><b><i>About</i></b></a></Link>
                            </li>
                            <div className="menu">
                                <li>
                                    <a href="#"><b><i>Pages</i></b></a>
                                </li>
                                <div className="items bg-dark">
                                    <li>
                                        <a href="#"><b><i>404 Pages</i></b></a>
                                    </li>
                                    <li>
                                        <Link to="/about"><a href="#"><b><i>About</i></b></a></Link>
                                    </li>
                                    <li>
                                        <a href="#"><b><i>Cart</i></b></a>
                                    </li>
                                    <li>
                                        <a href="#"><b><i>Checkout</i></b></a>
                                    </li>
                                    <li>
                                        <a href="#"><b><i>Contact</i></b></a>
                                    </li>
                                    <li>
                                        <a href="#"><b><i>News</i></b></a>
                                    </li>
                                    <li>
                                        <a href="#"><b><i>Shop</i></b></a>
                                    </li>
                                </div>
                            </div>
                            <div className="menu">
                                <li>
                                    <a href="#"><b><i>News</i></b></a>
                                </li>
                                <div className="items">
                                    <li>
                                        <Link to="/news"><a href="#"><b><i>News</i></b></a></Link>
                                    </li>
                                    <li>
                                        <Link to="/singlenews"><a href="#"><b><i>Single News</i></b></a></Link>
                                    </li>
                                </div>
                            </div>
                            <li>
                                <Link to="/contact"><a href="#"><b><i>Contact</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/shop"><a href="#"><b><i>Shop</i></b></a></Link>
                            </li>
                            <li>
                                <button className='btn btn-primary mx-3'
                                    style={{ width: "100px", letterSpacing: "2px", borderradious: "20%", fontSize: "12px" }}><b><i><i class="fa-solid fa-user"></i> Login</i></b></button>
                                <button className='btn btn-primary'
                                    style={{ width: "100px", letterSpacing: "2px", borderradious: "20%", fontSize: "12px" }}><b><i><i class="fa-solid fa-user"></i> SignUp</i></b></button>
                            </li>
                        </div>
                        <h5 className='mt-5 text-center' style={{ cursor: 'pointer' }}>We sale fresh fruits</h5>
                        <h2><i>Login</i></h2>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: "50px" }}>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <h2 className='text-center firstletter'><i>Login</i></h2>

                            {/* --------------------------- */}
                            <form>
                                <div className='card-body'>
                                    <nav class="navbar bg-body-tertiary">
                                        <form class="container-fluid">
                                            <div class="input-group">
                                                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                                                <input type="text" class="form-control" placeholder="User ID" aria-label="Username" aria-describedby="basic-addon1"
                                                    onChange={obj=>setMail(obj.target.value)}
                                                />

                                            </div>
                                            <div class="input-group mt-3">
                                                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                                                <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"
                                                     onChange={obj=>setPassword(obj.target.value)}
                                                />

                                            </div>
                                            <button className='text-center btn btn-info col-lg-12 mt-3 buttonhover button1' style={{ fontSize: "18px", fontWeight: "bold", letterSpacing: "1px" }}
                                              onClick={Login} ><i>Login</i></button>
                                            <br />

                                            <Link to = "/signup">
                                            <p className='mt-5 text-center col-lg-12'>Not a Member ? <i style={{ fontSize: "17px", fontWeight: "bold" }}>SignUp</i></p>
                                            </Link>

                                        </form>
                                    </nav>
                                </div>
                            </form>
                            {/* --------------------------- */}

                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            
        </>
    )
}

export default Login
