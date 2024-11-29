import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Manageorder = () => {

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
                        <h2><i>Manage Order</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='text-center mt-5'> Recent Orders : 1 </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manageorder

const logout = () => {
    localStorage.clear()
    window.location.href = "http://localhost:3000/#"
    window.location.reload()
}
