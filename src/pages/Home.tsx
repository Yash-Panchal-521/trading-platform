import React from "react";
import TopNavBar from "../container/TopNavBar";
import AnimatedPages from "./AnimatedPages";
import { AnimatePresence } from "framer-motion";
import HeroBanner from "../container/HeroBanner";
import Features from "../container/Features";
import Testimonials from "../container/Testimonials";
import CallToAction from "../container/CallToAction";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <AnimatePresence>
        <AnimatedPages key="home">
          <HeroBanner />
          <Features />
          <Testimonials />
          <CallToAction />
        </AnimatedPages>
      </AnimatePresence>
    </div>
  );
};

export default Home;
