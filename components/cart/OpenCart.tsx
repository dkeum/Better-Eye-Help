"use client";

import Image from "next/image";
import React from "react";
import CartBadge from "./CartBadge";

import { useShoppingCart } from "use-shopping-cart";

const openCart = () => {
  const { cartCount, cartDetails } = useShoppingCart();

  return (
    <>
      <CartBadge items={cartCount || 0} />
      <Image
        className="bg-transparenWt"
        src="/cart.png"
        alt="cart"
        width={30}
        height={30}
      />
    </>
  );
};

export default openCart;
