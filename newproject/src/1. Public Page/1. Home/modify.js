import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Modify = () => {
    const [Fruit, SetFruits] = useState([])

    const FruitsFresh = () => {
        fetch("http://localhost:4567/FruitsData1")
            .then(Response => Response.json())
            .then(ProductAll => {
                SetFruits(ProductAll)
            })
    }
    const Send = (info) => {
        const postData = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info)
        };
        const url = "http://localhost:4567/cart"
        fetch(url, postData)
        .then(Response=>Response.json())
        .then(Product=>{
          console.log(Product)
        })
      }

      
    useEffect(() => {
        FruitsFresh()
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
                        <h2><i>Modify</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{ marginTop: "100px" }}>
                        <table className='table table-bordered'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Add to cart</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Fruit.map((info, key) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    <td>{key}</td>
                                                    <td>
                                                        <img src={info.image} alt="" style={{ width: "20%" }} />
                                                    </td>
                                                    <td>
                                                        <h6 className='mt-3'>{info.name}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='mt-3'>{info.price}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='mt-3'>{info.qty}</h6>
                                                    </td>
                                                    <td>
                                                        <Link to = "/cart">
                                                        <a href="#" class="btn btn-outline-primary mt-3" style={{ marginLeft: "40px", width: "160px" }}
                                                        onClick={()=>Send(info)}><i class="fa-solid fa-cart-shopping"></i>  Updated Items</a>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <h5 className='mt-3'> <i class="fa-solid fa-x"></i></h5>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modify
