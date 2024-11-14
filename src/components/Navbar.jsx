import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserButton, useUser } from "@clerk/clerk-react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from "../assets/hexashoplogo.png";

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-4 gap-7">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Нүүр
            </Link>
            <Link to="/cart" className="relative ">
              <div className="flex items-center text-gray-600 hover:text-gray-900 gap-1">
                Сагс
                <ShoppingCartIcon className="h-6 w-6 " />
                {cartQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {cartQuantity}
                  </span>
                )}
              </div>
            </Link>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Link
                to="/sign-in"
                className=" hover:text-gray-900 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Нэвтрэх
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
