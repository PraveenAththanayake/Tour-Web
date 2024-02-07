import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AboutUs from "@/components/LandingPage/AboutUs";
import OurTours from "@/components/LandingPage/OurTours";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      {/* <Features /> */}
      <OurTours />
      Home
    </main>
  );
}
