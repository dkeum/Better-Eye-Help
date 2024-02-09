"use client";

import Image from "next/image";
import React from "react";
import CartBadge from "./CartBadge";

import { useShoppingCart } from "use-shopping-cart";

const openCart = () => {
  const { cartCount, cartDetails } = useShoppingCart();

  return (
    <div className="flex flex-col ml-8 md:ml-0">
      <CartBadge items={cartCount || 0} />
      <Image
        className="bg-transparent "
        src="/cart.png"
        alt="cart"
        width={30}
        height={30}
      />
    </div>
  );
};

export default openCart;
