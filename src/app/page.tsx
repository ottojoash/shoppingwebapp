import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import CandleProducts from "@/components/CandleProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <CandleProducts/>
      <NewProducts />
      <Testimonial />
    </main>
  );
}
