import {UPDATE_LOCATION, CHANGE_LOCATION, LATITUDE_CHANGE, LONGITUDE_CHANGE, IS_MAP_LOADED, TYPE_OF_LOCATION,CHANGE_PLACE_ID} from './type'

export function mapChange(location) {
    return ({
        type: UPDATE_LOCATION,
        location: location
    })
}
export function CursorPositionChange(description) {
    return ({
        type: CHANGE_LOCATION,
        description: description
    })
}
export function Latitude(Latitude){
    return ({
        type: LATITUDE_CHANGE,
        Latitude: Latitude
    })
}
export function Longitude(Longitude){
    return ({
        type: LONGITUDE_CHANGE,
        Longitude: Longitude
    })
}
export function IsMapLoaded(IsMap){
    return ({
        type: IS_MAP_LOADED,
        IsMap: IsMap
    })
}
export function typeofLocation(type){
    return ({
        type: TYPE_OF_LOCATION,
        type_of_location: type
    })
}

export function placeIDChange(id){
    return ({
        type: CHANGE_PLACE_ID,
        place_id: id
    })
}
