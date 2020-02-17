import React, { Component } from 'react'
import NotificationComponent from '../../component/Notification/index'
import { PROFILE_UNLOAD } from '../../store/reducer/Profile/type';
import { connect } from "react-redux";
import Cookies from 'js-cookie'
class Notification extends Component {

    constructor(props){
        super(props);
        Cookies.get('accessToken')==null ? this.props.history.push('/') : this.props.history.push('/notification');
    }
    componentDidMount(){
        this.props.action('block');
    }
    
    render() {
        return (
            <div className="col-xl-6 col-lg-6 col-md-6">
                <NotificationComponent/>
          </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action: (display) => dispatch({
            type: PROFILE_UNLOAD,
            display: display
        })
    }
};

export default connect(null, mapDispatchToProps)(Notification)