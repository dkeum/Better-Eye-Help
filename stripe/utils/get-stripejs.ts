import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_TEST_KEY) {
    throw new Error('STRIPE_TEST_SECRET_KEY is missing. Please set the environment variable.');
}

//https://stackoverflow.com/questions/69153493/uncaught-in-promise-integrationerror-missing-value-for-stripe-apikey-shoul
const stripe = new Stripe(`${process.env.STRIPE_SECRET_TEST_KEY}`);

export default stripe;