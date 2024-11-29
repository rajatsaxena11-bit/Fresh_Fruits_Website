import React, { useEffect, useState } from 'react'
import '../1. Home/style.css'
import Image from '../1. Home/img/1.webp'
import Image1 from '../1. Home/img/pexels-janetrangdoan-2027696.jpg'
import Image2 from '../1. Home/img/pexels-pixabay-89778.jpg'
import Image3 from '../1. Home/img/pexels-luiz-m-santos-250917-760281.jpg'
import Video from '../1. Home/img/video.mp4'
import Image4 from '../1. Home/img/pexels-dntphoto-975231 (1).jpg'
import Image5 from '../1. Home/img/pexels-mike-468229-1192034.jpg'
import Image6 from '../1. Home/img/pexels-suzyhazelwood-1120575.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  const [Fruit, SetFruits] = useState([])

  const OneFruit = () => {
    fetch("http://localhost:4567/FruitsData")
      .then(Response => Response.json())
      .then(Array => {
        SetFruits(Array)
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
            <h2><i>Home</i></h2>
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="section" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 text-center">
              <img src={Image} alt="" className='img-fluid' style={{ width: "90%", cursor: "pointer" }} />
            </div>
            <div className="col-lg-5 text-center" style={{ marginTop: "130px" }}>
              <h4 style={{ letterSpacing: "2px", fontFamily: "initial" }}>Fresh & Organic</h4>
              <h2 className='text-dark'>Delicious Seasonal Fruits</h2>
              <button className='btn btn-outline-success  mt-3 buttonhover' style={{ width: "150px" }}><b>Fruits Collection</b></button>
              <button className='btn btn-secondary mx-3 mt-3 uttonhover' style={{ width: "170px" }}><b>Contact</b></button>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white" style={{ height: "120px" }}>
        <div className="row" style={{ marginTop: "200px" }}>
          <div className="col-lg-4 text-center " style={{ marginTop: "30px" }}>
            <h4 style={{ fontFamily: "initial", fontWeight: "600", letterSpacing: "2px" }}> <i class="fa-solid fa-truck"></i> Free Shipping</h4><span style={{ marginLeft: "35px" }}>When order over ₹ 75</span>
          </div>
          <div className="col-lg-4 text-center" style={{ marginTop: "30px" }}>
            <h4 style={{ fontFamily: "initial", fontWeight: "600", letterSpacing: "2px" }}> <i class="fa-solid fa-phone"></i> 24/7 Support</h4><span style={{ marginLeft: "35px" }}>Get support all day</span>
          </div>
          <div className="col-lg-4 text-center" style={{ marginTop: "30px" }}>
            <h4 style={{ fontFamily: "initial", fontWeight: "600", letterSpacing: "2px" }}> <i class="fa-solid fa-arrows-rotate"></i> Refund</h4><span style={{ marginLeft: "35px" }}>Get refund within 3 days!</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-lg-12">
            <h2 className='text-center text-dark' ><b><span style={{ color: "coral", letterSpacing: "2px" }}><span style={{ fontSize: "38px" }}>O</span>ur</span> Product</b></h2>
            <p className='text-center' style={{ textAlign: "justify", fontFamily: "initial" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas<br />
              itaque eveniet beatae optio.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            Fruit.map((info, key) => {
              return (
                <>

                  <div className="col-lg-4">
                    <div className="card mt-5 mx-5" style={{ width: "17rem" }}>
                      <img src={info.image} alt="" className='text-center mx-5' style={{ width: "60%", border: "none" }} />
                      <div className="card-body">
                        <h5 class="card-title text-center" style={{ letterSpacing: "1px" }}>{info.name}</h5>
                        <p class="card-text text-center"><b style={{ fontSize: '18px' }} className='text-danger'> Price : <s>₹ {info.price}/per/kg.</s></b></p>
                        <p class="card-text text-center"> <b style={{ fontSize: '18px' }} className='text-success'> Offer : ₹ {info.pricecut}/per-kg</b> </p>
                        <Link to="/cart">
                          <a href="#" class="btn btn-outline-primary" style={{ marginLeft: "40px", width: "150px" }}
                          onClick={()=>Send(info)}><i class="fa-solid fa-cart-shopping"></i>  Add to cart</a>
                        </Link>
                        {/* <a href='#' className='fs-4 mx-2'><i class="fa-solid fa-heart"></i></a> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, consectetur deleniti quod facilis similique dolore dolorem nemo eos. Pariatur quos rerum, a iste nesciunt nostrum at voluptatem possimus nam sequi alias ab quas consequuntur vel? Quas, consectetur quia, impedit aut optio ad quis ut error perspiciatis temporibus, dolores totam. Laboriosam, quas recusandae. Quasi minima exercitationem, dolores ipsam consequuntur corporis modi earum, soluta, hic provident voluptatibus officiis dignissimos impedit fugiat cum nihil. Minus laborum doloremque nulla veritatis et vel voluptas laudantium corporis quia consectetur ipsa necessitatibus harum iusto non, quos esse consequatur perspiciatis architecto quo, perferendis, earum dolore modi aperiam. Veniam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={Image1} alt="" className='img-fluid mt-3' style={{ width: "95%" }} />
            </div>
            <div className="col-lg-6">
              <p>
                <span style={{ fontSize: "20px", textAlign: "justify", letterSpacing: "2px", fontFamily: "initial" }}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui eum maiores non tenetur in eos, voluptatibus cumque, quo at magni? Nulla et natus distinctio, deleniti autem quis praesentium at sint! Ut eos impedit esse excepturi. Commodi hic animi possimus perferendis nesciunt fugit incidunt maxime odit! Nihil provident rem veritatis tenetur dolorem dolorum, debitis veniam sit tempore corrupti alias magni vero nesciunt molestiae modi. Molestiae temporibus commodi tempora unde, magnam expedita suscipit fuga, quasi quo nisi fugit illo officia sequi voluptatum obcaecati. Maxime modi ullam, eos illo vero est amet repudiandae aliquam, ut eligendi libero magnam iusto ea molestias non saepe facilis quaerat placeat corporis fuga laudantium sit ipsam. Ex, perspiciatis corrupti accusamus necessitatibus excepturi sunt libero architecto itaque temporibus distinctio quasi nam nostrum tenetur ipsa ut! Culpa impedit commodi explicabo quasi ad repellat quo nobis sint adipisci officiis facere cupiditate earum maiores, quam minima cum exercitationem, enim tenetur debitis magnam fuga labore vitae atque. Dolore doloremque tempore dicta veniam perspiciatis excepturi voluptatem non eos dignissimos, iste ea voluptates, corporis id ipsam fugit, dolorem facilis aut. Eligendi qui reprehenderit cupiditate facere unde quibusdam ab rerum, earum saepe necessitatibus tempora nemo placeat ipsum facilis sapiente magnam minus eius veniam. Harum, ipsa!
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                <span style={{ fontSize: "20px", textAlign: "justify", letterSpacing: "2px", fontFamily: "initial" }}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis nostrum voluptate unde! Repudiandae magni cupiditate animi excepturi modi a dolorum ullam cumque impedit aperiam nihil vero ab, adipisci perspiciatis in temporibus quas ipsam praesentium. Reiciendis nesciunt sapiente voluptatem voluptate recusandae nisi aliquid natus ratione quaerat facere nobis velit assumenda, blanditiis eveniet accusantium, neque reprehenderit et vitae iure dolorum voluptas culpa delectus! Minus molestias doloribus in quidem consectetur accusamus velit excepturi dicta eveniet ducimus laborum, temporibus sint quaerat voluptates labore, dolore adipisci amet officiis libero corrupti? Impedit, tempore id sunt voluptatibus dicta facilis saepe, expedita fugiat eveniet culpa minus dolorem!
              </p>
              <img src={Image2} alt="" width={300} className='img-fluid' />
              <img src={Image3} alt="" width={300} className='img-fluid mx-3' />
              <p className='mt-3'>
                <span style={{ fontSize: "20px", textAlign: "justify", letterSpacing: "2px", fontFamily: "initial" }} >L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae blanditiis doloribus cumque quos, soluta dolor veniam, veritatis aliquid libero, ab itaque. Architecto sequi hic iure quisquam atque quas maiores voluptate expedita eaque. Sequi, asperiores nisi, ab tenetur, animi dignissimos impedit maxime eveniet perferendis ea ipsa earum. Neque voluptatum quaerat ratione in itaque. Fuga repellendus error cupiditate doloribus aut, recusandae numquam consequuntur soluta dolorem facere rerum provident odit enim quo dolor nobis libero possimus, ea eaque, fugit magni? Rerum placeat ex accusamus voluptate doloremque, asperiores quis corrupti! Quisquam doloribus beatae quidem illum, ea exercitationem quia odit aspernatur dolore inventore porro, blanditiis quaerat ratione laborum eligendi laudantium ipsam quis, assumenda excepturi? Perspiciatis, blanditiis quas sint fugiat excepturi in ex rerum dolorem eligendi doloribus temporibus nulla rem! Asperiores blanditiis, et recusandae itaque voluptatum aperiam error magnam modi, voluptatibus esse assumenda culpa unde voluptates sunt. Consequuntur culpa nesciunt officiis corporis, neque sed dolores! Sapiente.
              </p>
            </div>
            <div className="col-lg-6">
              <video width={600} controls autoplay loop>
                <source src={Video} />
              </video>
              <p>
                <span style={{ fontSize: "20px", textAlign: "justify", letterSpacing: "2px", fontFamily: "initial" }} >L</span>orem ipsum, dolor sit amet consectetur adipisicing elit. Totam mollitia facilis magni tempore adipisci, quo odio neque at! Cumque ullam iusto consectetur ipsam deserunt harum blanditiis, optio vero voluptate enim, vel dolorum assumenda aut pariatur! Nobis obcaecati excepturi minus amet blanditiis expedita error aut rem molestiae alias, hic nisi officia voluptas optio? Temporibus aliquid iure alias quidem deleniti. Debitis perspiciatis dolores laudantium deserunt velit placeat harum aliquid blanditiis eveniet accusantium. Blanditiis ex expedita laboriosam, facilis accusamus libero magnam? Architecto assumenda a atque pariatur aliquid alias nisi! Veritatis aliquid accusantium officia non mollitia, quis possimus nulla molestiae voluptatem facere corporis qui sapiente dolorem deserunt quibusdam, dolores perspiciatis fugit eligendi expedita? Nam praesentium expedita doloribus, distinctio ipsum ipsam amet necessitatibus nihil! Maiores iste aspernatur, quis fugiat ut modi et ipsum nobis atque enim quia maxime provident! Necessitatibus laudantium reprehenderit, officiis minima dolor fugiat molestiae facilis fugit dolores numquam ratione deleniti a obcaecati quod soluta dolore ipsam incidunt mollitia. Officiis ex quam reprehenderit commodi sequi quibusdam odio porro incidunt error architecto animi molestias itaque suscipit, fuga esse facere voluptas accusamus? Ut corporis aperiam amet eius, enim tempora dolore fugit similique itaque id assumenda hic eaque inventore ipsam dicta perferendis obcaecati laboriosam? Harum soluta, sapiente dolor et, recusandae neque debitis reiciendis facere rem quasi distinctio vel nulla illo libero molestiae dicta sequi laudantium dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "150px" }}>
            <div className="col-lg-12">
              <h2 className='text-center text-dark' ><b><span style={{ color: "coral", letterSpacing: "2px" }}><span style={{ fontSize: "38px" }}>O</span>ur</span> News</b></h2>
              <p className='text-center' style={{ textAlign: "justify", fontFamily: "initial" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas<br />
                itaque eveniet beatae optio.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-lg-4">
              <div class="card" style={{ width: "22rem" }}>
                <img src={Image4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">You will vainly look for fruit on it in autumn.</h5>
                  <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                  </p>
                  <p>
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                  </p>
                  <a href="#" style={{ fontSize: "17px" }}><b>Read more..></b> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card" style={{ width: "20rem" }}>
                <img src={Image5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">A man's worth has its season, like tomato.</h5>
                  <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                  </p>
                  <p>
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                  </p>
                  <a href="#" style={{ fontSize: "17px" }}><b>Read more..></b> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card" style={{ width: "22rem" }}>
                <img src={Image6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Good thoughts bear good fresh juicy fruit.</h5>
                  <p class="card-text"><i class="fa-solid fa-user mx-1"></i> <span>Admin</span>
                    <span className='mx-3'><i class="fa-solid fa-calendar-days"></i></span><span>27, Calender 2024</span>
                  </p>
                  <p>
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                  </p>
                  <a href="#" style={{ fontSize: "17px" }}><b>Read more..></b> </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-lg-12 text-center">
              <button className='btn btn-warning' style={{ width: "150px" }}>More News</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home