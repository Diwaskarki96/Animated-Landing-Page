import React from "react";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  const productsData = [
    {
      id: 1,
      img: "/women/women.png",
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: "/women/women2.jpg",
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: "/women/women3.jpg",
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: "/women/women4.jpg",
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: "/women/women2.jpg",
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products For you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            similique accusamus?
          </p>
        </div>
        {/* header section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-5">
            {/* card section */}
            {productsData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.color}</p>
                    <div className="flex items-center gap-1">
                      <span>{item.rating}</span>
                      <FaStar className="text-yellow-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
