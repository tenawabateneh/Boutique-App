import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useState } from "react";

import { BUTTON_TYPE_CLASS } from "../button/button.component";

import {
  STC_PaymentFormContainer,
  STC_FormContainer,
  STC_PaymentButton,
} from "./payment-form.styles";
import { selectCartTotalPrice } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elemnets = useElements();
  const totalAmount = useSelector(selectCartTotalPrice);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elemnets) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalAmount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    // console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elemnets.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment Successufl");
    }
  };

  return (
    <STC_PaymentFormContainer>
      <STC_FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <STC_PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASS.inverted}
          onClick={paymentHandler}
        >
          Pay now
        </STC_PaymentButton>
      </STC_FormContainer>
    </STC_PaymentFormContainer>
  );
};

export default PaymentForm;
