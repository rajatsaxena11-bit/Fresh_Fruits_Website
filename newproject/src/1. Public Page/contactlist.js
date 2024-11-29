import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contactlist = () => {
    const [contact, setContact] = useState([])

    const Twofruits = () => {
        fetch("http://localhost:4567/contact")
            .then(Response => Response.json())
            .then(AllProduct => {
                setContact(AllProduct)
            })
    }
    const Delete = (id) => {
        fetch(`http://localhost:4567/contact/${id}`, {
            method: 'DELETE'
        })
       .then(Response=>Response.json())
       .then(()=>{
        const UpdateDelete = contact.filter(contact=>contact.info.id !== info.id)
        setContact(UpdateDelete)
       })
       .catch(error=>console.log("Error Deleting Data", error))
    }

    useEffect(() => {
        Twofruits()
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
                                <Link to="/"><a href="#" onClick={logout}><b><i>Logout <i className='fa fa-power-off text-danger'></i></i></b></a></Link>
                            </li>
                        </div>
                        <h5 className='mt-5 text-center' style={{ cursor: 'pointer' }}>We sale fresh fruits</h5>
                        <h2><i>Contact-List</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action " aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1 text-dark fw-bold" style={{ letterSpacing: "1px" }}>Contacted You</h6>
                                    <h5 style={{ borderRadius: "200%" }} className='text-dark'> {contact.length}</h5>
                                </div>
                                <h6 className='mb-1 text-secondary'>3 days ago</h6>

                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1 text-dark fw-bold" style={{ letterSpacing: "1px" }}>Admin Contact </h6>
                                    <h5 style={{ borderRadius: "200%" }} className='text-dark'>0</h5>
                                </div>

                                <h6 className='mb-1 text-secondary'>5 days ago</h6>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1 fw-bold" style={{ letterSpacing: "1px" }}>Admin Mail To User</h6>
                                    <h5 style={{ borderRadius: "200%" }} className='text-dark'>0</h5>
                                </div>
                                <h6 className='mb-1 text-secondary'>8 days ago</h6>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1 fw-bold" style={{ letterSpacing: "1px" }}>Admin Reply</h6>
                                    <h5 style={{ borderRadius: "200%" }} className='text-dark'>0</h5>
                                </div>
                                <h6 className='mb-1 text-secondary'>3 days ago</h6>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-8 mt-5">
                        <table className='table table-bordered'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Reply</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contact.map((info, index) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    <td>{index}</td>
                                                    <td>{info.name}</td>
                                                    <td>{info.email}</td>
                                                    <td>{info.number}</td>
                                                    <td>{info.subject}</td>
                                                    <td>{info.message}</td>
                                                    <td>
                                                        <a href="mailto:admin@gmail.com" style={{ cursor: 'pointer' }} ><i class="fa-solid fa-reply"></i></a>
                                                    </td>
                                                    <td>
                                                        <h5 style={{ cursor: "pointer" }} className='text-danger'
                                                        onClick={()=>Delete(info.id)}><i class="fa-solid fa-x"></i></h5>
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

export default Contactlist

const logout = () => {
    localStorage.clear()
    window.location.href = "http://localhost:3000/#"
    window.location.reload()
}
