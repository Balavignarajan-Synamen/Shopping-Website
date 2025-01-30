// app/components/Testimonial.jsx
'use client'
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review:
      "Amazing shopping experience! The quality of the products is top-notch, and delivery was super fast.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    review:
      "I love this store! Great discounts, and the customer support is very helpful.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    review:
      "Highly recommended! The products are exactly as described, and the checkout process is smooth.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <p className="text-gray-600 italic">
                &quot;{testimonial.review}&quot;
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
