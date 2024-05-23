import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import ClothingProduct from "@/components/CandleProducts";


export default function Home() {
  return (
    <main>
      <Hero />
      <ClothingProduct/>
      <NewProducts />
      <Testimonial />
    </main>
  );
}
