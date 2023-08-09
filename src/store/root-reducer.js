import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

// used to create the big final reducer by combining smaller reducers togther
export const rootReducer = combineReducers({
    user: userReducer
})  