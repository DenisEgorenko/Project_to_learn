import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus, uploadPhoto} from "../../Redux/Profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let user_Id = this.props.match.params.userId;

        if (!user_Id) {
            user_Id = 18145;
        }
        this.props.getProfile(user_Id)
        this.props.getStatus(user_Id)
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.uploadPhoto}
        />
    }
}


function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, uploadPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)