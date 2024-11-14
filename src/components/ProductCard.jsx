import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={addToCartHandler}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
