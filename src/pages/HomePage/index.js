import React, { Component } from 'react'
import Map from '../../component/Map/Map'
import Button from '../../component/Button'
import ProfileTimeline from '../../component/ProfileTimeline/TimeLine'
import { PROFILE_UNLOAD } from '../../store/reducer/Profile/type';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { SHOW_MODAL } from '../../store/reducer/Modal/type';
import Cookies from 'js-cookie'
import Geocode from 'react-geocode'
import Globals from '../../Global/Constant'
import { Latitude, Longitude, IsMapLoaded, CursorPositionChange, typeofLocation, placeIDChange } from '../../store/reducer/Map/action';
import  API  from '../../Global/PrivateAPI';

 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'veenme',
            show: false
        }
        Cookies.get('accessToken')==null ? this.props.history.push('/') : this.props.history.push('/home');
        this.handleChangeButton = this.handleChangeButton.bind(this);
    }
    
    getAddressfromLatlng(lat, lng) {
        Geocode.setLanguage('en')
        Geocode.setApiKey(Globals.mapApi)

        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.props.ChangeMapLocation(address)
            },
            error => {
                return error;
            }
        );
    }
    componentDidMount(){
        API.get(Globals.api + '/profile').then(data=>{
            Cookies.set("username",data.data.fname+" "+data.data.lname)
        })

        this.props.action('block');
         this.getMyLocation()
    }
    getMyLocation(isCustom = false) {
        Geocode.setLanguage('en')
        Geocode.setApiKey(Globals.mapApi)
        const location = window.navigator && window.navigator.geolocation
   

           
            if (location) {
                location.getCurrentPosition((position) => {
                    
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                        response => {
                            this.props.typeofLocation(response.results[0]['types']);
                            this.props.placeIDChange(response.results[0]['place_id']);
                           // this.setStateData(response.results[0]['address_components'], position.coords.latitude, position.coords.longitude)
                           this.props.latitudeChange(position.coords.latitude)
                           this.props.longitudeChange(position.coords.longitude)
                           this.getAddressfromLatlng(position.coords.latitude,position.coords.longitude)
                           this.props.isMapLoaded('true')
                        },
                        error => {
                
                        }
                    )
                }, (error) => {
                    this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
                })
            }
        
    }
    renderSwitch(param) {
        switch (param) {
            case 'veenme':
                return <ProfileTimeline />;
            case 'reviews':
                return 'review';
            case 'gallery':
                return 'gallery';
            case 'places':
                return 'places';
            default:
                return 'foo';
        }
    }
    handleChangeButton = input => event => {
        this.setState({
            tab: event.target.name
        })
    }
    showModal = () =>{
        this.props.showModalClick('block');
        
    }
    hideModal = () => {
        this.setState({ show: false });
      };
    render() {
        return ( 
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="timeline_wrap">
                        <div className="timeline_view">
                            <div className="map_area">
                                <Map />
                            </div>
                            <div className="veen_now">
                                <Link to="/home" className="btn veen-now" onClick={this.showModal}>Veen Now</Link>
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
        }),
        showModalClick :  (display) => dispatch({
            type: SHOW_MODAL,
            displayModal: display
        }),
        ChangeMapLocation: description => dispatch(CursorPositionChange(description)),
        latitudeChange : latitude => dispatch(Latitude(latitude)),
        typeofLocation : type => dispatch(typeofLocation(type)),
        placeIDChange :  id =>  dispatch(placeIDChange(id)),
        longitudeChange : longitude => dispatch(Longitude(longitude)),
        isMapLoaded : IsMap => dispatch(IsMapLoaded(IsMap)),
    }
};

export default connect(null, mapDispatchToProps)(Home)