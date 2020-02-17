import { SELECT_ACTIVITY} from './type'

export default (state = [], action) => {

    switch (action.type) {
        case SELECT_ACTIVITY:
            return { ...state,activity: action.activity};
            default:
            return state;
    }
}
