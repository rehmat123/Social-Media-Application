import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import Errors from '../../component/Error/index'
import Cookies from 'js-cookie'
import Globals from '../../Global/Constant'
export default class SignUp extends Component {
    state = {
        'errors': [],
        'fname': '',
        'lname': '',
        'email': '',
        'phone': '',
        'password': '',
        'date': '',
        'gender': 'male',
        loading: false,
        uploadValue: 'Sign Up'
    }
    onChange = date => this.setState({ date })
    register = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, uploadValue: 'Loading....' })
        if (this.state.email === '' || this.state.password === '') {
            return this.setState({ errors: ['Email and Password Both Required'] })
        }

        fetch(Globals.api + '/signup', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: 'fname=' + this.state.fname + '&lname=' + this.state.lname + '&email=' + this.state.email + '&password=' + this.state.password + '&platform=web' + '&dob=' + '1995-04-30' + '&gender=' + this.state.gender + '&phone=' + encodeURIComponent(this.state.phone)
        }).then(res => res.json()).then((data) => {
            if (data.data.token) {
                Cookies.set('accessToken', data.data.token)
                this.setState({ loading: false })
                window.location.href = Globals.appHomePage;
            } else {
                this.setState({ loading: false, uploadValue: 'Sign Up' })
                this.setState({ errors: [data.data.message] })
            }
        }).then(console.log)
    }
    render() {
        return (
            <div className="sign-up-form-box">
                <h1>Sign Up today!</h1>
                <h2>& Start Veening Now</h2>
                <div className="inner-form-box">
                    <Errors errors={this.state.errors} />
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.fname} onChange={event => this.setState({ fname: event.target.value })} placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.lname} onChange={event => this.setState({ lname: event.target.value })} placeholder="Surname" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                            format="y-MM-dd"
                        />
                    </div>
                    <fieldset>
                        <div class="form-group">
                            <input type="radio" class="radio" name="x" value="male" onChange={event => this.setState({ gender: event.target.value })} checked={this.state.gender === 'male'} />
                            <label>Male</label>
                            <input type="radio" class="radio" name="x" value="female" onChange={event => this.setState({ gender: event.target.value })} checked={this.state.gender === 'female'} />
                            <label>Female</label>
                        </div>
                    </fieldset>

                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.phone} onChange={event => this.setState({ phone: event.target.value })} placeholder="Phone Number" />
                    </div>
                    <button className="btn btn-block submit-btn" onClick={this.register}>{this.state.loading === true && <i className="fa fa-spinner fa-spin spin1"></i>}{this.state.uploadValue}</button>
                    <p>* By clicking <b>"sign up now"</b> you are agreeing to the Terms of Service and Privacy Policy</p>
                </div>
            </div>
        )
    }
}
