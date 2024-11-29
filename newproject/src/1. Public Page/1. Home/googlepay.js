import React, { useEffect, useState } from 'react'
import Image from '../1. Home/img1/gpay.jpg'
import Image1 from '../1. Home/img1/deliveryaddress.png'
const Googlepay = () => {
    // const History = useNavigate();
    const [FruitsCart, UpdateFruits] = useState([])
    


    const FruitsCarts = () => {
        fetch("http://localhost:4567/cart")
            .then(Response => Response.json())
            .then(ProductCart => {
                UpdateFruits(ProductCart)
            })

    }
    useEffect(() => {
        FruitsCarts()
        // total()
    })

    return (
        <>
            <div className="container">
                <div className="row" style={{marginTop:"100px"}}>
                    <div className="col-lg-6">
                        <h4>Connect with ShipAny intelligent<br /> logistics platform to provide<br /> more diversified logistics service<br /> options</h4>
                        <p style={{fontSize:"17px"}} className='mt-4'>
                            FruitsOne is well aware of the needs of merchants and customers for logistics services. In order to provide you with more diversified logistics service options, STOREBERRY not only supports merchants to customize logistics options and pre-built a SF Express address list for you to choose from, but also cooperates with ShipAny Smart Logistics Gateway to provide more convenient channels for you to directly connect to multiple local logistics service providers.
                            After successfully connecting to ShipAny, merchants can connect to multiple different logistics providers with just one click. The system also supports shipment splitting, automatic generation and submission of waybills, and door-to-door parcel collection, automatic package tracking code, etc., let the automated logistics system save you more time and labor costs!
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={Image1} alt="" style={{ width: "90%" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 mx-5">
                        {
                            FruitsCart.map((info, key) => {
                                return (
                                    <>
                                        <img src={Image} alt="" style={{ width: "25%", marginLeft:"100px" }} />
                                        <br />
                                        <button className='btn btn-primary mt-2' style={{ width: "230px", letterSpacing: "1px",  marginLeft:"70px" }}><h5 className='text-white'> Pay Now : ₹ {info.price + 50} Rs.</h5></button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default Googlepay
