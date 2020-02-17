import { ADD_POST, LOAD_POST, LIKE_POST_TOGGLE} from './type';

export function Add(post) {
    return {
        type: ADD_POST,
        post: post
    };
}
export function load(post) {
    return {
        type: LOAD_POST,
        post: post
    };
}
export function LikePostToggle(id) {
    return {
        type: LIKE_POST_TOGGLE,
        array_index: id
    };
}






