import {
    SET_CURRENT_PROFILE,
    GET_LIST_PROFILE,
    ADD_PROFILE,
    RENAME_PROFILE,
    DELETE_PROFILE,
    SWITCH_PROFILE,
} from '../actions/actionTypes';

function setCurrentProfile(profile) {
    return {
        type: SET_CURRENT_PROFILE,
        payload: profile,
    };
}

function getCurrentList(profile){
    return {
        type: GET_LIST_PROFILE,
        payload: profile,
    };
}

function addProfile(profile){
    return {
        type: ADD_PROFILE,
        payload: profile,
    };
}

function renameProfile(profile){
    return {
        type: RENAME_PROFILE,
        payload: profile,
    };
}

function deleteProfile(profile){
    return {
        type: DELETE_PROFILE,
        payload: profile,
    };
}

function switchProfile(profile){
    return {
        type: SWITCH_PROFILE,
        payload: profile,
    };
}

export {
    setCurrentProfile,
    getCurrentList,
    addProfile,
    renameProfile,
    deleteProfile,
    switchProfile,
};
