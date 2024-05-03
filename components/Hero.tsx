"use client";
import { heroSubText } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <section className="relative">
      <div className="max-container padding-container relative w-full overflow-hidden ">
        <Image
          src="/hero-min.png"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className={`brightness-50 ${
            isButtonHovered ? "brightness-100" : ""
          } object-cover object-top 2xl:rounded-5xl transition duration-300`}
          style={{ maxHeight: "700px", width: "100%", height: "auto" }}
        />
        <div className="absolute inset-0 flex justify-center items-center text-center top-1/2 transform translate-y-2">
          <div className="text-white">
            <div className="text-4xl text-center px-30 font-bold">
              {heroSubText}
            </div>
            <div className="justify-center text-center mt-4">
              <button
                className="border-white text-white border-2 px-4 py-2 hover:bg-white hover:text-wine"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
