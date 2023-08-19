import { styled } from "styled-components";

import Button from "../button/button.component";

export const STC_PaymentFormContainer = styled.div`
  height: 300px;
  dispaly: flex;
  flex-direction: columon;
  align-items: center;
  justify-content: center;
`;

export const STC_FormContainer = styled.div`
  height: 100px;
  min-width: 500px;
`;

export const STC_PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
