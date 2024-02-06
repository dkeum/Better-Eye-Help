"use client";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CartComponentProvider = ({ children }: { children: ReactNode }) => (
  <CartProvider
      // @ts-ignore
      mode="payment"
      cartMode={"checkout-session"}
      stripe={process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string}
      currency={'CAD'}
      successUrl={process.env.PROUCTION_ENV as string}
      cancelUrl={process.env.PROUCTION_ENV as string}
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
  >
    <>{children}</>
  </CartProvider>
);

export default CartComponentProvider;
