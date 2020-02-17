import { SHOW_MODAL, HIDE_MODAL} from './type';

export function show(display) {
    return {
        type: SHOW_MODAL,
        displayModal: display
    };
}
export function hide(post) {
    return {
        type: HIDE_MODAL,
        displayModal: display
    };
}






