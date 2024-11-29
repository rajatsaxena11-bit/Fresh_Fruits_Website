import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
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
            <h2><i>Edit</i></h2>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10" style={{marginTop:"100px"}}>
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='text-center'>
                                <th>Edit</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    Fruits.map((info, key) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    {/* <td>{info.index}</td> */}
                                                  <Link to = "/modify"><td><h6 className='mt-5'>Edit</h6></td></Link>
                                                    <td ><img src={info.image} alt="" style={{ width: "8rem" }} /></td>
                                                    <td><h5 className='mt-4 text-dark'>{info.name}</h5></td>
                                                    <td><h5 className='mt-4 text-dark'>₹ {info.price}.Rs</h5></td>

                                                    <td>
                                                        <div className='mt-4'>
                                                            <button className='btn btn-success mx-2 ' style={{ fontSize: "10px", }}
                                                               ><i class="fa-solid fa-minus"></i></button>
                                                            <span style={{ fontSize: "19px" }}>1</span>
                                                            <button className='btn btn-success mx-2' style={{ fontSize: "10px" }}
                                                                ><i class="fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </td>
                                                    {/* <td >{info.total}</td> */}
                                                    <td
                                                        style={{ cursor: "pointer" }}><h5 className='mt-4 text-danger'
                                                            ><i class="fa-solid fa-x"></i></h5></td>
                                                </tr>

                                            </>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Edit
