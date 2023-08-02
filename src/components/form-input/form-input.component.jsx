import {
  STC_FormInputLabel,
  STC_FormInput,
  STC_Group,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <STC_Group>
      <STC_FormInput {...otherProps} />
      {label && (
        <STC_FormInputLabel shrink={otherProps.value.length}>
          {label}
        </STC_FormInputLabel>
      )}
    </STC_Group>
  );
};

export default FormInput;
