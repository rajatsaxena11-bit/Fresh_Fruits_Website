import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const [Fruit, SetFruits] = useState([])
    const [FruitsCart, UpdateFruits] = useState([])
    const [order, setorder] = useState([])

    const OneFruit = () => {
        fetch("http://localhost:4567/FruitsData")
            .then(Response => Response.json())
            .then(Array => {
                SetFruits(Array)
            })
    }
    const Twofruits = () =>{
        fetch("http://localhost:4567/contact")
        .then(Response=>Response.json())
        .then(AllProduct=>{
            UpdateFruits(AllProduct)
        })
    }
   

    const Porder = () =>{
        fetch("http://localhost:4567/orderlist")
        .then(Response => Response.json())
        .then(Productorder => {
            setorder(Productorder)
        })
    }
   

    useEffect(() => {
        OneFruit()
        Twofruits()
        Porder()
        
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
                                <Link to="/"><a href="#" onClick={logout}><b><i>Logout <i className='fa fa-power-off text-danger'></i></i></b></a></Link>
                            </li>
                        </div>
                        <h5 className='mt-5 text-center' style={{ cursor: 'pointer' }}>We sale fresh fruits</h5>
                        <h2><i>Dashboard</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4" style={{ marginTop: "100px" }}>
                        <i className="fa fa-suitcase fa-3x text-info fs-2"></i>
                        <h4 className='mt-2'>Available Product</h4>
                        <h4>{Fruit.length}</h4>
                    </div>
                    <div className="col-lg-4" style={{ marginTop: "100px" }}>
                        <i className="fa fa-suitcase fa-3x text-info fs-2"></i>
                        <h4 className='mt-2'>Total Orders</h4>
                        <h4>{order.length}</h4>
                       
                    </div>
                    <div className="col-lg-4" style={{ marginTop: "100px" }}>
                        <i className="fa fa-suitcase fa-3x text-info fs-2"></i>
                        <h4 className='mt-2 text-dark' style={{cursor:"pointer", listStyle:"none", textDecoration:"none"}}>User Contact</h4>
                        <h4>{FruitsCart.length}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

const logout = () => {
    localStorage.clear()
    window.location.href = "http://localhost:3000/#"
    window.location.reload()
}
