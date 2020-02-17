import React, { Component } from 'react'
import Errors from '../../component/Error/index'
import Globals from '../../Global/Constant'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    state = {
        'email': '',
        'password': '',
        'redirect': true,
        'errors': [],
        'ShowloginForm': false,
        loading: false,
        uploadValue: 'Login'
    }
   
    login = async (event) => {
        event.preventDefault();
       
        if (this.state.email === '' || this.state.password === '') {
            return this.setState({ errors: ['Email and Password Both Required'] })
        }
        this.setState({ loading: true, uploadValue: 'Login Please Wait ....' })
        fetch(Globals.api + '/auth', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: 'email=' + this.state.email + '&password=' + this.state.password
        }).then(res => res.json()).then((data) => {
            if (data.data.token) {
                Cookies.set('accessToken', data.data.token)
                window.location.href = Globals.appHomePage;
            } else {
                this.setState({ loading: false, uploadValue: 'Login' })
                this.setState({ errors: [data.data.message] })
            }
        }).then(console.log)
    }
    render() {
        return (
            <>
                <p>Sign in now and be a part of the <br /> World’s fastest growing online <br /> community.</p>
                <Errors errors={this.state.errors} />
                <div className="inner-form-box">

                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"  onKeyPress={this.keyPressed} onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    <button className="btn btn-block submit-btn" onClick={this.login}>{this.state.loading === true && <i className="fa fa-spinner fa-spin spin1"></i>} {this.state.uploadValue}</button>
                    <span><Link to="/" className="forget-password">Forgot Password?</Link></span>
                </div>
            </>
        )
    }
}
