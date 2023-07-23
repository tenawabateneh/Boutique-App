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
import FormInput from "../form-input/form-input.component";

// This pattern is to generise the handle change event of input fields
const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFileds);
  const { displayName, email, password, confirm_password } = formFields;

  console.log(formFields);

  const formFieldChangeHandler = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirm_password) {
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
  };

  const resetFormFields = () => {
    setformFields(defaultFormFileds);
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          lable="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            value: displayName,
            onChange: formFieldChangeHandler,
            required: true,
          }}
        />

        <FormInput
          lable="Email"
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            onChange: formFieldChangeHandler,
            required: true,
          }}
        />

        <FormInput
          lable="Password"
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            onChange: formFieldChangeHandler,
            required: true,
          }}
        />

        <FormInput
          lable="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirm_password",
            value: confirm_password,
            onChange: formFieldChangeHandler,
            required: true,
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
