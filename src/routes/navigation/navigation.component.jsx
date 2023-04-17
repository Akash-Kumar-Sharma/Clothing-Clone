// import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.css';


const Navigation = () => {

    return(
       <>
            <div className="navigation">
            <Link className='log-container' to='/'>
                <CrwnLogo className='logo'/>
            </Link>
                <div className='links-container'>
                 <Link className="nav-link" to='/shop'>
                   SHOP
                 </Link>

                 <Link className="nav-link" to='/sign-in'>
                 SIGN IN
               </Link>
             
                </div>
             </div>
           <Outlet/>
        </>
    );
  }

export default Navigation;