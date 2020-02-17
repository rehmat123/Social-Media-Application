import { UPLOAD_IMAGE, ADD_IMAGE_ID } from './type'

const initalState = {
    file_id: []
}
export default (state = initalState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE:
            return { ...state, file: action.file };
        case ADD_IMAGE_ID:
            return { ...state, file_id: state.file_id.concat(action.file_id) };
        default:
            return state;
    }
}
