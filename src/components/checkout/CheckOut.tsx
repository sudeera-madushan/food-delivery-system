import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
            <div className="flex space-x-4">
                <input className="flex-1 p-2 border border-gray-300 rounded" placeholder="First name" />
                <input className="flex-1 p-2 border border-gray-300 rounded" placeholder="Last name" />
            </div>
            <input className="w-full p-2 border border-gray-300 rounded" placeholder="Email" />
            <input className="w-full p-2 border border-gray-300 rounded" placeholder="Phone" />
            <input className="w-full p-2 border border-gray-300 rounded" placeholder="Address" />
            <CardElement className="p-2 border border-gray-300 rounded" />
            <button type="submit" disabled={!stripe} className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500">
                Pay
            </button>
        </form>
    );
};


export default CheckoutForm;
