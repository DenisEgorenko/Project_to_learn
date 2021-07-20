import React from 'react';
import styles from "./App.module.css";
import Nav from "./Components/Nav_bar/Nav_bar";
import {BrowserRouter, Route} from "react-router-dom"
// import MessengerContainer from "./Components/Messenger/MessengerContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/App_reducer";
import Preloader from "./Components/Common/Preloader";
import {Redirect} from "react-router";

const MessengerContainer = React.lazy(() => import ('../src/Components/Messenger/MessengerContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        } else {

            return (

                <BrowserRouter>
                    <div className={styles.app_wrapper}>

                        <HeaderContainer/>
                        <Nav/>

                        <div className={styles.app_wrapper_content}>

                            <Route exact path='/'><Redirect to='/Profile'/></Route>
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/Messenger' render={() => {
                                return <React.Suspense fallback={<div><Preloader/></div>}>
                                    <MessengerContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path='/Users' render={() => <UsersContainer/>}/>
                            <Route path='/Login' render={() => <LoginContainer/>}/>

                        </div>

                    </div>
                </BrowserRouter>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)

