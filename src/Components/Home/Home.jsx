import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromise = fetch("http://localhost:3000/latest-products")
  .then((res) => res.json())
  .catch((error) => {
    console.log("Server is not running");
    return [];
  });

const Home = () => {
  return (
    <div>
      <h3>This is home</h3>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
