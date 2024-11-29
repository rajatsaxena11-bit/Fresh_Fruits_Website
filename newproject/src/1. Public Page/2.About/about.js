import React from 'react'
import '../1. Home/style.css'
import Image from '../2.About/img/1.PNG'
import Image1 from '../2.About/img/2.PNG'
import Image2 from '../2.About/img/3.PNG'
import Image3 from '../2.About/img/4.PNG'
import Image4 from '../2.About/img/5.PNG'
import Image5 from '../2.About/img/6.PNG'
import Image6 from '../2.About/img/7.PNG'
import Image7 from '../2.About/img/8.PNG'
import { Link } from 'react-router-dom'

const About = () => {
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
                                <Link to="/"><a href="#"><b><i>Home</i></b></a></Link>
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
                        <h2><i>About</i></h2>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{ marginTop: "100px" }}>
                            <h1 style={{ marginLeft: "50px", letterSpacing: "2px", fontFamily: "initial", marginTop: "30px" }}
                            >Why <span style={{ color: "coral" }}>FruitsCarts</span> <i class="fa-solid fa-apple-whole" style={{ color: "coral" }}></i></h1>
                            <div className="div" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "50px" }}>

                                <div className="div">
                                    <h4><i class="fa-solid fa-truck"></i> Home Delivery</h4>
                                    <p>
                                        sit voluptatem accusantium dolore<br /> mque laudantium, totam rem<br /> aperiam, eaque ipsa quae ab<br /> illo.
                                    </p>
                                </div>

                                <div className="div">
                                    <h4><i class="fa-solid fa-money-bill"></i> Best Price</h4>
                                    <p>
                                        sit voluptatem accusantium dolore<br /> mque laudantium, totam rem<br /> aperiam, eaque ipsa quae ab<br /> illo.
                                    </p>
                                </div>
                            </div>
                            <div className="div" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div className="div">
                                    <h4><i class="fa-solid fa-business-time"></i> Custom Box</h4>
                                    <p>
                                        sit voluptatem accusantium dolore<br /> mque laudantium, totam rem<br /> aperiam, eaque ipsa quae ab<br /> illo.
                                    </p>
                                </div>
                                <div className="div">
                                    <h4><i class="fa-solid fa-arrows-rotate"></i> Quick Refund</h4>
                                    <p>
                                        sit voluptatem accusantium dolore<br /> mque laudantium, totam rem<br /> aperiam, eaque ipsa quae ab<br /> illo.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6" style={{ marginTop: "80px" }}>
                            <img src={Image} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12" style={{ marginTop: "50px" }}>
                        <img src={Image1} alt="" className='img-fluid' style={{ borderradious: "100%" }} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-lg-12">
                        <h2 className='text-center text-dark' style={{ fontWeight: "bold", fontSize: "30px", letterSpacing: "1px" }}> Our <span style={{ color: "coral", letterSpacing: "1px", fontFamily: "inherit", textDecoration: "underline" }}><span style={{ fontSize: "35px" }}></span>Team</span>
                        </h2>
                        <p className='text-center' style={{ fontFamily: "initial", fontSize: "19px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas<br />
                            itaque eveniet beatae optio.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "5px" }}>
                    <div className="col-lg-4">
                        <img src={Image2} alt="" className='img-fluid imagehover ' style={{ width: "90%" }} />
                        <h5 style={{ letterSpacing: "1px" }} className='text-center mt-2 text-dark'>Jimmy Doe</h5>
                        <h6 className='text-secondary text-center' style={{ letterSpacing: "1px" }}><b>Farmer</b></h6>
                    </div>
                    <div className="col-lg-4">
                        <img src={Image3} alt="" className='img-fluid imagehover' style={{ width: "90%" }} />
                        <h5 style={{ letterSpacing: "1px" }} className='text-center mt-2 text-dark'>Marry Doe</h5>
                        <h6 className='text-secondary text-center' style={{ letterSpacing: "1px" }}><b>Farmer</b></h6>
                    </div>
                    <div className="col-lg-4">
                        <img src={Image4} alt="" className='img-fluid imagehover' style={{ width: "90%" }} />
                        <h5 style={{ letterSpacing: "1px" }} className='text-center mt-2 text-dark'>Simon Joe</h5>
                        <h6 className='text-secondary text-center' style={{ letterSpacing: "1px" }}><b>Farmer</b></h6>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <center>
                                    <img src={Image5} class="d-block" alt="..." />
                                    <h4 className='mt-4'>David Niph</h4>
                                    <h6>Local Shop Owner</h6>
                                    <p className='text-secondary' style={{ fontFamily: "monospace" }}>Sed ut perspiciatis unde omnis iste nates<br /> error veritatis et quais architecto beatae<br />
                                        vitae dict ipse quise ab illo inventori Sed ut<br /> Sed ut perspiciatis unde omnis iste nates error sit<br /> voluptatem accusantium</p>
                                    <h2 className='fs-1'> ,, </h2>
                                </center>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <center>
                                    <img src={Image6} class="d-block" alt="..." />
                                    <h4 className='mt-4'>Jacob Sikim</h4>
                                    <h6>Local Shop Owner</h6>
                                    <p className='text-secondary' style={{ fontFamily: "monospace" }}>Sed ut perspiciatis unde omnis iste nates<br /> error veritatis et quais architecto beatae<br />
                                        vitae dict ipse quise ab illo inventori Sed ut<br /> Sed ut perspiciatis unde omnis iste nates error sit<br /> voluptatem accusantium</p>
                                    <h2 className='fs-1'> ,, </h2>
                                </center>
                            </div>
                            <div class="carousel-item">
                                <center>
                                    <img src={Image7} class="d-block" alt="..." />
                                    <h4 className='mt-4'>Saira Hakim</h4>
                                    <h6>Local Shop Owner</h6>
                                    <p className='text-secondary' style={{ fontFamily: "monospace" }}>Sed ut perspiciatis unde omnis iste nates<br /> error veritatis et quais architecto beatae<br />
                                        vitae dict ipse quise ab illo inventori Sed ut<br /> Sed ut perspiciatis unde omnis iste nates error sit<br /> voluptatem accusantium</p>
                                    <h2 className='fs-1'> ,, </h2>
                                </center>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
