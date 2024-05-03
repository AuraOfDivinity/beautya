"use client";
import { heroSubText } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <section className="flex flex-col">
      <div className="flexCenter max-container padding-container relative w-full overflow-hidden ">
        <Image
          src="/hero-min.png"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className={`brightness-${
            isButtonHovered ? "75" : "50"
          } object-cover object-top 2xl:rounded-5xl transition duration-300`}
          style={{ maxHeight: "700px", width: "100%", height: "auto" }}
        />
      </div>
      {/* <BookingsBar /> */}

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white mt-52">
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
    </section>
  );
};

export default Hero;
