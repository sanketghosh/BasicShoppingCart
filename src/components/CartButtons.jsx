const CartButtons = ({ items, theId, cart }) => {
  // const cart = useContext(CartContext);

  function addOneToCartHandler() {
    cart.addOneToCart(theId);
  }

  function removeOneFromCartHandler() {
    cart.removeOneFromCart(theId);
  }

  function deleteAllFromCartHandler() {
    cart.deleteFromCart(theId);
  }

  const buttonTypes = [
    {
      id: 1,
      btnSign: "+",
      func: addOneToCartHandler,
    },
    {
      id: 2,
      btnSign: "-",
      func: removeOneFromCartHandler,
    },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex  w-[20rem] h-[2rem] items-center justify-between'>
        <span className='text-lg font-medium'>
          {items === 1 ? `${items} item` : `${items} items`} in cart
        </span>
        <div className='flex gap-5'>
          {/* <button
            className='bg-indigo-600 w-10 h-9 rounded-sm text-3xl transition hover:bg-indigo-700'
            onClick={addOneToCartHandler}>
            +
          </button>
          <button
            className='bg-indigo-600 w-10 h-9 rounded-sm text-3xl transition hover:bg-indigo-700'
            onClick={removeOneFromCartHandler}>
            -
          </button> */}

          {buttonTypes.map((btn) => {
            return (
              <button
                key={btn.id}
                onClick={btn.func}
                className='bg-indigo-600 w-10 h-9 rounded-sm text-3xl transition hover:bg-indigo-700 flex items-center justify-center'>
                {btn.btnSign}
              </button>
            );
          })}
        </div>
      </div>
      <button
        className='w-[20rem] bg-red-500 h-10 rounded-sm text-[16px] font-semibold transition hover:bg-red-600'
        onClick={deleteAllFromCartHandler}>
        Remove From Cart
      </button>
    </div>
  );
};

export default CartButtons;
