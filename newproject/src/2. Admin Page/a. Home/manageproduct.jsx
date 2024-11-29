import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Manageproduct = () => {
    const [Fruit, SetFruits] = useState([])

  const OneFruit = () => {
    fetch("http://localhost:4567/FruitsData")
      .then(Response => Response.json())
      .then(Array => {
        SetFruits(Array)
      })
  }

  useEffect(() => {
    OneFruit()
  }, [1])
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
                                <Link to="/"><a href="#"><b><i><i class="fa-solid fa-house"></i> Dashboard</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/manageproduct"><a href="#"><b><i><i className='fa fa-suitcase'></i> Manage Product</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/manageorder"><a href="#"><b><i> <i className='fa fa-headset'></i> Manage order</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/shop"><a href="#"><b><i><i className='fa fa-user'></i> Welcome to Admin</i></b></a></Link>
                            </li>
                            <li>
                                <Link to="/shop"><a href="#" onClick={logout}><b><i>Logout <i className='fa fa-power-off text-danger'></i></i></b></a></Link>
                            </li>
                        </div>
                        <h5 className='mt-5 text-center' style={{ cursor: 'pointer' }}>We sale fresh fruits</h5>
                        <h2><i>Manage Product</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h4 className="text-center mt-5" style={{ textDecoration: "underline" }}> Available Products : {Fruit.length} </h4>
                    <div className="col-lg-3" style={{ marginTop: "80px" }}>
                        <h5 className='text-secondary' style={{ fontSize: "18px" }}>Product Name :</h5>
                        <input type='text' className='form-control' />
                        <h5 className='mt-3 text-secondary' style={{ fontSize: "18px" }}>Product Price :</h5>
                        <input type='number' className='form-control' />
                        <h5 className='mt-3 text-secondary' style={{ fontSize: "18px" }}>Product Image :</h5>
                        <img src='https://tiimg.tistatic.com/fp/1/007/744/fresh-and-natural-no-added-preservatives-good-for-health-delicious-red-apple-944.jpg'
                            style={{ width: "40%", cursor: "pointer" }} />
                        <h5 className='mt-5 text-secondary' style={{ fontSize: "18px" }}>More Details : </h5>
                        <textarea rows={5} cols={50} className='form-control' ></textarea>
                        <button className='btn btn-outline-info mt-3 buttonhover button1'>Update Product</button>
                    </div>
                    <div className="col-lg-9" style={{ marginTop: "80px" }}>
                        {/* <h4 className="text-center"> Available Products : 2 </h4> */}
                        <table className='table table-bordered mt-4'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Edit</th>
                                    <th>PID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Details</th>
                                    <th>Product Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                Fruit.map((info, index) => {
                                    return (
                                        <tr className='text-center'>
                                            <td><a href="#"><b>Edit</b></a></td>
                                            <td>{info.id}</td>
                                            <td className='text-secondary'><b>{info.name}</b></td>
                                            <td className='text-secondary'><b>₹ {info.price}--/Rs</b></td>
                                            <td className='text-secondary'><b>Fresh Fruits For Better Health</b></td>
                                            <td style={{ width: "10rem" }}>
                                                <img src={info.image}
                                                    style={{ width: "70%", cursor: "pointer" }} />
                                            </td>
                                            <td>
                                               <h5><i class="fa-solid fa-x text-danger mt-4"></i></h5>
                                            </td>
                                        </tr>
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

export default Manageproduct

const logout = () => {
    localStorage.clear()
    window.location.href = "http://localhost:3000/#"
    window.location.reload()
}
