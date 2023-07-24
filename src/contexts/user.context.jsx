import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // a function that dose nothing
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
