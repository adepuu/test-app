"use client";

import {KEY_PRODUCT} from "@/constants/queryKey";
import useProducts from "@/hooks/useProducts";
import {useQueryClient} from "@tanstack/react-query";
import {
  FC,
} from "react";
import {useAppSelector} from "@/hooks/useSelector";

const CheckoutCta: FC = () => {
  const queryClient = useQueryClient();
  const { products } = useProducts();
  const cart = useAppSelector(state => state.cart);
  if (!cart.items.length) {
    return null;
  }
  
  const handleButtonClick = async () => {
    await queryClient.invalidateQueries({
      queryKey: [KEY_PRODUCT],
    });
    console.log("Query invalidated");
  }
  
  console.log("Products: ", products);
  
  return (
    <div className="w-full px-4 pb-4 pointer-events-none fixed bottom-0 left-0 z-20">
      <button onClick={handleButtonClick} className="pointer-events-auto w-full py-2 bg-gray-800 text-white rounded-xl flex justify-between px-4">
        <span>Checkout</span>
        <span>${cart.total}</span>
      </button>
    </div>
  );
}

export default CheckoutCta;