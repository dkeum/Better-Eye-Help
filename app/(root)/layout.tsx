import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import NavbarServer from "@/components/NavBar-Server";

import CartComponentProvider from "@/components/cart/CartProvider";

export const metadata: Metadata = {
  title: "PosturePlus Home",
  description: "Improve computer and vision relationship",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartComponentProvider>
      <NavbarServer />
      {children}
    </CartComponentProvider>
  );
}
