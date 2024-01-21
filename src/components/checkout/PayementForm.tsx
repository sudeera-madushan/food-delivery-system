import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./CheckOut";

const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

const PaymentForm= ():JSX.Element  => {

    return (

        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    );
};

export default PaymentForm;
