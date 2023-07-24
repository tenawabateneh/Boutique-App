import { useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

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

  const { setCurrentUser } = useContext(UserContext);

  const formFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // creating a user
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      // clearout the form fields
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Can not Create USER, Email Already in-use");
      } else alert("User Creation Encountered an Erorr: ", error);
    }
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
          name="displayName"
          value={displayName}
          onChange={formFieldChangeHandler}
          required
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

        <Button type="submit" buttonType="inverted">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
