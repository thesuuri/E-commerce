import { Link } from "react-router-dom";
import productPageHeading from "../assets/products-page-heading.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow relative flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${productPageHeading})`,
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="text-xl text-white mb-8">
            Discover amazing products at great prices
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
