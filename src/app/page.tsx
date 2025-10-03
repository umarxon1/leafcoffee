import About from "@/components/About/about";
import Atmosphere from "@/components/Atmosphere/atmosphere";
import SliderBanner from "@/components/Banner/banner";
import Contacts from "@/components/Contact/contact";
import Hero from "@/components/Hero/hero";
import ProductGrid from "@/components/ProductGrid/product_grid";
import Products from "@/components/Products/products";
import Testimonials from "@/components/Testimonials/testimonials";

export default function Home() {
  return (
    <main >
     {/* <SliderBanner/> */}
     <Hero/>
     <ProductGrid/>
     <Atmosphere/>
     <Products/>
     <Testimonials/>
     <About/>
     <Contacts/>
    </main>
  );
}
