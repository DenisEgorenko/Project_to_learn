import React from 'react';
import styles from './Nav_bar.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <nav className = {styles.nav}>
            <div className = {styles.item}>
                <NavLink to ='/Profile' activeClassName = {styles.activeLink}>Моя Страница</NavLink>
            </div>

            <div className = {styles.item}>
                <NavLink to ='/News' activeClassName = {styles.activeLink}>Новости</NavLink>
            </div>

            <div className = {styles.item}>
                <NavLink to ='/Messenger' activeClassName = {styles.activeLink}>Мессенджер</NavLink>
            </div>

            <div className = {styles.item}>
                <NavLink to ='/Users' activeClassName = {styles.activeLink}>Друзья</NavLink>
            </div>

            <div className = {styles.item}>
                <NavLink to ='/Music' activeClassName = {styles.activeLink}>Музыка</NavLink>
            </div>

            <div className = {styles.item}>
                <NavLink to ='/Settings' activeClassName = {styles.activeLink}>Настройки</NavLink>
            </div>

        </nav>
    )
}

export default Nav;