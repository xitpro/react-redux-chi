import {
    SET_CURRENT_PROFILE,
    GET_LIST_PROFILE,
    ADD_PROFILE,
    RENAME_PROFILE,
    DELETE_PROFILE,
    SWITCH_PROFILE,   
} from '../actions/actionTypes';

const initialState = {
    session: localStorage,
  };
  
  export function profileReducers(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_PROFILE:
        return {
          ...state,
        };
      case GET_LIST_PROFILE:
        return {
          ...state,
        };
      case ADD_PROFILE:
        return {
          ...state,
        };
      case RENAME_PROFILE:
        return {
          ...state,
        };
      case DELETE_PROFILE:
        return {
          ...state,
        };
      case SWITCH_PROFILE:
        return {
          ...state,
          list: action.payload,
        };
      default:
        break;
    }
    return state;
  }