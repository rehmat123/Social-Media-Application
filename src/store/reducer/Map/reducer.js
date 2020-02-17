import {UPDATE_LOCATION, CHANGE_LOCATION, LONGITUDE_CHANGE, LATITUDE_CHANGE, IS_MAP_LOADED, TYPE_OF_LOCATION, CHANGE_PLACE_ID} from './type'

export default (state = [], action) => {

    switch (action.type) {
        case UPDATE_LOCATION:
            return { ...state,street: action.location.street};
        case CHANGE_LOCATION:
            return { ...state,street: action.description};   
        case LONGITUDE_CHANGE:
            return { ...state,longitude: action.Longitude};
        case LATITUDE_CHANGE:
            return { ...state,latitude: action.Latitude}; 
        case TYPE_OF_LOCATION:
            return { ...state,type_of_location: action.type_of_location}; 
        case CHANGE_PLACE_ID:
            return { ...state,place_id: action.place_id}; 
        case IS_MAP_LOADED:
            return { ...state,isMapLoaded: true}; 
        default:
            return state;
    }
}
