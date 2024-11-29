import React from 'react'
import { Link } from 'react-router-dom'
import Image2 from '../3. News/img/pexels-pixabay-60021.jpg'
import Image5 from '../3. News/img/6.PNG'
import Image4 from '../3. News/img/7.PNG'
import Image3 from '../3. News/img/8.PNG'

const Singlenews = () => {
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
                                <Link to = "/"><a href="#"><b><i>Home</i></b></a></Link>
                            </li>
                            <li>
                            <Link to = "/about"><a href="#"><b><i>About</i></b></a></Link>
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
                                    <Link to = "/about"><a href="#"><b><i>About</i></b></a></Link>
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
                                        <Link to = "/singlenews"><a href="#"><b><i>Single News</i></b></a></Link>
                                    </li>
                                </div>
                            </div>
                            <li>
                                <Link to = "/contact"><a href="#"><b><i>Contact</i></b></a></Link>
                            </li>
                            <li>
                                <Link to = "/shop"><a href="#"><b><i>Shop</i></b></a></Link>
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
                        <h5 className='mt-5 text-center'>Organic Information</h5>
                        <h2><i>Single News Articles</i></h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "200px" }}>
                    <div className="col-lg-8">
                        <img src={Image2} class="card-img-top" alt="..." style={{ width: "50rem" }} />
                        <p class="card-text mt-3"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                            <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                        </p>
                        <br />
                        <h3>Pomegranate can prevent heart disease</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, praesentium, dicta. Dolorum inventore molestias velit possimus, dolore labore aliquam aperiam architecto quo reprehenderit excepturi ipsum ipsam accusantium nobis ducimus laudantium.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est aperiam voluptatum id cupiditate quae corporis ex. Molestias modi mollitia neque magni voluptatum, omnis repudiandae aliquam quae veniam error! Eligendi distinctio, ab eius iure atque ducimus id deleniti, vel alias sint similique perspiciatis saepe necessitatibus non eveniet, quo nisi soluta.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae nemo quaerat, doloribus obcaecati odio!
                        </p>
                        <br />
                        <br />
                        <h3>3 Comments</h3>
                    </div>
                    <div className="col-lg-4">
                        <h4>Recent Posts</h4>
                        <p className='mt-3' style={{ fontSize: "17px" }}>
                            <b style={{ fontWeight: "bolder" }}> > </b> You will vainly look for fruit on it in autumn.<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b>  A man's worth has its season, like tomato.<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b>  Good thoughts bear good fresh juicy fruit.<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> Fall in love with the fresh orange<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> Why the berries always look delecious<br />
                        </p>
                        <br />
                        <br />
                        <br />
                        <h4>Archive Posts</h4>
                        <p style={{ fontSize: "17px" }} className='mt-3'>
                            <b style={{ fontWeight: "bolder" }}> > </b> JAN 2019 (5)<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> FEB 2019 (3)<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> MAY 2019 (4)<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> SEP 2019 (4)<br /><br />
                            <b style={{ fontWeight: "bolder" }}> > </b> DEC 2019 (3)<br /><br />
                        </p>

                        <h4>Tags</h4>
                        <button className='btn btn-secondary mt-3'>Apple</button>
                        <button className='btn btn-secondary mx-2 mt-3'>Banana</button>
                        <button className='btn btn-secondary mx-2 mt-3'>Grapes</button><br />
                        <button className='btn btn-secondary mt-3'>Mango</button>
                        <button className='btn btn-secondary mx-2 mt-3'>Stawberry</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-lg-12">
                        <h5><img src={Image5} alt="" className='img-fluid' style={{ width: "4rem" }} /> Jenny Joe
                            <span className='text-secondary'> Oct 26, 2024</span> <a href="#">reply</a></h5>
                        <p style={{ marginLeft: "70px" }}>
                            Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,<br /> maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus<br /> Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <h5><img src={Image4} alt="" className='img-fluid' style={{ width: "4rem" }} /> Simon Soe
                            <span className='text-secondary'> Oct 26, 2024</span> <a href="#">reply</a></h5>
                        <p style={{ marginLeft: "70px" }}>
                            Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,<br /> maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus<br /> Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <h5><img src={Image3} alt="" className='img-fluid' style={{ width: "4rem" }} /> Addy Aoe
                            <span className='text-secondary'> Oct 26, 2024</span> <a href="#">reply</a></h5>
                        <p style={{ marginLeft: "70px" }}>
                            Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,<br /> maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus<br /> Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-lg-12">
                        <h3>Leave a comment</h3>
                        <p className='text-secondary'>If you have a comment dont feel hesitate to send us your opinion.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <input type="text" name="name" id="" placeholder='Name......' className='form-control' />
                    </div>
                    <div className="col-lg-3">
                        <input type="email" name="email" id="" placeholder='Email......' className='form-control' />
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <textarea name="message" id="" placeholder='Message......' className='form-control mt-3' rows={7} cols={5}></textarea>
                    </div>
                </div>
                <button className='btn btn-outline-success mt-4' style={{ fontSize: "18px", width: "150px" }}>Submit</button>
            </div>
        </>
    )
}

export default Singlenews
