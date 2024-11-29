import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
                        <h2><i>SignUp</i></h2>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="row" style={{ marginTop: "80px", letterSpacing: "1px" }}>
                   
                    <div className="col-lg-12">

                        {/* <h3 className='text-center'><b><i>User SignUp</i></b></h3> */}
                    </div>
                </div>
                <div className='row' style={{ marginTop: "50px" }}>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <h3 className='text-center'><i>Signup</i></h3>
                            <div className='card-body'>
                                <nav class="navbar bg-body-tertiary">
                                    <form class="container-fluid">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                                            <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"
                                                id='email'
                                                />
                                        </div>
                                        <div class="input-group mt-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
                                            <input type="number" class="form-control" placeholder="Number" aria-label="Username" aria-describedby="basic-addon1"
                                                id='number'
                                                 />
                                        </div>
                                        <div class="input-group mt-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                                            <input type="password" class="form-control" placeholder="Create Password" aria-label="Username" aria-describedby="basic-addon1"
                                                id='password'
                                                 />
                                        </div>
                                        <div class="input-group mt-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                                            <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"
                                                id='cpassword'
                                                />
                                        </div>
                                        <button className='text-center btn btn-info col-lg-12 mt-3' style={{ fontSize: "18px", fontWeight: "bold" }}
                                           
                                         />
                                        <Link to="/login">
                                            <p className='mt-5 text-center col-lg-12'>Alreadt have an account ? <i style={{ fontSize: "17px", fontWeight: "bold" }}>Login</i></p>
                                        </Link>
                                    </form>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </div>
        </>
    )
}

export default Signup
