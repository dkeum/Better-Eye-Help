import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "PosturePlus Home",
  description: "Improve computer and vision relationship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body>
    <Navbar/>
    {children}</body>;
}
