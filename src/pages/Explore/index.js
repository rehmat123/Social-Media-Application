import React, { Component } from 'react'
import Button from '../../component/Button'
import TimeLines from '../../component/TimeLine/TimeLines'
import Review from '../../component/Review/index'
import { PROFILE_UNLOAD } from '../../store/reducer/Profile/type';
import { connect } from "react-redux";
import Cookies from 'js-cookie'
 class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'veenme'

        }
        Cookies.get('accessToken')==null ? this.props.history.push('/') : this.props.history.push('/explore');
        this.handleChangeButton = this.handleChangeButton.bind(this);
    }
    componentDidMount(){
        this.props.action('block');
    }
    handleChangeButton = input => event => {
        this.setState({
            tab: event.target.name
        })
    }
    renderSwitch(param) {
        switch (param) {
            case 'veenme':
                return <TimeLines />;
            case 'reviews':
                return <Review/>;
            case 'gallery':
                return 'gallery';
            case 'places':
                return 'places';
            default:
                return 'foo';
        }
    }
    render() {
        return (
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="timeline_wrap">
                    <div className="timeline_view">
                        <div className="search_filed">
                            <i className="fas fa-search"></i>
                            <input type="text" name="" className="form-control" placeholder="Enter for search…" />
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <Button handleChange={this.handleChangeButton} name='veenme' onClick={this.onClick} active={'active'}>Veenme</Button>
                            <Button handleChange={this.handleChangeButton} name='reviews'>Reviews</Button>
                            <Button handleChange={this.handleChangeButton} name='gallery'>Gallery</Button>
                            <Button handleChange={this.handleChangeButton} name='places'>Places</Button>
                        </ul>
                        {this.renderSwitch(this.state.tab)}
                        
                    </div>
                </div>
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

export default connect(null, mapDispatchToProps)(Explore)