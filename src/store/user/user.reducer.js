import { USER_ACTION_TYPES } from "./user.types";

const INITIONAL_STATE = {
    currentUser: null,
};


// returning an obect based on type
export const userReducer = (state = INITIONAL_STATE, action) => {
    // console.log("Dispatched");
    // console.log("Action", action);

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};
