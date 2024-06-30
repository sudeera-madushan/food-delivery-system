import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./CheckOut";

const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

const PaymentForm= (prop: {payed: boolean, pay: Function}):JSX.Element  => {

    return (

        <Elements stripe={stripePromise} >
            <CheckoutForm payed={prop.payed} pay={prop.pay}/>
        </Elements>
    );
};

export default PaymentForm;
