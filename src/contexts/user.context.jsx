import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // a function that dose nothing
});

// an object that stores key value pair
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// returning an obect based on type
const userReducer = (state, action) => {
  console.log("Dispatched");
  console.log("Action", action);

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandle type ${type} in userReducer`);
  }
};

const INITIONAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  //  applaying useReducer hook
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIONAL_STATE);
  // const { currentUser } = state;

  // console.log(currentUser);

  const setCurrentUser = (user) => {
    // dispatch({
    //   type: USER_ACTION_TYPES.SET_CURRENT_USER,
    //   payload: user,
    // });

    // instedOf the above way using the external createAction method is much more better
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  // This is just for observer pattern in place of useContext
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      // this callbck executed whenever the authStateChanged(either the user sigin-in or sign-out)
      if (user) {
        // centeralize the code
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });

    // give me the unsubscribe wehenever this unmount
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
