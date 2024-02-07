import {useShoppingCart} from "use-shopping-cart";
import {loadStripe} from "@stripe/stripe-js";

export default function CheckoutButton() {
    const {cartCount = 0, cartDetails} = useShoppingCart();

    const redirectToCheckout = async () => {
        try {
            

            console.log("trying step 1:")
            //https://brianhhough.com/techstackplaybook/stripe-sdk-invalid-value-for-stripe-apikey-should-be-a-string-you-specified-undefined
            const stripe = await loadStripe(`${process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY}`);
            console.log("trying step 2:")
            if (!stripe) throw new Error('Stripe failed to initialize.');
            console.log("trying step 3:")

            const apiRoute =  `/api/checkout_session`
            console.log(apiRoute)
            const checkoutResponse = await fetch(apiRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cartDetails}),
            });

            console.log(checkoutResponse)
            console.log("trying step 4:")

            const response  = await checkoutResponse.json();
            console.log(response)
            const stripeError = await stripe.redirectToCheckout({sessionId: response.sessionId});

            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={() => cartCount > 0 && redirectToCheckout()}
            disabled={cartCount === 0}
            className="rounded-md border border-transparent bg-sky-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 mr-2 disabled:bg-gray-600">
            Checkout
        </button>
    );
}