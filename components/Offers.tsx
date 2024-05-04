import { deliveryMainText, deliverySubText } from "@/constants";
import Head from "next/head";
import Image from "next/image";

const Offers = () => {
  return (
    <>
      <Head>
        <title>Offers</title>
        <meta name="description" content="Ongoing offers." />
      </Head>
      <section className="flexCenter py-5" id="offers">
        <div className="max-container padding-container relative w-full">
          <div className="font-sans text-2xl font-bold text-wine-900 pb-2 text-center my-12 mx-auto">
            Offers
          </div>
          <div className="flex flex-col lg:flex-row bg-wine-25">
            <div className="flex-1">
              <Image
                src="/offer.png"
                alt="offers image"
                width={800}
                height={800}
                className="object-cover w-full min-w-max"
              />
            </div>
            <div className="p-6 flex-1 bg-wine-25 my-6">
              <div className="font-sans text-2xl font-bold text-wine-900 whitespace-pre-wrap">
                Special Offers
              </div>
              <div className="font-sans text-3xl font-bold text-wine-primary whitespace-pre-wrap my-3">
                Save Up To 50%
              </div>
              <div className="font-sans text-md text-wine-900 whitespace-pre-wrap my-3">
                Time to enjoy the largest discounts for the best skincare
                products in town! A wide range of discounts are now available at
                all our outlets and also for online purchases.
              </div>
              <div className="font-sans bold-16 text-wine-primary">
                {deliverySubText}
              </div>
              <div className="text-right mt-6">
                <button className="flex items-center justify-center gap-3 bg-wine-primary px-4 py-2 text-white font-sans text-base hover:bg-white hover:text-wine-primary hover:border-wine-primary hover:border">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
