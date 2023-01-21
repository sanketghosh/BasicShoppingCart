import { useContext } from "react";
import CartButtons from "./CartButtons";
import { CartContext } from "../context/CartContext";

// export const totalItems = 13;

const ProductCard = ({ id, item, price, description }) => {
  // accessing cart using useContext
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(id);

  function addProductToCartHandler() {
    cart.addOneToCart(id);
  }

  return (
    <div className='h-[20rem] w-[22rem] bg-slate-800 rounded-sm text-gray-100 shadow-lg'>
      <div className='h-full px-4 py-5 flex flex-col items-center justify-between gap-6'>
        <div className='flex flex-col gap-4'>
          <span className='mt-2 text-[16px] text-left text-xl font-semibold'>
            {item}
          </span>
          <p className='text-left'>{description}</p>
          <div className='flex justify-between w-full'>
            <span className='text-lg font-semibold'>Price</span>
            <span className='text-lg font-semibold'>$ {price}</span>
          </div>
        </div>
        {productQuantity === 0 ? (
          <button
            className='bg-indigo-600 w-[20rem] h-[3rem] rounded-sm transition hover:bg-indigo-700 text-lg'
            onClick={addProductToCartHandler}>
            Add To Cart
          </button>
        ) : (
          <CartButtons items={productQuantity} theId={id} cart={cart} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
