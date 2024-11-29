import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../1. Home/img/discount.png'

const Cart = () => {
    const History = useNavigate();
    const [FruitsCart, UpdateFruits] = useState([])
    // const[message, setmessage] = useState()
    const [quentity, setQuentity] = useState(1)
    // const[price, setprice] = useState(0)
    // console.log(price)
    // const total = () =>{
    //         let price  = 0;
    //         FruitsCart.map((info, key)=>{
    //         price = info.price * info.quentity + price
    //     })
    //     setprice(price)
    // }
    const Increment = () => {
        setQuentity(prev => prev + 1)

    }
    const Decrement = () => {
        if (quentity > 1) {
            setQuentity(prev => prev - 1)
        }

    }


    const FruitsCarts = () => {
        fetch("http://localhost:4567/cart")
            .then(Response => Response.json())
            .then(ProductCart => {
                UpdateFruits(ProductCart)
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

                // if(id == 1){
                //     History("/")
                // }else{
                //     // console.log("false")
                // }

            })
            .catch(error => console.error("Error Deleting Item", error))
        // History("/")

    }


    useEffect(() => {
        FruitsCarts()
        // total()
    })
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
                        <h5 className='mt-5 text-center' style={{ cursor: 'pointer' }}>We sale fresh fruits</h5>
                        <h2><i>My_Cart</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{ marginTop: "100px" }}>
                        {/* <h3>{message}</h3> */}
                        <table className='table table-bordered'>
                            <thead>
                                <tr className='text-center'>
                                    {/* <th>Sl No</th> */}
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    {/* <th>Total</th> */}
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    FruitsCart.map((info, key) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    {/* <td>{info.index}</td> */}

                                                    <td ><img src={info.image} alt="" style={{ width: "8rem" }} /></td>
                                                    <td><h5 className='mt-4 text-dark'>{info.name}</h5></td>
                                                    <td><h5 className='mt-4 text-dark'>₹ {info.price}.Rs</h5></td>

                                                    <td>
                                                        <div className='mt-4'>
                                                            <button className='btn btn-success mx-2 ' style={{ fontSize: "10px", }}
                                                                onClick={Decrement}><i class="fa-solid fa-minus"></i></button>
                                                            <span style={{ fontSize: "19px" }}>{quentity}</span>
                                                            <button className='btn btn-success mx-2' style={{ fontSize: "10px" }}
                                                                onClick={Increment}><i class="fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </td>
                                                    {/* <td >{info.total}</td> */}
                                                    <td
                                                        style={{ cursor: "pointer" }}><h5 className='mt-4 text-danger'
                                                            onClick={() => Delete(info.id)}><i class="fa-solid fa-x"></i></h5></td>
                                                </tr>

                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3" style={{ marginTop: "100px" }}>
                        <table className='table table-bordered'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    FruitsCart.map((info, key) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    <td><h6>Price  </h6> </td>
                                                    <h6>₹ {info.price} Rs.</h6>
                                                </tr>
                                                <tr className='text-center'>
                                                    <td><h6>Shipping Charge  </h6></td>
                                                    <h6>₹ 50 Rs.</h6>
                                                </tr>
                                                <tr className='text-center'>
                                                    <td><h6>Total  </h6></td>
                                                    <h6>₹ {info.price+50} Rs.</h6>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to = "/modify"><button className='btn btn-success'>Update Cart</button></Link>
                        <Link to = "/checkout1"><button className='btn btn-success mx-3'>Checkout</button></Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="div">
                            <h4 style={{ letterSpacing: "1px" }}>
                                <img src={Image} alt="" style={{ width: "10%" }} /> Apply Coupen</h4>
                            <input type="text" name="" id="" className='form-control' placeholder='Coupen Code.......' />
                            <button className='btn btn-secondary mt-2' style={{ width: "100px", letterSpacing: "1px" }}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
