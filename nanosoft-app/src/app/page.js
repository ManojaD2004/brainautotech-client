"use client";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import IndustryWeServeSection from "@/components/IndustryWeServeSection";
import LoadingScreen from "@/components/LoadingScreen";
import OurServicesSection from "@/components/OurServicesSection";
import OurValuesSection from "@/components/OurValuesSection";
import PurpleCardSection from "@/components/PurpleCardSection";
import SidePopup from "@/components/SidePopup";
import SlidingHeroSection from "@/components/SlidingHeroSection";
import Testimonials from "@/components/Testimonials";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let isLoaded = true;
  for (let index = 0; index < loading.length; index++) {
    isLoaded = isLoaded && loading[index];
  }
  useEffect(() => {
    async function loadImg() {
      const img1 = window.document.createElement("img");
      img1.onload = function () {
        // console.log("hi");
        setLoading((prevLoad) => {
          const newLoad = [...prevLoad];
          newLoad[7] = true;
          return newLoad;
        });
      };
      img1.src = "/sls-images/1.jpeg";
    }
    loadImg();
  }, []);

  // console.log(isLoaded, loading);
  return (
    <main>

      <SidePopup />
      <Header1 />

      <AnimatePresence mode="wait">
        {!isLoaded && <LoadingScreen />}
      </AnimatePresence>

      <SlidingHeroSection setLoading={setLoading} indexLoad={0} />
      <PurpleCardSection setLoading={setLoading} indexLoad={1} />

      <OurServicesSection setLoading={setLoading} indexLoad={2} />
      <IndustryWeServeSection setLoading={setLoading} indexLoad={3} />
      <OurValuesSection setLoading={setLoading} indexLoad={4} />

      <Testimonials setLoading={setLoading} indexLoad={5} />
      <ContactUsSection setLoading={setLoading} indexLoad={6} />
      <Footer />
    </main>
  );
}
