import { USER_ACTION_TYPES } from "./user.types";

const INITIONAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
};


// returning an obect based on type
export const userReducer = (state = INITIONAL_STATE, action) => {
    // console.log("Dispatched");
    // console.log("Action", action);

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return { ...state, error: payload };
        default:
            return state;
    }
};
