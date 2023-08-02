import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { STC_AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <STC_AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </STC_AuthenticationContainer>
  );
};

export default Authentication;
