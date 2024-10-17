"use client";

import {
  FC,
} from "react";
import {addItem} from "@/features/cart/cartSlice";
import {
  useAppDispatch,
} from "@/hooks/useSelector";

interface CardProps {
  name: string;
  price: number;
}

const Card: FC<CardProps> = ({ name, price }) => {
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    dispatch(addItem({name, price, stock: 1}));
  }
  
  return (
    <div className="flex flex-col gap-4 text-center p-2 border border-gray-500 rounded">
      <h2 data-testid="product-name">{name}</h2>
      <div data-testid="product-price">IDR {price}</div>
      <button data-testid="add-to-cart" onClick={handleAddToCart} className="w-full py-2 border border-black rounded">
        Add To Cart
      </button>
    </div>
  );
}

export default Card;