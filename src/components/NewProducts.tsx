'use client'
import React from "react";

const productsData = [
  {
    img: "🛒", // Shopping Cart Icon for Product 1
    title: "Product 1",
    desc: "Description of Product 1",
    ratings: "4",
    price: "120.00",
  },
  {
    img: "📦", // Package Icon for Product 2
    title: "Product 2",
    desc: "Description of Product 2",
    ratings: "3",
    price: "99.99",
  },
  {
    img: "👜", // Handbag Icon for Product 3
    title: "Product 3",
    desc: "Description of Product 3",
    ratings: "5",
    price: "250.00",
  },
  {
    img: "👚", // Shirt Icon for Product 4
    title: "Product 4",
    desc: "Description of Product 4",
    ratings: "2",
    price: "49.99",
  },
  {
    img: "🎧", // Headphone Icon for Product 5
    title: "Product 5",
    desc: "Description of Product 5",
    ratings: "4",
    price: "150.00",
  },
  {
    img: "💻", // Laptop Icon for Product 6
    title: "Product 6",
    desc: "Description of Product 6",
    ratings: "3",
    price: "199.00",
  },
  {
    img: "📱", // Mobile Phone Icon for Product 7
    title: "Product 7",
    desc: "Description of Product 7",
    ratings: "5",
    price: "320.00",
  },
];

const NewProducts = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">New Products</h1>
      <div className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                <span className="text-6xl">{product.img}</span> {/* Display icon here */}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-yellow-500">Ratings: {product.ratings} ⭐</p>
                  <p className="text-lg font-bold text-gray-800">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProducts;
