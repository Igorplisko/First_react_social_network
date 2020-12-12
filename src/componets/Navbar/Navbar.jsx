import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom"
const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.items}>
            <div >
               <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
               <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div>
               <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div>
               <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div>
               <NavLink to='/game' activeClassName={s.activeLink}>Game</NavLink>
            </div>
            <div>
               <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
         </div>
      </nav>)
}




export default Navbar

// ?check and change  this code