import { useState } from "react";

import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

// This pattern is to generise the handle change event of input fields
const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const formFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Password doosen't match");
      return;
    }
    // creating a user
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });

      // clearout the form fields
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Can't Create USER, Email Already in use.");
      }
      console.log("User Creation Encountered an Erorr: ", error);
    }

    // const { user } = await signInWithEmailAndPassword();
    // const userDocRef = await createUserDocumentFromAuth(user);
    // return userLogs;
  };

  const resetFormFields = () => {
    setformFields(defaultFormFileds);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={formFieldChangeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={formFieldChangeHandler}
          required
        />
        <Button type="submit" buttonType="inverted" >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
