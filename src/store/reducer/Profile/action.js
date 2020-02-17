import {PROFILE_LOAD, PROFILE_UNLOAD} from './type'

export function profileLoad(displays) {
    return ({
        type: PROFILE_LOAD,
        display: displays
    })
}
export function profileUnload(displays) {
    return ({
        type: PROFILE_UNLOAD,
        display: displays
    })
}