import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../3. News/img/pexels-pixabay-65256.jpg'
import Image1 from '../3. News/img/pexels-qjpioneer-708777 (1).jpg'
import Image2 from '../3. News/img/pexels-pixabay-60021.jpg'
import Image3 from '../3. News/img/pexels-asphotograpy-867349.jpg'
import Image4 from '../3. News/img/pexels-lovefoodart-1437598.jpg'
import Image5 from '../3. News/img/pexels-psco-139229.jpg'

const News = () => {
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
                                <Link to = "/about"><a href="#"><b><i>About</i></b></a></Link>
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
                                    <Link to = "/about"><a href="#"><b><i>About</i></b></a></Link>
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
                                    <Link to = "/singlenews"><a href="#"><b><i>Single News</i></b></a></Link>
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
                        <h5 className='mt-5 text-center'>Organic Information</h5>
                        <h2><i>News Articles</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "22rem" }}>
                            <img src={Image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">You will vainly look for fruit on it in autumn.</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
                        {/* ------- */}
                        <div class="card mt-5" style={{ width: "22rem" }}>
                            <img src={Image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fall in love with the fresh orange</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
                        {/* ------- */}
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "22rem" }}>
                            <img src={Image1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">A man's worth has its season, like tomato.</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
                        {/* --------- */}
                        <div class="card mt-5" style={{ width: "22rem" }}>
                            <img src={Image4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Why the berries always look delecious</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
                        {/* -------- */}
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "22rem" }}>
                            <img src={Image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Good thoughts bear good fresh juicy fruit.</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
                        {/* -------- */}
                        <div class="card mt-5" style={{ width: "22rem" }}>
                            <img src={Image5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Love for fruits are genuine of John Doe</h5>
                                <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                                </p>
                                <p class="card-text" style={{ fontFamily: "initial", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                <a href="#" style={{ fontSize: "17px" }}>Read more..> </a>
                            </div>
                        </div>
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
        </>
    )
}

export default News
