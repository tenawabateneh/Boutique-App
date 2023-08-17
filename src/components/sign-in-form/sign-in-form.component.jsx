import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  STC_SignInContainer,
  STC_ButtonsContainer,
} from "./sign-in-form.styles";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

// This pattern is to generise the handle change event of input fields
const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setformFields] = useState(defaultFormFileds);
  const { email, password } = formFields;

  // console.log(formFields);

  const formFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const signInWithEmailPassword = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart());

    // creating a user
    try {
      dispatch(emailSignInStart(email, password));
      // console.log("USER_WITH_EMAIL-SIGN_IN ", user);

      // clearout the form fields
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User is not found with the inserted email and passwod.");
          break;

        case "auth/network-request-failed":
          alert("You're offline, Please Check Your Network Connection.");
          break;

        case "auth/wrong-password":
          alert("The Password is incorrect...");
          break;

        default:
          alert("SignInWithEmailAndPassword Encountered an Erorr: ", error);
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());

    // console.log("USER_WITH_GOOGLE_POPUP-SIGN_IN ", user);
  };

  const resetFormFields = () => {
    setformFields(defaultFormFileds);
  };

  return (
    <STC_SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signInWithEmailPassword}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={formFieldChangeHandler}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={formFieldChangeHandler}
          required
        />

        <STC_ButtonsContainer>
          <Button
            type="submit"
            buttonType="inverted"
            onClick={signInWithEmailPassword}
          >
            Sign-In
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASS.google}
          >
            Google Sign-In
          </Button>
        </STC_ButtonsContainer>
      </form>
    </STC_SignInContainer>
  );
};

export default SignInForm;
