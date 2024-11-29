import React from 'react'
import Image from '../1. Home/img1/Google-Pay-logo.png'
import Image1 from '../1. Home/img1/phone-pay-logo.png'
import Image2 from '../1. Home/img1/ptmcopy.png'
import Image3 from '../1. Home/img1/paymentimage.png'
import { Link } from 'react-router-dom'
const Placeorder = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className='text-dark' style={{ marginTop: "150px" }}>Support multiple electronic<br /> payment methods</h4>
                        <p style={{fontSize:"18px"}}>
                            FruitsOne integrates with a number of secure third-party<br/> payment gateways to provide diversified electronic payment<br/> methods, including Visa, Mastercard, American Express,<br/> UnionPay, Apple Pay, Google Pay, PayPal, FPS, Alipay Hong<br/> Kong, WeChat Pay HK, Octopus etc. It also supports PayMe for<br/> Business to connect you with more than 2.7 million PayMe <br/>users in Hong Kong, and customers can transfer money<br/> instantly, without having to spend a lot of time and manpower<br/> on collection work, and improve business efficiency.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={Image3} alt="" style={{ cursor: "pointer", width: "90%" }} />
                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" style={{ marginTop: "30px" }}>
                        <h5 className='text-dark'>Choose Payment Option</h5>
                        <div className="card">
                            <div className="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <Link to = "/googlepay"><img src={Image} alt="" style={{ width: "37%", cursor: "pointer" }} className='mx-1' /></Link>
                                    </label>
                                </div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <img src={Image1} alt="" style={{ width: "29%", cursor: "pointer" }} className='mx-2' />
                                    </label>
                                </div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ cursor: "pointer" }} />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <img src={Image2} alt="" style={{ width: "18%", cursor: "pointer" }} className='mx-3' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}

export default Placeorder
