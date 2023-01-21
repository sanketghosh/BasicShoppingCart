import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../utils/getProductData";

const CartItemCard = ({ quantity, id }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  function removeItemFromCartHandler() {
    cart.deleteFromCart(id);
  }

  return (
    <div className=' px-4 py-3 rounded-sm flex justify-between items-center bg-slate-800'>
      <div className='flex flex-col text-gray-100 gap-2'>
        <span className='text-xl font-semibold'>{productData.item}</span>
        <span>{quantity} total items</span>
        <span>$ {(quantity * productData.price).toFixed(2)}</span>
      </div>
      <button
        className='bg-red-500 px-3 py-2 rounded-sm text-sm text-gray-100 font-medium hover:bg-red-600 transition-[0.3s]'
        onClick={removeItemFromCartHandler}>
        Remove
      </button>
    </div>
  );
};

export default CartItemCard;
