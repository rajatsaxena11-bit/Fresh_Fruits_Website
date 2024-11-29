import React from 'react'
import Image from '../1. Home/img1/Hdfc Bank.png'
import Image1 from '../1. Home/img1/norton.jpg'
const NetBanking = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <center>
                            <img src={Image} alt="" className='img-fluid' />
                            <h6 style={{ letterSpacing: "1px" }}>Welcome to HDFC Bank NetBanking</h6>
                        </center>
                    </div>
                   <div className="section shadow">
                   <div className="row">
                        <div className="col-lg-12" style={{marginTop:"100px"}}>
                            <h5 className='text-secondary' style={{ letterSpacing: "1px" }}>Login to NetBanking</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <label htmlFor=""><h6 className='text-secondary mt-3'>Login to NetBanking</h6></label>
                            <input type="text" name="" id="" className='form-control' placeholder='User ID...'/>
                            <a href="#" style={{ textDecoration: "none" }}>Forgot Customer ID</a>
                            <br />
                            <br />
                            <br />
                            <button className='btn btn-success' style={{ marginLeft: "150px", width: "150px", letterSpacing: "1px" }}>CONTINUE</button>
                            <div className="section bg-secondary mt-5">
                                <div className="card bg-body-tertiary">
                                    <div className="card-body">
                                        Dear Customer,<br />
                                        Welcome to the new login page of HDFC Bank NetBanking<br />
                                        its lighter look and feel is designed to give you the best possible<br />
                                        user experience.Please continue to login using you customer ID <br />
                                        and password.

                                    </div>
                                </div>
                            </div>
                            <a href="#" style={{ textDecoration: "none" }}>Don't have a HDFC Bank Saving Account</a>
                            <br />
                            <br />
                            <br />
                            <br />
                            <a href="#">Credit Card only ? Login here</a>
                            <br />
                            <br />
                            <a href="#">Prepaid Card only ? Login here</a>
                            <br />
                            <br />
                            <a href="#">Retail Loan only ? Login here</a>
                        </div>
                        <div className="col-lg-7">
                            <img src={Image1} alt="" className='img-fluid' style={{ width: "21%", marginLeft: "300px" }} />
                           <div className="div" style={{marginLeft:"250px"}}>
                           <h6>Your security is of utmost important
                                <br />
                                <a href="#">Know more..</a>
                                <br />
                                <br />
                                <br />
                                <h6>First Time User ?
                                    <br />
                                    <a href="#">Register Now </a><span>for a host of convenient feature</span>
                                    <br />
                                    <h6>We have added a host of new feature !</h6>
                                    <br />
                                    <br />
                                    <p>
                                        You can now do so much more:
                                    </p>
                                    <ol>
                                        <li style={{fontSize:"15px"}}>
                                            Anywhere access through Destop or Mobile.
                                        </li>
                                         <li style={{fontSize:"15px"}}>
                                            Enhanced security measures.
                                        </li>
                                    </ol>
                                </h6>
                            </h6>
                           </div>
                        </div>

                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default NetBanking
