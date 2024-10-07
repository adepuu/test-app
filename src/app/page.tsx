"use client";

import {
  FC,
  // useEffect,
} from "react";
// import Card from "@/components/ui/Card";
// import CheckoutCta from "@/components/ui/CheckoutCta";
// import Header from "@/components/ui/Header";
// import {fetchProducts} from "@/features/product/productSlice";
// import {
//   useAppDispatch,
//   useAppSelector
// } from "@/hooks/useSelector";

const Home: FC = () => {
  // const dispatch = useAppDispatch();
  // const { items, error, status } = useAppSelector(state => state.products)
  
  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchProducts());
  //   }
  // }, [dispatch, status]);
  //
  // console.log(status, error)
  //
  return (
    <div className="grid grid-cols-2 gap-4 px-4 pt-20 relative">
      Home Page
      {/*<Header />*/}
      {/*{status === "loading" && <div>Loading...</div>}*/}
      {/*{status === "failed" && <div>Something Wrong Happened, {error}</div>}*/}
      {/*{status === "succeeded" && items && items.map((product, index) => (*/}
      {/*  <Card key={index} {...product} name={product.name || ""} />*/}
      {/*))}*/}
      {/*<CheckoutCta />*/}
    </div>
  );
}

export default Home;