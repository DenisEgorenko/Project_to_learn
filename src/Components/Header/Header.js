import React from 'react';
import styles from './Header.module.css'



function Header() {
    return(
        <header className = {styles.header}>
            <img src={'https://cdn.worldvectorlogo.com/logos/vk-1.svg'}/>
        </header>
    )
}

export default Header;