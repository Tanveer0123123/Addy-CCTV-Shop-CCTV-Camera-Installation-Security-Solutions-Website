import { Link, NavLink } from "react-router-dom";
import logo from "../assets/addy-cctv-logo.png";


export default function Header() {
  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-2 px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="Addy CCTV Shop Logo"  className="w-60 h-16 rounded-xl "/>
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
          <NavLink to="/services" className="hover:text-blue-600">Services</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/contact" className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">Contact Us</NavLink>
        </ul>
      </nav>
    </header>
  );
}
