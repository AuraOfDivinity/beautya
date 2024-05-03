import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_LINKS, footerDescription } from "@/constants";

const Footer = () => {
  return (
    <div className="w-[100%] h-auto flex relative bg-wine-900 flex-col">
      <Image
        src="/logo.png"
        alt="ramada logo"
        width={100}
        height={90}
        className="m-auto mt-8"
      />

      <div className="mt-6 w-[50%] m-auto">
        <form>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-primary  text-sm bg-white"
              placeholder="Enter Your Email Here"
            />
            <button className="min-w-[20%] xl:absolute sm:w-[100%] xs:w-[100%] xl:w-[25%] end-2.5 bottom-2.5 bg-wine-primary text-white font-primary rounded-sm px-4 py-0.5 hover:bg-white hover:text-wine-primary hover:border-wine-primary hover:border">
              <label className="whitespace-nowrap  font-sans  flexCenter">
                Get In Touch
              </label>
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-6 justify-center text-center">
        <div className="font-secondary text-white regular-16 px-8">Support</div>
        <div className="font-secondary text-white regular-16 px-8">
          Privacy Policy
        </div>
        <div className="font-secondary text-white regular-16 px-8">
          Terms and Conditions
        </div>
      </div>
      <div className="flex my-6 justify-center text-center">
        <div className="font-sans text-white text-sm px-8">
          © 2024 Asel Peiris, All Right Receved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
