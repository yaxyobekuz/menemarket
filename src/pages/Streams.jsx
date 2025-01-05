import React from "react";

// Data
import products from "../data/products";

// Components
import StreamItem from "../components/StreamItem";

const Streams = () => {
  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container max-sm:px-1 ">
        <div className="bg-gradient-gray rounded-xl">
          {/* Title */}
          <div className="flex items-center h-[60px] px-2.5 sm:px-4">
            <h1 className="text-2xl">
              <span>Oqimlar </span>
              <span className="inline-block font-medium text-neutral-400 scale-90">
                (0)
              </span>
            </h1>
          </div>

          {/* Line */}
          <div className="h-0.5 w-full bg-white" />

          {/* Content */}
          <ul className="grid grid-cols-1 gap-3.5 px-2.5 py-5 sm:px-4 xs:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map((product, index) => (
              <StreamItem key={index} data={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Streams;
