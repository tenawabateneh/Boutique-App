import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const logGoogleUserFromRedirect = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    logGoogleUserFromRedirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleUserFromRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   // But it can't continue below here.
  //   // Since it restore everything when it conmes back to the page
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log({ user });
  //   // in order to fix this problem, applay the useEffect hook
  // };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google Popup</button>
      <h1></h1>

      <button onClick={signInWithGoogleRedirect}>
        Sign-In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
