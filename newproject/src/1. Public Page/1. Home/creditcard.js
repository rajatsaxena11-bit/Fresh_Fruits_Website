import React, { useEffect, useState } from 'react'
import Image from '../1. Home/img1/3.jpg'
import Image1 from '../1. Home/img1/card.png'
import Image2 from '../1. Home/img1/ab.png'
import Image3 from '../1. Home/img1/vc.png'
import Image4 from '../1. Home/img1/bank.png'
import Image5 from '../1. Home/img1/gift-card.png'
import Image6 from '../1. Home/img1/transaction.png'
import Image7 from '../1. Home/img1/Capture.PNG'
import Image8 from '../1. Home/img1/google pay.png'
import Image9 from '../1. Home/img1/p.png'
import Image10 from '../1. Home/img1/ptm.png'
import { Link } from 'react-router-dom'

const Creditcard = () => {
    const [Fruits, setFruits] = useState([])
    // const [price, setprice] = useState(0)

    const FruitsCarts = () => {
        fetch("http://localhost:4567/cart")
            .then(Response => Response.json())
            .then(ProductCart => {
                setFruits(ProductCart)
            })
    }

    useEffect(() => {
        FruitsCarts()
        // Total()
    })

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        {
                            Fruits.map((info, index) => {
                                return (
                                    <>
                                        <section style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>
                                                <img src={Image} alt="" style={{ width: "10%", opacity: "0.5", cursor: "pointer" }} />
                                                <h3 class="card-title"> Fresh_Fruits_Payment || <span style={{ fontSize: "19px" }}> Secure Checkout <i class="fa-solid fa-lock"></i></span></h3>
                                            </div>
                                            <img src={Image7} alt="" style={{ cursor: "pointer", height: "50px" }} className='img-fluid mt-4' />
                                        </section>
                                        <label style={{ marginLeft: "55rem" }} className='text-secondary'>Question ? 1800-1050-6565 <span>ref #12304568877</span></label>
                                        <br />
                                        <br />
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr className='text-center' style={{ letterSpacing: "1px" }}>
                                                    <th><a href="#" style={{ textDecoration: "none" }}>1. Login</a></th>
                                                    <th><a href="#" style={{ textDecoration: "none" }}>2. Shipping</a></th>
                                                    <th><a href="#" style={{ textDecoration: "none" }}>3. Payment</a></th>
                                                    <th><a href="#" style={{ textDecoration: "none" }}>4. Reviews</a></th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div className="row">
                                            <h5 className='text-dark mx-5'>Payment Option Card</h5>
                                            <div className="col-lg-6 mx-5">
                                                <img src={Image1} alt="" className='img-fluid' style={{ width: "40px" }} />
                                                <img src={Image2} alt="" className='img-fluid mx-3' style={{ width: "40px" }} />
                                                <img src={Image3} alt="" className='img-fluid' style={{ width: "40px" }} />
                                                <img src={Image5} alt="" className='img-fluid mx-3' style={{ width: "38px", marginTop: "-10px" }} />
                                                <img src={Image6} alt="" className='img-fluid' style={{ width: "40px" }} />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <h5 className='text-dark'>Choose Your Card</h5>
                                                <div className="div mt-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked style={{ cursor: "pointer" }} />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            <h6 style={{ cursor: "pointer" }}> Credit Card</h6>
                                                            <div className="card" style={{width:"32rem"}}>
                                                                <div className="card-body">
                                                                <h6>Card Number</h6>
                                                                <div className="row">
                                                                    <div className="col-lg-3">
                                                                        <input type="number" name="" id="" className='form-control' placeholder='00-00'/>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                    <input type="number" name="" id="" className='form-control' placeholder='00-00'/>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                    <input type="number" name="" id="" className='form-control' placeholder='00-00'/>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                    <input type="number" name="" id="" className='form-control' placeholder='00-00'/>
                                                                    </div>
                                                                </div>
                                                                <h6 className='mt-3'>Card Name</h6>
                                                                <input type="text" name="" id="" className='form-control' placeholder='Card Name....'/>
                                                                <h6 className='mt-3'>Day/Months/Year</h6>
                                                                <input type="date" name="" id="" className='form-control' />
                                                                <h6 className='mt-3'>Card Validity</h6>
                                                                <input type="number" name="" id="" className='form-control' placeholder='Card Validity'/>
                                                                <center>
                                                                <button className='btn btn-success mt-3' style={{width:"150px", letterSpacing:"1px"}}>Proceed</button>
                                                                </center>
                                                                </div>
                                                            </div>
                                                        </label>
                                                        
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ cursor: "pointer" }} />
                                                        <label class="form-check-label" for="flexRadioDefault2">
                                                            <h6 style={{ cursor: "pointer" }}>Debit Card</h6>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" style={{ cursor: "pointer" }} />
                                                        <label class="form-check-label" for="flexRadioDefault3">
                                                            <h6 style={{ cursor: "pointer" }}>Master Card</h6>
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" style={{ cursor: "pointer" }} />
                                                        <label class="form-check-label" for="flexRadioDefault4">
                                                            <Link to = "/netbanking"><h6 style={{ cursor: "pointer",textDecoration:"none" }}>Net Banking</h6></Link>
                                                        </label>
                                                    </div>
                                                    <h5 className='mt-3 text-dark' style={{ letterSpacing: "1px" }}>Most Commonstly used modes of payment</h5>
                                                    <input type="radio" name="" id="" style={{ cursor: "pointer" }} />
                                                    <img src={Image8} alt="" width={50} style={{ borderRadius: "50%", cursor: "pointer" }} />
                                                    <input type="radio" name="" id="" style={{ marginLeft: "20px", cursor: "pointer" }} />
                                                    <img src={Image9} alt="" width={90} style={{ borderRadius: "50%", cursor: "pointer" }} />
                                                    <input type="radio" name="" id="" style={{ marginLeft: "20px", cursor: "pointer" }} />
                                                    <img src={Image10} alt="" width={70} style={{ borderRadius: "50%", cursor: "pointer" }} />
                                                    <br />
                                                    <br />
                                                    <h5 className='text-dark'>Total Pay Ammount : <span>₹ {info.price + 50} Rs.</span></h5>
                                                    <Link to = "/placeorder">
                                                    <button className='btn btn-primary mt-3' style={{ width: "150px" }}>Place Order</button>
                                                    </Link>
                                                </div>


                                            </div>

                                            <div className="col-lg-4" style={{marginTop:"100px"}}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                            <h5 class="card-title"><span style={{ fontSize: "18px" }}>My Order </span><a href="#" style={{ fontSize: "15px" }}>Edit</a></h5>
                                                            <button className='btn btn-primary' style={{ letterSpacing: "2px" }}>Continue <i class="fa-solid fa-arrow-right"></i></button>
                                                        </section>
                                                        <hr />
                                                        <table className='table table-bordered'>
                                                            <tbody>
                                                                <tr className='text-center'>
                                                                    <td><h6>Number of items</h6></td>
                                                                    <td><h6>{Fruits.length}</h6></td>
                                                                </tr>
                                                                <tr className='text-center'>
                                                                    <td><h6>Product Cost</h6></td>
                                                                    <td><h6>₹ {info.price} Rs.</h6></td>
                                                                </tr>
                                                                <tr className='text-center'>
                                                                    <td><h6>Delivery</h6></td>
                                                                    <td><h6>₹ 50 Rs.</h6></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <hr />
                                                        <table className='table table-bordered'>
                                                            <tbody>
                                                                <tr className='text-center'>
                                                                    <td><h6>Total</h6></td>
                                                                    <td><h6 className='text-dark'>₹ {info.price + 50} Rs.</h6></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creditcard
