import Head from "next/head";
import Image from "next/image";

const OrganicSkincare = () => {
  return (
    <>
      <Head>
        <title>Organic Skincare</title>
        <meta
          name="description"
          content="Description for the second section."
        />
      </Head>
      <section className="flexCenter py-5 my-5" id="second-section">
        <div className="max-container padding-container relative w-full">
          <div className="flex flex-col lg:flex-row bg-wine-750">
            <div className="p-6 flex-1 bg-wine-750 my-6 ">
              <div className="font-sans text-2xl font-bold text-white whitespace-pre-wrap">
                Organic Skincare
              </div>
              <div className="font-sans text-md text-white whitespace-pre-wrap my-3">
                Discover the essence of purity with our Organic Skincare line.
                Crafted with the finest natural ingredients, our products
                harness the power of nature to nurture and revitalize your skin.
                Embrace a holistic approach to skincare, free from harsh
                chemicals and artificial additives. Embrace the beauty of nature
                with Organic Skincare – where purity meets efficacy.
              </div>
              <div className="text-left">
                <button className="border-white text-white border-2 px-4 py-2 hover:bg-white hover:text-wine-primary mt-4">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/organic.png"
                alt="Description image"
                width={400}
                height={400}
                className="object-cover w-full min-w-max"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganicSkincare;
