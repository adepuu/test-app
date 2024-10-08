"use client";

import useProducts from "@/hooks/useProducts";
import {
  FC,
} from "react";
import Card from "@/components/ui/Card";
import CheckoutCta from "@/components/ui/CheckoutCta";
import Header from "@/components/ui/Header";


const Home: FC = () => {
  const { products, isLoading, error} = useProducts();

  return (
    <div className="grid grid-cols-2 gap-4 px-4 pt-20 relative font-geist-sans">
      <Header />
      {isLoading && <div>Loading...</div>}
      {error && <div>Something Wrong Happened, {error.message}</div>}
      {!isLoading && !error && products && products.map((product, index) => (
        <Card key={index} {...product} name={product.name || ""} />
      ))}
      <CheckoutCta />
    </div>
  );
}

export default Home;