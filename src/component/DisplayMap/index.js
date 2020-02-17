import React, { Component } from 'react'
import Geocode from 'react-geocode'
import Globals from '../../Global/Constant'
import { connect } from "react-redux";
import Map from '../../component/Map/Map'
import { HIDE_MODAL } from '../../store/reducer/Modal/type';
import { CHANGE_LOCATION } from '../../store/reducer/Map/type';
import { Latitude, Longitude, CursorPositionChange, typeofLocation, placeIDChange } from '../../store/reducer/Map/action';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import '../DisplayMap/index.css';
class DisplayMap extends Component {
    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    getCorrdinatesFromAddress(description) {
        Geocode.setLanguage('en')
        Geocode.setApiKey(Globals.mapApi)
        console.log(description);
        Geocode.fromAddress(description).then(
            
            response => {
              
                this.props.typeofLocation(response.results[0]['types']);
                this.props.placeIDChange(response.results[0]['place_id']);
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.props.latitudeChange(lat)
                this.props.longitudeChange(lng)
                this.props.ChangeMapLocation(description)
            },
            error => {
                console.error(error);
            }
        );
    }
    render() {
        return (
            <>
            <ul id="progressbar">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
            <fieldset className="location">
                <div className="upper-step row">
                    <div className="col-8 pl-0">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                            </div>
                            <GooglePlacesAutocomplete  inputClassName={'controls form-control'} placeholder="Enter your location" onSelect={({ description }) => (this.getCorrdinatesFromAddress(description))} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Map />
                    </div>
                </div>
                <button className="next action-button btn" onClick={this.saveAndContinue}> Next </button>
            </fieldset>
            </>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        HideModalClick: (display) => dispatch({
            type: HIDE_MODAL,
            displayModal: display
        }),
        ChangeMapLocation: description => dispatch(CursorPositionChange(description)),
        latitudeChange: latitude => dispatch(Latitude(latitude)),
        placeIDChange :  id =>  dispatch(placeIDChange(id)),
        longitudeChange: longitude => dispatch(Longitude(longitude)),
        typeofLocation : type => dispatch(typeofLocation(type)),
    }
};
export default connect(null, mapDispatchToProps)(DisplayMap);