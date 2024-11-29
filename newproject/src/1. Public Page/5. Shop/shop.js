import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../5. Shop/img/pexels-suzyhazelwood-1258264.jpg'
import Image1 from '../5. Shop/img/pexels-roman-odintsov-4955257.jpg'
import Image2 from '../5. Shop/img/pexels-rajesh-s-balouria-1289088-4105727.jpg'
import Image3 from '../5. Shop/img/pexels-pixabay-60021.jpg'
import Image4 from '../5. Shop/img/pexels-brett-sayles-1171175.jpg'
import Image5 from '../5. Shop/img/pexels-pixabay-65256.jpg'


const Shop = () => {
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
                                <Link to = "/contact"><a href="#"><b><i>Contact</i></b></a></Link>
                            </li>
                            <li>
                                <Link to = "/shop"><a href="#"><b><i>Shop</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <button className='btn btn-primary mx-3'
                                        style={{ width: "100px", letterSpacing: "2px", borderradious: "20%", fontSize: "12px" }}><b><i><i class="fa-solid fa-user"></i> Login</i></b></button>
                                </Link>
                                <Link to="/signup">
                                    <button className='btn btn-primary'
                                        style={{ width: "100px", letterSpacing: "2px", borderradious: "20%", fontSize: "12px" }}><b><i><i class="fa-solid fa-user"></i> SignUp</i></b></button>
                                </Link>
                            </li>
                        </div>
                        <h5 className='mt-5 text-center'>We sale fresh fruits</h5>
                        <h2><i>Shop</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-1">
                        <button className='btn btn-warning' style={{ width: "60px", letterSpacing: "1px" }}><b>All</b></button>
                    </div>
                    <div className="col-lg-5" >
                        <input type="search" name="search" id="" className='form-control' list='courselist' placeholder='Search Fruits........' />
                        <datalist id='courselist'>
                            <option>Apple</option>
                            <option>Banana</option>
                            <option>Mango</option>
                            <option>Grapes</option>
                            <option>Stawberry</option>
                            <option>Pineapple</option>
                            <option>Orange</option>
                            <option>Kiwi</option>
                        </datalist>
                    </div>
                    <div className="col-lg-4">
                        <button className='btn btn-warning' style={{ width: "120px", letterSpacing: "1px" }}><b>Search</b></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">
                        <button className='btn btn-warning' style={{ letterSpacing: "1px" }}><b>🍎 Apple</b></button>
                    </div>
                    <div className="col-lg-2">
                        <button className='btn btn-warning' style={{ letterSpacing: "1px" }}><b>🍇 Grapes</b></button>
                    </div>
                    <div className="col-lg-2">
                        <button className='btn btn-warning' style={{ letterSpacing: "1px" }}><b>🥭 Mango</b></button>
                    </div>
                    <div className="col-lg-2">
                        <button className='btn btn-warning' style={{ letterSpacing: "1px" }}><b>🥝 KiWi</b></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={Image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title text-center"style={{fontFamily:"initial", letterSpacing:"2px"}} >Strawberry</h4>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark'style={{fontFamily:"initial"}}>₹ 250 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "170px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                        <div class="card mt-4" style={{ width: "20rem" }}>
                            <img src={Image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title text-center" style={{fontFamily:"initial", letterSpacing:"2px"}}>Grapes</h4>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark'style={{fontFamily:"initial"}}>₹ 140 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "150px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={Image1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center" style={{fontFamily:"initial", letterSpacing:"1px"}}>Mango</h5>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark'style={{fontFamily:"initial"}}>₹ 120 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "170px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                        <div class="card mt-4" style={{ width: "20rem" }}>
                            <img src={Image4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center" style={{fontFamily:"initial", letterSpacing:"1px"}}>Pineapple</h5>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark'style={{fontFamily:"initial"}}>₹ 100 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "170px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center" style={{fontFamily:"initial", letterSpacing:"1px"}}>Guava</h5>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark'style={{fontFamily:"initial"}}>₹ 120 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "170px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                        <div class="card mt-4" style={{ width: "20rem" }}>
                            <img src={Image5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center" style={{fontFamily:"initial", letterSpacing:"1px"}}>Pomegranate</h5>
                                <h5 className='text-center text-secondary'>Per Kg</h5>
                                <h5 className='text-center text-dark' style={{fontFamily:"initial"}}>₹ 200 --/Rs</h5>
                                <center>
                                    <button className='btn btn-outline-warning mt-3' style={{ width: "170px", letterSpacing: "1px" }}> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <center className='mt-5'>
                        <button className='btn btn-warning radious'>Prev</button>
                        <button className='btn btn-warning radious mx-2'>1</button>
                        <button className='btn btn-warning radious mx-2'>2</button>
                        <button className='btn btn-warning radious mx-2'>3</button>
                        <button className='btn btn-warning radious mx-2'>Next</button>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Shop
