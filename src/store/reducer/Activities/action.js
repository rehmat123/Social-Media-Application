import { SELECT_ACTIVITY} from './type';

export function Select(activity) {
    return {
        type: SELECT_ACTIVITY,
        activity: activity
    };
}





