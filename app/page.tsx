import Products from "@/components/Products";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import OrganicSkincare from "@/components/OrganicSkincare";

export default function Home() {
  return (
    <>
      <Hero />

      <Products />
      <Offers />
      <OrganicSkincare />
      <Testimonials />
    </>
  );
}
