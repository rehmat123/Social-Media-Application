import {PROFILE_LOAD, PROFILE_UNLOAD} from './type'

export default (state = [], action) => {

    switch (action.type) {
        case PROFILE_LOAD:
            return { ...state,display: action.display};
        case PROFILE_UNLOAD:
            return {  ...state,display: action.display};    
        default:
            return state;
    }
}
