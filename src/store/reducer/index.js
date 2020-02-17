
import { combineReducers } from 'redux';
import post from './post/reducer'
import mapChange from './Map/reducer'
import header from './Profile/reducer'
import Modal from './Modal/reducer';
import activity from './Activities/reducer';
import File from './Uploads/reducer';

export default combineReducers({
    post : post,
    location:mapChange,
    header : header,
    show : Modal,
    activity : activity,
    file : File
});
