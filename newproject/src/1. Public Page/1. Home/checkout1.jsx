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
import Image9 from '../1. Home/img1/phone-pay-logo.png'
import Image10 from '../1. Home/img1/ptm.png'
import Image11 from '../1. Home/img1/ghj.jpg'
import Image12 from '../1. Home/img1/deliveryaddress.png'
import Image13 from '../1. Home/img1/paymentimage.png'
import { Link } from 'react-router-dom'

const Checkout1 = () => {

    const [Fruits, setFruits] = useState([])
    const [form, updateform] = useState({
        img: ' ',
        firstname: ' ',
        lastname: ' ',
        email: ' ',
        number: ' ',
        address: ' ',
        city: ' ',
        state: ' ',
        postcode: ' ',
        country: ' '
    })
    const SaveShipping = () => {
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        var url = "http://localhost:4567/orderlist"
        fetch(url, postData)
            .then(Response => Response.json())
            .then(shipping => {
                alert("Your Has Been Placed")
            })
    }
    const Handlechange = (e) => {
        const { name, value } = e.target;
        updateform({
            ...form,
            [name]: value
        })
    }
    const Handlesubmit = (e) => {
        e.preventDefault();
        console.log("Your Has Been Placed", form)
        updateform({
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            address: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        })
    }


    const FruitsCarts = () => {
        fetch('http://localhost:4567/cart')
            .then(Response => Response.json())
            .then(ProductCart => {
                setFruits(ProductCart)
            })
    }
    const Delete = (id) => {
        fetch(`http://localhost:4567/cart/${id}`, {
            method: 'DELETE'
        })
            .then(Response => Response.json())
            .then(() => {
                const updatedItem = FruitsCart.filter(FruitsCart => FruitsCart.info.id !== info.id)
                UpdateFruits(updatedItem)
                setmessage("Delete Items")

            })
            .catch(error => console.error("Error Deleting Item", error))

    }



    useEffect(() => {
        FruitsCarts()

    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-2">
                        <section style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <img src={Image} alt="" style={{ width: "10%", opacity: "0.5", cursor: "pointer" }} />
                                <h3 class="card-title"> Fresh_Fruits_Payment || <span style={{ fontSize: "19px" }}> Secure Checkout <i class="fa-solid fa-lock"></i></span></h3>
                            </div>
                            <img src={Image7} alt="" style={{ cursor: "pointer", height: "50px" }} className='img-fluid mt-4' />
                        </section>
                        <label style={{ marginLeft: "59rem" }} className='text-secondary'>Question ? 1800-1050-6565 <span>ref #12304568877</span></label>
                        <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>1. REVIEW YOUR ORDER (1 ITEMS)</h6>
                                <div className="row mt-5">
                                    {
                                        Fruits.map((info, index) => {
                                            return (
                                                <>
                                                    <div className="col-lg-3">
                                                        <img src={info.image} alt=""
                                                            style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <h6 >{info.name}</h6>
                                                        <h6 >Qty : 1</h6>
                                                        <h6  >Price : ₹ {info.price} Rs.</h6>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h5 style={{ marginLeft: "70px", cursor: "pointer" }}
                                                            onClick={() => Delete(info.id)}><i class="fa-solid fa-x"></i></h5>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <h6 style={{ marginLeft: "280px" }}>COD : ₹  50 Rs.</h6>
                            {
                                Fruits.map((info, index) => {
                                    return (
                                        <>
                                            <h6 className='mt-5 mx-4' >SubTotal : <span style={{ marginLeft: "210px" }}>₹ {info.price + 50} Rs.</span></h6>
                                        </>
                                    )
                                })
                            }
                            <br />
                            <br />
                            <h6 className='mx-1'> <h6 className='mx-4'>Shipping to (state or provincel)</h6>
                                <div className="col-lg-8 mx-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected className='bg-primary text-white'><b>Madhya Pradesh</b></option>
                                        <ul start="1">
                                            <li>
                                                <option value="1">Bhopal</option>
                                                <option value="2">Sagar</option>
                                                <option value="3">Indore</option>
                                                <option value="4">Pune</option>
                                                <option value="5">Sehore</option>
                                            </li>
                                        </ul>
                                        <option className='bg-primary text-white'>Uttar Pradesh</option>
                                        <ul start="1">
                                            <li>
                                                <option value="0">Noida</option>
                                                <option value="1">Delhi NCR</option>
                                                <option value="2">Greater Noida</option>
                                                <option value="3">Mahoba</option>
                                                <option value="3">Bina</option>
                                            </li>
                                        </ul>
                                        <option className='bg-primary text-white'>Arunachal Pradesh</option>
                                        <option className='bg-primary text-white'>Uttrakhand Pradesh</option>
                                    </select>
                                </div>
                                <br />
                            </h6>
                            <br />
                            <br />
                            <div className="section">
                                <h6 className='mx-4'>Select Delivery : </h6>
                                <div className="section bg-body-tertiary" style={{ height: "80px" }}>
                                    <div className="row mt-4">
                                        <div className="col-lg-4 mt-2">
                                            <h6 className='mx-4'>FREE</h6>
                                        </div>
                                        <div className="col-lg-4 mt-2">
                                            <h6>Regular</h6>
                                            <p style={{ fontSize: "10px" }}>(5-10 Bussiness days, tracking)</p>
                                        </div>
                                        <div className="col-lg-4 mt-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                    style={{ cursor: "pointer" }} cl />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className='mx-4'>Delivery is calculated according to item size</a>
                            <br />
                            <br />
                            <h6 className='mx-5'><b>For Quickly Payment</b></h6>
                            <button className='btn btn-primary mt-3 mx-4'>Check out with <i class="fa-brands fa-paypal"></i></button>
                            <p style={{ fontSize: "12px" }} className='mx-4 text-secondary'>
                                use your paypal account to complete the transition and avoid entering billing or delivery infomation
                            </p>

                            <h6 className='mx-4 mt-5'>or, for other payment method: </h6>
                            <button className='btn btn-primary mt-3 mx-4'>CONTINUE TO DELIVERY ADDRESS</button>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="section">

                            <div className="card">

                                <div className="card-body">

                                    <h6>2. DELIVERY ADDRESS</h6>



                                    <p style={{ fontSize: "13px" }} className='text-danger'>*All field required</p>
                                    <form onSubmit={Handlesubmit}>

                                        <label For="floatingInput" style={{ fontSize: "15px" }}><b>Email*</b></label>
                                        <input type="email" name="email" id="floatingInput" className='form-control' placeholder='Email'
                                            value={form.email}
                                            onChange={Handlechange} />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>First Name*</b></label>
                                        <input type="text" name="name" id="floatingInput" className='form-control' placeholder='First Name'
                                            />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>Last Name*</b></label>
                                        <input type="text" name="name" id="floatingInput" className='form-control' placeholder='Last Name'
                                            />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>Telephone*</b></label>
                                        <input type="number" name="number" id="floatingInput" className='form-control' placeholder='Telephone'
                                            value={form.number}
                                            onChange={Handlechange} />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>Delivery Address*</b></label>
                                        <textarea type="text" name="address" id="floatingInput" className='form-control' placeholder='Address'
                                           ></textarea>


                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>Town/City*</b></label>
                                        <input type="text" name="city" id="floatingInput" className='form-control' placeholder='Town/City'
                                           />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>State/Territory*</b></label>
                                        <input type="text" name="state" id="floatingInput" className='form-control' placeholder='State/Territory'
                                           />

                                        <label For="floatingInput" style={{ fontSize: "15px" }} className='mt-3'><b>Postcode*</b></label>
                                        <input type="number" name="number" id="floatingInput" className='form-control' placeholder='Postcode'
                                            value={form.postcode}
                                            onChange={Handlechange} />

                                        <label htmlFor="" style={{ fontSize: "15px" }} className='mt-3'><b>Country*</b></label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Madhya Pradesh</option>
                                            <option value="1">Uttar Pradesh</option>
                                            <option value="2">Arunchal Pradesh</option>
                                            <option value="3">Uttrakhand</option>
                                        </select>

                                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel1">Modal title</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">


                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <img src={Image13} alt="" style={{ width: "100%" }} />
                                                                <p className='text-secondary'>
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nemo. Velit aliquid iusto nemo vero.
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <h6 className='mt-5 text-dark' style={{ letterSpacing: "1px", fontSize: "13px" }}><i class="fa-solid fa-arrow-right"></i> <b>Most Commonstly used modes of payment</b></h6>
                                                                <div class="form-check" className='mt-4'>
                                                                    <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                                        style={{ cursor: "pointer" }} />
                                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                                        <img src={Image8} alt="" width={50} style={{ borderRadius: "10%", cursor: "pointer" }} className='mx-4' />
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                                        style={{ cursor: "pointer" }} />
                                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                                        <img src={Image9} alt="" width={90} style={{ borderRadius: "10%", cursor: "pointer" }} className='mt-3 mx-3' />
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                                        style={{ cursor: "pointer" }} />
                                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                                        <img src={Image10} alt="" width={70} style={{ borderRadius: "50%", cursor: "pointer" }} className='mt-2 mx-3' />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary" style={{ width: "120px", letterSpacing: "1px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">PAY</button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <button type="button" className='mt-4 btn btn-primary' style={{ width: "390px" }}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                        >Place Order</button>
                                    </form>
                                    <div class="form-check" className='mt-5'>
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ cursor: "pointer" }} />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            <h6 className='mx-3'><b> Same Billing Address</b></h6>
                                        </label>

                                    </div>



                                </div>
                            </div>

                        </div>















                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>3. SELECT PAYMENT METHOD</h6>
                                <div class="form-check" className='mt-4'>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <h6 className='mx-3' style={{ cursor: "pointer" }}><b> Credit Card</b></h6>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <h6 className='mx-2' style={{ cursor: "pointer" }}><b> Debit Card</b></h6>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <h6 className='mx-2' style={{ cursor: "pointer" }}><b> Master Card</b></h6>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <Link to="/netbanking" style={{textDecoration:"none",listStyle:"none"}} className='text-dark'><h6 className='mx-2' style={{ cursor: "pointer"}}><b> NetBanking</b></h6></Link>
                                    </label>
                                </div>
                                <h6 className='mt-5 text-dark' style={{ letterSpacing: "1px" }}><i class="fa-solid fa-arrow-right"></i> <b>Most Commonstly used modes of payment</b></h6>
                                <div class="form-check" className='mt-4'>
                                    <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <img src={Image8} alt="" width={50} style={{ borderRadius: "10%", cursor: "pointer" }} className='mx-4' />
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <img src={Image9} alt="" width={90} style={{ borderRadius: "10%", cursor: "pointer" }} className='mt-3 mx-3' />
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <img src={Image10} alt="" width={70} style={{ borderRadius: "50%", cursor: "pointer" }} className='mt-2 mx-3' />
                                    </label>
                                </div>
                            </div>
                            <div className="card bg-body-tertiary" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6>ORDER SUMMARY</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p>
                                                <b> 1 x Note Sleeve. Tan</b>
                                            </p>
                                            <br />
                                            <h6>SubTotal : </h6>
                                            <br />
                                            <h6>Shipping to Madhya Pradesh</h6>
                                            <p style={{ fontSize: "12px" }}>
                                                Regular (5-10 business days tracking)
                                            </p>
                                            <br />
                                            <h6>Sales Tax : </h6>
                                        </div>
                                        <div className="col-lg-6">
                                            {
                                                Fruits.map((info, index) => {
                                                    return (
                                                        <>
                                                            <p>
                                                                <b> ₹ {info.price} Rs. - </b>
                                                            </p>
                                                            <br />
                                                            <p>
                                                                <b> ₹ {info.price + 50 + 15.17} Rs. - </b>
                                                            </p>
                                                            <br />
                                                            <p>
                                                                <b> ₹ 50 Rs. - </b>
                                                            </p>
                                                            <br />
                                                            <br />
                                                            <p className='mt-3'>
                                                                <b> ₹ 15.17 Rs. - </b>
                                                            </p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            <p style={{ fontSize: "11px" }}>
                                                I'm keen for new releases and subscribe exclusive .Sign me Up*
                                            </p>
                                        </label>
                                    </div>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog  modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="section" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                                        <img src={Image12} alt="" style={{ width: "40%" }} />
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio cumque, qui sequi numquam eius labore id quos veniam tempore, fugiat non!
                                                        </p>
                                                    </div>
                                                    {
                                                        Fruits.map((info, index) => {
                                                            return (
                                                                <>
                                                                    <button type="button" className='btn btn-success' style={{ width: "470px", letterSpacing: "1px" }}
                                                                        onClick={SaveShipping}>PAY NOW : ₹ {info.price + 50 + 15.17}</button>
                                                                </>
                                                            )
                                                        })
                                                    }


                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                        style={{ width: "120px", letterSpacing: "1px" }}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className='btn btn-success mt-5' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "350px", letterSpacing: "1px" }}>PAY NOW</button>
                                    <p style={{ fontSize: "10px" }} className='mt-3'>
                                        *By singning up or placing an order you're consenting to our privacy policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Checkout1
