import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// TODO: add publishable key
const stripePromise = loadStripe(
  "pk_test_51QhruBFWRLGvevxRQR8jmSQoJw83f0lO3SSvk2GvWQgbtop7VKeofs3bOP8CgB95v1amWJM9AprwSElJpgAMKAum00NtD5DCqL"
);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
