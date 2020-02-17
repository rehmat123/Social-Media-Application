import { UPLOAD_IMAGE, ADD_IMAGE_ID} from './type';

export function upload(file) {
    return {
        type: UPLOAD_IMAGE,
        file: file
    };
}
export function Add(id) {
    return {
        type: ADD_IMAGE_ID,
        file_id: id
    };
}






