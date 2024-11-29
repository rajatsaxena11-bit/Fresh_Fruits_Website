import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './2. Admin Page/a. Home/home';
import Manageproduct from './2. Admin Page/a. Home/manageproduct';
import Manageorder from './2. Admin Page/a. Home/manageorder';
import Contactlist from './1. Public Page/contactlist';

function Adminapp() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/manageproduct" element={<Manageproduct />} />
                    <Route exact path="/manageorder" element={<Manageorder />} />
                    <Route exact path="/contactlist" element={<Contactlist />} />
                    

                </Routes>
            </HashRouter>
        </>
    );
}

export default Adminapp;
