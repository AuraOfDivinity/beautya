import { SUITES_LIST } from "@/constants";
import Head from "next/head";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content="Contains currently offered skincare products."
        />
        {/* Add other meta tags as needed */}
      </Head>
      <section className="flexCenter py-5" id="products">
        <div className="flex max-container padding-container relative w-full">
          {/* extract into single styles */}
          <div className="flex flex-col flex-1">
            <div className="font-sans text-2xl font-bold text-wine-900 pb-2 text-center my-12 mx-auto">
              Products
            </div>
            <ul className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 sm:gap-x-2 lg:gap-x-7">
              {SUITES_LIST.map((suite) => (
                <SuiteCard
                  key={suite.name}
                  description={suite.description}
                  productName={suite.name}
                  imageUrl={suite.imageUrl}
                  price={suite.price}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

type SuiteCardProps = {
  productName: string;
  imageUrl: string;
  description: string;
  price: string;
};
const SuiteCard = ({
  productName,
  imageUrl,
  description,
  price,
}: SuiteCardProps) => {
  return (
    <div className="overflow-hidden shadow-lg border border-slate-300">
      <Image
        className="w-full"
        src={imageUrl}
        alt="suite image"
        width={250}
        height={180}
      />
      <div>
        <div className="font-sans font-bold text-wine-primary my-2 text-left mx-3">
          {productName}
        </div>
      </div>
      <ul className="font-sans my-2 mx-3 text-left text-xs">{description}</ul>
      <div className="font-sans my-2 mx-3 text-left text-lg">{price}</div>
    </div>
  );
};

export default Products;
