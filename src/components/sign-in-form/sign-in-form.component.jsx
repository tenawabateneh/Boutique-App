import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  STC_SignInContainer,
  STC_ButtonsContainer,
} from "./sign-in-form.styles";

// This pattern is to generise the handle change event of input fields
const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFileds);
  const { email, password } = formFields;

  // console.log(formFields);

  const formFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // creating a user
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
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
    try {
      await signInWithGooglePopup();
    } catch (error) {
      switch (error.code) {
        case "auth/cancelled-popup-request":
          alert("You're Popup request cancelled, You can retry it...");
          break;

        case "auth/popup-closed-by-user":
          alert("You're Popup request closed by user, You can retry it...");
          break;

        default:
          alert("SignInWithGooglePopup Encountered an Erorr: ", error);
      }
    }
  };

  const resetFormFields = () => {
    setformFields(defaultFormFileds);
  };

  return (
    <STC_SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
          <Button type="submit" buttonType="inverted">
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
