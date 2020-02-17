import { SHOW_MODAL, HIDE_MODAL } from './type'

export default (state = [], action) => {

    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, show: action.displayModal };
        case HIDE_MODAL:
            return { ...state, show: action.displayModal };
        default:
            return state;
    }
}
