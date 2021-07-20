import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {logIn} from "../../Redux/Auth_reducer";


class LoginContainer extends React.Component{

    render() {
        return <Login {...this.props}/>
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logIn})(LoginContainer);