


// import React, { useEffect, useState } from 'react'
// import Image from '../1. Home/img1/3.jpg'
// import Image1 from '../1. Home/img1/card.png'
// import Image2 from '../1. Home/img1/ab.png'
// import Image3 from '../1. Home/img1/vc.png'
// import Image4 from '../1. Home/img1/bank.png'
// import Image5 from '../1. Home/img1/gift-card.png'
// import Image6 from '../1. Home/img1/transaction.png'
// import Image7 from '../1. Home/img1/Capture.PNG'
// import Image8 from '../1. Home/img1/google pay.png'
// import Image9 from '../1. Home/img1/p.png'
// import Image10 from '../1. Home/img1/ptm.png'
// import Image11 from '../1. Home/img1/ghj.jpg'
// import { Link } from 'react-router-dom'

// const Checkout = () => {
//     const [Fruits, setFruits] = useState([])
//     const [shipping, updateshipping] = useState([])
//     const [form, updateform] = useState({
//         name: ' ',
//         email: ' ',
//         number: ' ',
//         pin: ' ',
//         address: ' '
//     })

//     const SaveShipping = () => {
//         const postData = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form)
//         };
//         var url = "http://localhost:4567/Shipping"
//         fetch(url, postData)
//             .then(Response => Response.json())
//             .then(shipping => {
//                 alert("Submitted SuccessFully")
//             })
//     }
//     const Handlechange = (e) => {
//         const { name, value } = e.target;
//         updateform({
//             ...form,
//             [name]: value
//         })
//     }
//     const Handlesubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Submitted", form)
//         updateform({
//             name: '',
//             email: '',
//             number: '',
//             pin: '',
//             address: ''
//         })
//     }

//     const FruitsCarts = () => {
//         fetch('http://localhost:4567/cart')
//             .then(Response => Response.json())
//             .then(ProductCart => {
//                 setFruits(ProductCart)
//             })
//     }

//     const Shippingfetch = () => {
//         fetch('http://localhost:4567/Shipping')
//             .then(Response => Response.json())
//             .then(shippingcart => {
//                 updateshipping(shippingcart)
//             })
//     }

//     useEffect(() => {
//         FruitsCarts()
//         Shippingfetch()
//     })

//     return (
//         <>
//             <div className="container">
//                 <div className="card">
//                     <div className="card-body">
//                         {
//                             Fruits.map((info, index) => {
//                                 return (
//                                     <>
//                                         <section style={{ display: "flex", justifyContent: "space-between" }}>
//                                             <div>
//                                                 <img src={Image} alt="" style={{ width: "10%", opacity: "0.5", cursor: "pointer" }} />
//                                                 <h3 class="card-title"> Fresh_Fruits_Payment || <span style={{ fontSize: "19px" }}> Secure Checkout <i class="fa-solid fa-lock"></i></span></h3>
//                                             </div>
//                                             <img src={Image7} alt="" style={{ cursor: "pointer", height: "50px" }} className='img-fluid mt-4' />
//                                         </section>
//                                         <label style={{ marginLeft: "55rem" }} className='text-secondary'>Question ? 1800-1050-6565 <span>ref #12304568877</span></label>
//                                         <br />
//                                         <br />
//                                         <table className='table table-bordered'>
//                                             <thead>
//                                                 <tr className='text-center' style={{ letterSpacing: "1px" }}>
//                                                     <th><a href="#" style={{ textDecoration: "none" }}>1. Login</a></th>
//                                                     <th><a href="#" style={{ textDecoration: "none" }}>2. Shipping</a></th>
//                                                     <th><a href="#" style={{ textDecoration: "none" }}>3. Payment</a></th>
//                                                     <th><a href="#" style={{ textDecoration: "none" }}>4. Reviews</a></th>
//                                                 </tr>
//                                             </thead>
//                                         </table>
//                                         <form onSubmit={Handlesubmit}>
//                                             <div className="row" style={{ marginTop: "50px" }}>
//                                                 <div className="col-lg-6">
//                                                     <div className="card border-none ">
//                                                         <div className="card-header bg-primary text-white">
//                                                             Customer Details
//                                                         </div>
//                                                         <div className="card-body">
//                                                             <div className="mb-3">
//                                                                 <label> Customer Name </label>
//                                                                 <input type="text"
//                                                                     className="form-control"
//                                                                     name='name'
//                                                                     value={form.name}
//                                                                     onChange={Handlechange}
//                                                                 />
//                                                             </div>
//                                                             <div className="mb-3">
//                                                                 <label> Mobile No </label>
//                                                                 <input type="number"
//                                                                     className="form-control"
//                                                                     name='number'
//                                                                     value={form.number}
//                                                                     onChange={Handlechange}
//                                                                 />
//                                                             </div>
//                                                             <div className="mb-3">
//                                                                 <label> e-Mail Id </label>
//                                                                 <input type="email"
//                                                                     className="form-control"
//                                                                     name='email'
//                                                                     value={form.email}
//                                                                     onChange={Handlechange}
//                                                                 />
//                                                             </div>
//                                                             <div className="mb-3">
//                                                                 <label> Delivery Address </label>
//                                                                 <textarea
//                                                                     className="form-control"
//                                                                     name='address'
//                                                                     value={form.address}
//                                                                     onChange={Handlechange}
//                                                                 ></textarea>
//                                                             </div>
//                                                         </div>
//                                                         <div className="card-footer text-center">
//                                                             <button className="btn btn-danger" onClick={SaveShipping} style={{width:"100px", letterSpacing:"1px", fontWeight:"bold"}}> Save </button>
//                                                         </div>
//                                                     </div>
//                                                     {/* <form onSubmit={Handlesubmit}>
//                                                     <div className="row">

//                                                         <div className="col-lg-6">

//                                                             <input type="text" class="form-control" id="floatingInput" placeholder='Name'
//                                                                 name='name' value={form.name} onChange={Handlechange} />
//                                                             <br />
//                                                             <input type="number" class="form-control" id="floatingInput" placeholder="Number"
//                                                                 name='number' value={form.number} onChange={Handlechange} />

//                                                         </div>
//                                                         <div className="col-lg-6">

//                                                             <input type="email" class="form-control" id="floatingInput" placeholder="Email"
//                                                                 name='email' value={form.email} onChange={Handlechange} />
//                                                             <br />
//                                                             <input type="number" class="form-control" id="floatingInput" placeholder="PIN"
//                                                                 name='text' value={form.number} onChange={Handlechange} />
//                                                         </div>
//                                                     </div>
//                                                     <br />
//                                                     <textarea type="text" id="floatingInput" placeholder='Address' className='form-control' rows={7}
//                                                         name='address' value={form.address} onChange={Handlechange} ></textarea>

//                                                     <button className='btn btn-primary mt-2' style={{ width: "120px", letterSpacing: "1px" }}
//                                                         onClick={SaveShipping}>Save</button>
//                                                 </form> */}



//                                                     {/* <div class="form-floating">
//                                                     <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
//                                                     <label for="floatingPassword">Password</label>
//                                                 </div> */}
//                                                 </div>
//                                                 <div className="col-lg-2"></div>
//                                                 <div className="col-lg-4" >
//                                                 <h6 style={{ textDecoration: "underline", letterSpacing: "1px" }} className='mt-1'><i class="fa-solid fa-arrow-right"></i> Shipping Address <a href="#" className='mx-2'> <i class="fa-solid fa-pen-to-square"></i> Edit</a></h6>
//                                                     {
//                                                         shipping.map((info, index) => {
//                                                             return (
//                                                                 <>
//                                                                     <div className="card border-none shadow">
                                                                      
//                                                                         <div className="card-body">
//                                                                             <div className="mb-3">
//                                                                                 <label className='fw-bold'> Customer Name : <span className='text-secondary'>{info.name}</span></label>
//                                                                             </div>
//                                                                             <div className="mb-3">
//                                                                                 <label className='fw-bold'> Mobile No : <span className='text-secondary'>{info.number}</span></label>
//                                                                             </div>
//                                                                             <div className="mb-3">
//                                                                                 <label className='fw-bold'> e-Mail Id : <span className='text-secondary'>{info.email}</span></label>
//                                                                             </div>
//                                                                             <div className="mb-3">
//                                                                                 <label className='fw-bold'> Delivery Address : <span className='text-secondary'>{info.address}</span></label>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>
//                                         </form>


//                                         <div className="row">
//                                             <h5 className='text-dark  mt-5'><i class="fa-solid fa-arrow-right"></i> Payment Option Card</h5>
//                                             <div className="col-lg-6">
//                                                 <img src={Image1} alt="" className='img-fluid' style={{ width: "40px" }} />
//                                                 <img src={Image2} alt="" className='img-fluid mx-3' style={{ width: "40px" }} />
//                                                 <img src={Image3} alt="" className='img-fluid' style={{ width: "40px" }} />
//                                                 <img src={Image5} alt="" className='img-fluid mx-3' style={{ width: "38px", marginTop: "-10px" }} />
//                                                 <img src={Image6} alt="" className='img-fluid' style={{ width: "40px" }} />
//                                                 <br />
//                                                 <br />
//                                                 <br />
//                                                 <br />
//                                                 <h5 className='text-dark'><i class="fa-solid fa-arrow-right"></i> Choose Your Card</h5>
//                                                 <div className="div mt-3">
//                                                     <div class="form-check">
//                                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked style={{ cursor: "pointer" }} />
//                                                         <label class="form-check-label" for="flexRadioDefault1">
//                                                             <Link to="/creditcard"><h6 style={{ cursor: "pointer", textDecoration: "none", listStyle: "none" }}> Credit Card</h6></Link>
//                                                         </label>
//                                                     </div>
//                                                     <div class="form-check">
//                                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ cursor: "pointer" }} />
//                                                         <label class="form-check-label" for="flexRadioDefault2">
//                                                             <h6 style={{ cursor: "pointer" }}>Debit Card</h6>
//                                                         </label>
//                                                     </div>
//                                                     <div class="form-check">
//                                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" style={{ cursor: "pointer" }} />
//                                                         <label class="form-check-label" for="flexRadioDefault3">
//                                                             <h6 style={{ cursor: "pointer" }}>Master Card</h6>
//                                                         </label>
//                                                     </div>
//                                                     <div class="form-check">
//                                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" style={{ cursor: "pointer" }} />
//                                                         <label class="form-check-label" for="flexRadioDefault4">
//                                                             <Link to="/netbanking"><h6 style={{ cursor: "pointer", textDecoration: "none", listStyle: "none" }}>NetBanking</h6></Link>
//                                                         </label>
//                                                     </div>
//                                                     <h5 className='mt-3 text-dark' style={{ letterSpacing: "1px" }}><i class="fa-solid fa-arrow-right"></i> Most Commonstly used modes of payment</h5>
//                                                     <input type="radio" name="" id="" style={{ cursor: "pointer" }} />
//                                                     <Link to="/googlepay"><img src={Image8} alt="" width={50} style={{ borderRadius: "50%", cursor: "pointer" }} /></Link>

//                                                     <input type="radio" name="" id="" style={{ marginLeft: "20px", cursor: "pointer" }} />
//                                                     <img src={Image9} alt="" width={90} style={{ borderRadius: "50%", cursor: "pointer" }} />
//                                                     <input type="radio" name="" id="" style={{ marginLeft: "20px", cursor: "pointer" }} />
//                                                     <img src={Image10} alt="" width={70} style={{ borderRadius: "50%", cursor: "pointer" }} />
//                                                     <br />
//                                                     <br />
//                                                     <h5 className='text-dark'>Total Pay Ammount : <span>₹ {info.price + 50} Rs.</span></h5>
//                                                     <Link to="/placeorder"><button className='btn btn-primary mt-3' style={{ width: "150px" }}>Place Order</button></Link>
//                                                 </div>


//                                             </div>
//                                             <div className="col-lg-2"></div>

//                                             <div className="col-lg-4" style={{ marginTop: "-280px" }}>
//                                                 <div className="card">
//                                                     <div className="card-body">
//                                                         <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                                             <h5 class="card-title"><span style={{ fontSize: "18px" }}><i class="fa-solid fa-arrow-right"></i> My Order </span><Link to="/edit"><a href="#" style={{ fontSize: "15px", letterSpacing: "1px" }} className='text-warning'>
//                                                                 <i class="fa-solid fa-pen-to-square text-warning"></i>Edit</a></Link></h5>
//                                                             <button className='btn btn-primary' style={{ letterSpacing: "2px" }}>Continue <i class="fa-solid fa-arrow-right"></i></button>
//                                                         </section>
//                                                         <hr />
//                                                         <table className='table table-bordered'>
//                                                             <tbody>
//                                                                 <tr className='text-center'>
//                                                                     <td><h6>Number of items</h6></td>
//                                                                     <td><h6>{Fruits.length}</h6></td>
//                                                                 </tr>
//                                                                 <tr className='text-center'>
//                                                                     <td><h6>Product Cost</h6></td>
//                                                                     <td><h6>₹ {info.price} Rs.</h6></td>
//                                                                 </tr>
//                                                                 <tr className='text-center'>
//                                                                     <td><h6>Delivery</h6></td>
//                                                                     <td><h6>₹ 50 Rs.</h6></td>
//                                                                 </tr>
//                                                             </tbody>
//                                                         </table>
//                                                         <hr />
//                                                         <table className='table table-bordered'>
//                                                             <tbody>
//                                                                 <tr className='text-center'>
//                                                                     <td><h6>Total</h6></td>
//                                                                     <td><h6 className='text-dark'>₹ {info.price + 50} Rs.</h6></td>
//                                                                 </tr>
//                                                             </tbody>
//                                                         </table>

//                                                     </div>

//                                                 </div>
//                                                 {/* <img src={Image11} alt="" style={{width:"400px"}}/> */}
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Checkout
