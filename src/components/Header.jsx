import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const headerMenu = [
  {
    id: 1,
    menu: "Home",
    path: "/",
  },
  {
    id: 2,
    menu: "Store",
    path: "/store",
  },
  {
    id: 3,
    menu: "About",
    path: "/about",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModalHandler() {
    setIsOpen(true);
  }

  function closeModalHandler() {
    setIsOpen(false);
  }

  const cart = useContext(CartContext);

  const productQuantity = cart.items.reduce(
    (sum, prod) => sum + prod.quantity,
    0
  );

  return (
    <>
      <header className='font-mons h-16 px-10 bg-slate-800 text-gray-200 m-2 rounded-sm justify-between items-center flex'>
        <ul className='flex gap-14 justify-center'>
          {headerMenu.map((item) => {
            return (
              <Link to={item.path} key={item.id}>
                <li className='text-lg font-medium'>{item.menu}</li>
              </Link>
            );
          })}
        </ul>
        <button
          className='bg-amber-400 py-2 px-4 rounded-sm font-semibold text-gray-800 hover:bg-amber-500 flex items-center justify-center transition'
          onClick={openModalHandler}>
          Cart Items
          <span className='ml-2 bg-blue-600 px-2 text-amber-400 rounded-full'>
            {productQuantity}
          </span>
        </button>
      </header>

      <Modal open={isOpen} onClose={closeModalHandler} />
    </>
  );
};

export default Header;
