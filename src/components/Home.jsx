import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  //   const { data: products } = useLoaderData();

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);

  const [perPageData, setPerPageData] = useState(5);

  const numberOfPages = Math.ceil(count / perPageData);

  //   ** Pagination

  // ** data ase koita count
  // ** per page koita data dekhaite chai size

  // ** currently ami kon page a asi

  // ** number of page = Math.celi(count/size)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/products?size=${perPageData}&&currentPage=${currentPage}`
        );
        const data = await response.json();
        console.log(data);
        setProducts(data.data);
        setCount(data.count);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [perPageData, currentPage]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPageData={perPageData}
            setPerPageData={setPerPageData}
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <div>
        <h1 className="text-5xl text-center text-black">
          Currently on: {currentPage + 1}
        </h1>
        <div className="flex justify-center space-x-1 dark:text-gray-100">
          {[...Array(numberOfPages).keys()].map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              key={number}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
              title="Page 4"
            >
              {number + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <select
            onChange={(e) => {
              setPerPageData(e.target.value);
              setCurrentPage(0);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
