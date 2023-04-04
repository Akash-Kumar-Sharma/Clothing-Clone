// import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';


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
             
                </div>
             </div>
           <Outlet/>
        </>
    );
  }

export default Navigation;