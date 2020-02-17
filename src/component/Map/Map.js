import React, { Component } from 'react';
import Geocode from 'react-geocode'
import Globals from '../../Global/Constant'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from "react-redux";
import { mapChange, Latitude, Longitude, CursorPositionChange, typeofLocation, placeIDChange } from '../../store/reducer/Map/action'

class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            longitude: null,
            latitude: null,
            country: null,
            c_state: null,
            city: null,
            street: 'Searching...',
            isStreet: false

        }
    }



    displayMarkers = () => {
        return <Marker key={1} id={1} position={{
            lat: this.props.location.latitude,
            lng: this.props.location.longitude
        }}
            onClick={() => console.log("You clicked me!")
            }
        />
    }

    getAddressfromLatlng(lat, lng) {
        Geocode.setLanguage('en')
        Geocode.setApiKey(Globals.mapApi)

        Geocode.fromLatLng(lat, lng).then(
            response => {
                console.log(response.results[0]['types'][0]);
                this.props.typeofLocation(response.results[0]['types']);
                const address = response.results[0].formatted_address;
                this.props.ChangeMapLocation(address)
            },
            error => {
                return error;
            }
        );
    }

    onMapClick = (mapProps, map, event) => {
        console.log('Onclick called');
        this.props.latitudeChange(event.latLng.lat())
        this.props.longitudeChange(event.latLng.lng())
        this.displayMarkers();
        this.getAddressfromLatlng(event.latLng.lat(), event.latLng.lng());
    }



    render() {
        const renderMarkers = (map, maps) => {
            console.log(map);
            let marker = new maps.Marker({
            position: { lat: 67.0686729, lng: 24.8778193 },
            map,
            title: 'Hello World!'
            });
            return marker;
           };
        const map = this.props.isMap
        const lat = this.props.location.latitude
        const lng = this.props.location.longitude
        return (

            (map === false) ?
                (this.state.isStreet === true) ? (
                    <textarea readOnly className='form-control' value={this.state.street}>  </textarea>) : null
                :
                (
                    <div style={{ position: "relative", height: "60vh" }}>
                        {(this.props.location.isMapLoaded) ? (
                            <Map
                                onClick={this.onMapClick}
                                google={this.props.google}
                                zoom={19}
                                initialCenter={{ lat: lat, lng: lng }}
                                center={{ lat: lat, lng: lng }}
                                yesIWantToUseGoogleMapApiInternals={true}
                                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                            >
                                {this.displayMarkers()}
                            </Map>
                        ) : null}
                    </div>
                )

        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeMapLocation: description => dispatch(CursorPositionChange(description)),
        latitudeChange: latitude => dispatch(Latitude(latitude)),
        longitudeChange: longitude => dispatch(Longitude(longitude)),
        placeIDChange :  id =>  dispatch(placeIDChange(id)),
        typeofLocation : type => dispatch(typeofLocation(type)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
    apiKey: (Globals.mapApi)
})(Maps))
