import React from "react";

const ProductCard = ({ product }) => {
  const { title, description, image } = product;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="/"
            className="mb-0 capitalize dark:text-gray-100"
          >
            Photography
          </a>
        </div>
        <a rel="noopener noreferrer" href="/">
          See All
        </a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="/" className="block">
            <div className="text-xl font-semibold dark:text-violet-400">
              {title}
            </div>
          </a>
          <p className="leading-snug dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
