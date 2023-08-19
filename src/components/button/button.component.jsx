import {
  STC_BaseButton,
  STC_GoogleSignInButton,
  STC_InvertedButton,
  STC_ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: STC_BaseButton,
    [BUTTON_TYPE_CLASS.google]: STC_GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: STC_InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <STC_ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;
