import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-slate-50 px-20 py-12 max-md:flex-col">
      <p>Copyright © 2024 Better Eye Health | All rights Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & Condition</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

    </footer>
  );
};

export default Footer;
