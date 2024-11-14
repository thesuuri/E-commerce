import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800">Total: ${item.totalPrice}</p>
              </div>
              <button
                onClick={() => removeItemHandler(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">
              Total Amount: ${cart.totalAmount}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
