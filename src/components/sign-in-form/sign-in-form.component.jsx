import { useState, useContext } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

// This pattern is to generise the handle change event of input fields
const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFileds);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  console.log(formFields);

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
      // setUp the userContext
      setCurrentUser(user);   


      // console.log(user);
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
          alert("Sign-In Encountered an Erorr: ", error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setformFields(defaultFormFileds);
  };

  return (
    <div className="sign-up-container">
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

        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
