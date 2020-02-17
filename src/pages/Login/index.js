import React, { Component } from 'react'
import { connect } from "react-redux";
import { PROFILE_LOAD } from '../../store/reducer/Profile/type';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

import SignUp from '../../component/SIgnUp';
import SignIn from '../../component/SignIn';
class Login extends Component {
    constructor(props){
        super(props);
        Cookies.get('accessToken')==null ? this.props.history.push('/') : this.props.history.push('/home');
    }
    state = {
        'redirect': true,
        'ShowloginForm': false,
    }
    handleClick = () => {
        this.setState({
            ShowloginForm: true
        })
    }


   
    componentDidMount() {
        this.props.action('none');
    }
    render() {
        return (
            <section className="signup">
                <div className="container">
                    <div className="row signup-top">
                        <div className="col-md-12">
                            <Link to ='/'><img src="assets/images/signup-logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row signup-middle">
                        <div className="col-lg-6 col-md-12 signup-middle-left">
                            <div className={(this.state.ShowloginForm) ? "d-none detail-box" : "detail-box"}>
                                <h6>Join us today</h6>
                                <h1>Veen Away!</h1>
                                <p>Sign up now and be a part of the World’s <br /> fastest growing online community.</p>
                                <div className="social-button-container">
                                    <Link to="/" className="btn social-btn google-btn">
                                        <div className="icon">
                                            <i className="fab fa-google fa-2x"></i>
                                            <i className="fab fa-google fa-2x"></i>
                                        </div>
                                        <span>Sign in with Google</span>
                                    </Link>
                                    <Link to='/' className="btn social-btn facebook-btn">
                                        <div className="icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </div>
                                        <span>Sign in with Facebook</span>
                                    </Link>
                                    <Link to="/" onClick={this.handleClick} className="btn social-btn facebook-btn email-btn">
                                        <div className="icon">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </div>
                                        <span>Sign in with Email</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={(this.state.ShowloginForm) ? "d-block signin-box" : "d-none"}>
                                <SignIn/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 signup-middle-right">
                            <SignUp/>
                        </div>
                    </div>
                    <div className="row signup-bottom">
                        <div className="col-12">
                            <p>Copyright © 2020. VeenMe. All Right Reserved</p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action: (display) => dispatch({
            type: PROFILE_LOAD,
            display: display
        })
    }
};

export default connect(null, mapDispatchToProps)(Login)