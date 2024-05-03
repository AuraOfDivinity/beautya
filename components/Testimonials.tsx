import { TESTIMONIAL_DETAILS } from "@/constants";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="flexCenter py-5">
      <div className="max-container padding-container relative">
        <div className="flex flex-col flex-1 items-center">
          <div className="font-sans text-2xl font-bold text-wine-900 pb-2 text-center my-12 mx-auto">
            Testimonials
          </div>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar max-container overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 animate-infinite-scroll">
              {TESTIMONIAL_DETAILS.map((testimonial, index) => (
                <div className="inline-block px-3" key={index}>
                  <div className="flex flex-col items-center pb-10 min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-wine-primary">
                    <img
                      className="w-24 h-24 mb-3 m-3 rounded-full  object-cover mt-4"
                      src={testimonial.imageUrl}
                      alt="Bonnie image"
                    />
                    <div className="font-sans text-black-primary text-base px-10 leading-5 mt-4">
                      {testimonial.description}
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map(
                        (
                          _,
                          i // Rendering five star icons
                        ) => (
                          <Star key={i} size={24} color="#A10550" /> // Using the Star icon component with primary-wine color
                        )
                      )}
                    </div>
                    <div className="font-sans text-black-primary text-base font-bold mt-4">
                      - {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 animate-infinite-scroll"
              aria-hidden="true"
            >
              {TESTIMONIAL_DETAILS.map((testimonial, index) => (
                <div className="inline-block px-3" key={index}>
                  <div className="flex flex-col items-center pb-10 min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary">
                    <img
                      className="w-24 h-24 mb-3 m-3 rounded-full  object-cover mt-4"
                      src={testimonial.imageUrl}
                      alt="Bonnie image"
                    />
                    <div className="font-sans text-black-primary regular-16 px-10  leading-4 mt-4">
                      {testimonial.description}
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <Image
                        src="/Star.png"
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/Star.png"
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/Star.png"
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/Star.png"
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/Star.png"
                        alt="star"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="font-sans text-black-primary bold-26 mt-4">
                      - {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
