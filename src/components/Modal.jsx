import { useContext } from "react";
import CartItemCard from "./CartItemCard";
import ReactDOM from "react-dom";
import { CartContext } from "../context/CartContext";

const Modal = ({ open, onClose }) => {
  const cart = useContext(CartContext);

  const productQuantity = cart.items.reduce(
    (sum, prod) => sum + prod.quantity,
    0
  );

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#000000c6]'></div>
      <div className='fixed top-[-40%] left-[50%] h-[650px] min-w-[550px] translate-x-[-50%] translate-y-[50%] bg-[#323748] z-[1000] rounded-md font-mons transition-all text-gray-100'>
        <div className='flex flex-col p-4 justify-between'>
          {/* header  */}
          <button
            className='fixed top-[-7px] right-[-7px] z-10 bg-red-500 hover:bg-red-600 transition opacity-[1] w-8 h-8 rounded-full text-gray-100'
            onClick={onClose}>
            ✖
          </button>
          <div className='border-b-2 border-gray-500 p-2 mb-4'>
            <h2 className='text-2xl font-semibold'>Your Shopping Cart</h2>
            <p>The items present in your shopping cart</p>
          </div>
          {/* items  */}
          <div className='h-[420px] overflow-scroll overflow-x-hidden w-full flex flex-col gap-4 p-2'>
            {productQuantity === 0 ? (
              <h2 className='text-center mt-20 font-semibold text-2xl text-gray-100 bg-red-600 py-4 rounded-md'>
                No products in your cart
              </h2>
            ) : (
              cart.items.map((currentProd, id) => {
                return (
                  <CartItemCard
                    key={id}
                    quantity={currentProd.quantity}
                    id={currentProd.id}
                  />
                );
              })
            )}
          </div>
          {/* price and next  */}
          <div className='p-2 mt-3 flex items-start justify-between'>
            <div className='flex flex-col'>
              <span className='font-semibold text-lg'>
                {productQuantity} total items
              </span>
              <span className='font-semibold text-xl'>
                Total price: {cart.getTotalCost().toFixed(2)}
              </span>
            </div>
            <button className='bg-indigo-600 mt-2 px-6 py-2 rounded-sm font-medium text-gray-100 text-sm hover:bg-indigo-700 transition'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
