import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [form, formdata] = useState({

        name: ' ',
        email: ' ',
        number: ' ',
        subject: ' ',
        message: ' '
    })
    const SaveData = () => {
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        var url = "http://localhost:4567/contact"
        fetch(url, postData)
            .then(Response => Response.json())
            .then(servercontact => {
                alert("Submitted SuccessFully")
            })
    }
    const Handlechange = (e) => {
        const { name, value } = e.target;
        formdata({
            ...form,
            [name]: value
        })
    }
    const HandleSubmitted = (e) => {
        e.preventDefault();
        console.log("Form Submitted", form)
        formdata({
            name: '',
            email: '',
            number: '',
            subject: '',
            message: ''
        })
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
                                <Link to="/contact"><a href="#"><b><i>Contact</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/shop"><a href="#"><b><i>Shop</i></b></a></Link>
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
                        <h5 className='mt-5 text-center'>Get 24/7 Support</h5>
                        <h2><i>Contact Us</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row" style={{ marginTop: "150px" }}>
                    <h3>Have you any question?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda.<br /> Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                </div>
                {/* <h2 className='text-danger'>{msg}</h2> */}
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <form onSubmit={HandleSubmitted}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <label className='text-secondary'><b><i>Name</i></b></label>
                                    <input type='text' className='form-control'
                                        name='name' value={form.name} onChange={Handlechange} />
                                    <label className='mt-3 text-secondary'><b><i>Number</i></b></label>
                                    <input type='number' className='form-control'
                                        name='number' value={form.number} onChange={Handlechange} />

                                </div>
                                <div className="col-lg-5">
                                    <label className='text-secondary'><b><i>Email</i></b></label>
                                    <input type='email' className='form-control'
                                        name='email' value={form.email} onChange={Handlechange} />
                                    <label className='mt-3 text-secondary'><b><i>Subject</i></b></label>
                                    <input type='subject' className='form-control'
                                        name='subject' value={form.subject} onChange={Handlechange} />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10">
                                    <label className='mt-3 text-secondary'><b><i>Message</i></b></label>
                                    <textarea cols={120} rows={12} className=' form-control'
                                        name='message' value={form.message} onChange={Handlechange}></textarea>
                                </div>
                            </div>
                            <button className='btn btn-info mt-3'
                                onClick={SaveData} style={{ width: "120px" }}>SUBMIT</button>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <h5 className='text-dark'><i class="fa-solid fa-map color"></i> Shop Address</h5>
                        <p>34/8, East Noida<br />
                            Opposite Metro Station,<br />
                            Country Name</p>
                        <h5 className='text-dark'><i class="fa-solid fa-clock color" style={{ marginTop: "30px" }}></i> Shop Hours</h5>
                        <p>MON - FRIDAY: 8 to 9 PM<br />
                            SAT - SUN: 10 to 8 PM</p>
                        <h5 className='text-dark'><i class="fa-solid fa-address-book color" style={{ marginTop: "30px" }}></i> Contact</h5>
                        <p>Phone: +00 111 222 3333<br />
                            Email: support@fruitkha.com</p>
                    </div>
                </div>

                {/* <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-lg-3 text-center">
                        <img src='https://static9.depositphotos.com/1002351/1211/i/950/depositphotos_12111170-stock-photo-whole-kiwi-fruit-and-his.jpg' className='img-fluid imagestyle'
                            style={{ width: "50%", cursor: "pointer" }} />
                        <p className='text-secondary'>
                            <b>Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre.</b>
                        </p>
                        <button className='btn btn-outline-info buttonhover button1'>Shop Now</button>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src='https://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg' className='img-fluid imagestyle'
                            style={{ width: "45%", cursor: "pointer" }} />
                        <p className='text-secondary'>
                            <b>Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre.</b>
                        </p>
                        <button className='btn btn-outline-info buttonhover button1'>Shop Now</button>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src='https://img.freepik.com/premium-photo/fruit-varieties-white-background_987687-51.jpg' className='img-fluid imagestyle'
                            style={{ width: "40%", cursor: "pointer" }} />
                        <p className='text-secondary'>
                            <b>Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre.</b>
                        </p>
                        <button className='btn btn-outline-info buttonhover button1'>Shop Now</button>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src='https://st.depositphotos.com/1592314/4214/i/450/depositphotos_42140483-stock-photo-mixed-berries-and-fruits-isolated.jpg imagestyle' className='img-fluid imagestyle'
                            style={{ width: "43%", cursor: "pointer" }} />
                        <p className='text-secondary'>
                            <b>Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre.</b>
                        </p>
                        <button className='btn btn-outline-info buttonhover button1'>Shop Now</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Contact
