import Footer from "@/components/Footer";
import NewProducts from "@/components/NewProducts";
import SliderHome from "@/components/SliderHome";
import Testimonial from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <SliderHome />
      <NewProducts />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default page;
