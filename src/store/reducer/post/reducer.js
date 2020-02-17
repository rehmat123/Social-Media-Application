import { ADD_POST, LOAD_POST, LIKE_POST_TOGGLE } from './type'

export default (state = [], action) => {

    switch (action.type) {
        case ADD_POST:
            return { ...state, post: action.post };
        case LOAD_POST:
            return { ...state, post: action.post };
        case LIKE_POST_TOGGLE:
            let value= state.post[action.array_index].is_like
             state.post[action.array_index].is_like = !value;
            return { ...state};
        default:
            return state;
    }
}
