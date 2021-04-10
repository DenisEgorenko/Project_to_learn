import React from 'react';
import styles from './Nav_bar.module.css'

function Nav() {
    return(
        <nav className = {styles.nav}>
            <div className = {styles.item}>
                <a>Моя Страница</a>
            </div>

            <div className = {styles.item}>
                <a>Новости</a>
            </div>

            <div className = {styles.item}>
                <a>Мессенджер</a>
            </div>

            <div className = {styles.item}>
                <a>Друзья</a>
            </div>

            <div className = {styles.item}>
                <a>Музыка</a>
            </div>

            <div className = {styles.item}>
                <a>Настройки</a>
            </div>

        </nav>
    )
}

export default Nav;