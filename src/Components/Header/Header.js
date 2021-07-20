import React, {useState} from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from "react-bootstrap";



export default class Header extends React.Component {

    render() {
        return (
            <header className={styles.header}>
                <img src={'https://cdn.worldvectorlogo.com/logos/vk-1.svg'}/>

                <div className={styles.loginBlock}>
                    {
                        this.props.isAuth

                            ? <DropdownButton id="dropdown-basic-button" title={this.props.login}>
                                <Dropdown.Item onClick={this.props.logOut}>Log Out</Dropdown.Item>
                            </DropdownButton>

                            : <NavLink to={"/Login"}>Login</NavLink>
                    }

                </div>
            </header>
        )
    }

}
