import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './1. Public Page/1. Home/home';
import About from './1. Public Page/2.About/about.js';
import News from './1. Public Page/3. News/news.js';
import Singlenews from './1. Public Page/3. News/singlenews.js';
import Contact from './1. Public Page/4. Contact/contact.js';
import Shop from './1. Public Page/5. Shop/shop.js';
import Login from './1. Public Page/6. Login/login.js';
import Signup from './1. Public Page/7. SignUp/signup.js';
import Cart from './1. Public Page/1. Home/cart.js';
import Checkout from './1. Public Page/1. Home/checkout.js';
import Creditcard from './1. Public Page/1. Home/creditcard.js';
import NetBanking from './1. Public Page/1. Home/netbanking.js';
// import Shipping from './1. Public Page/1. Home/shipping.js';
import Edit from './1. Public Page/1. Home/edit.js';
import Modify from './1. Public Page/1. Home/modify.js';
import Googlepay from './1. Public Page/1. Home/googlepay.js';
import Placeorder from './1. Public Page/1. Home/placeorder.js';
import Checkout1 from './1. Public Page/1. Home/checkout1.jsx';



function PublicApp() {
  return (
   <>
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/news" element={<News/>}/>
        <Route exact path="/singlenews" element={<Singlenews/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/creditcard" element={<Creditcard/>}/>
        <Route exact path="/netbanking" element={<NetBanking/>}/>
        {/* <Route exact path="/shipping" element={<Shipping/>}/> */}
        <Route exact path="/edit" element={<Edit/>}/>
        <Route exact path="/modify" element={<Modify/>}/>
        <Route exact path="/googlepay" element={<Googlepay/>}/>
        <Route exact path="/placeorder" element={<Placeorder/>}/>
        <Route exact path="/checkout1" element={<Checkout1/>}/>
        
      </Routes>
     </HashRouter>
   </>
  );
}

export default PublicApp;
