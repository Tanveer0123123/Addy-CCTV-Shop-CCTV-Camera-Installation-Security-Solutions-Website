// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/addy-cctv-logo.png";


// export default function Header() {
//   return (
//     <header className="shadow bg-white sticky top-0 z-50">
//       <nav className="container mx-auto flex justify-between items-center py-2 px-4">
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           <img src={logo} alt="Addy CCTV Shop Logo"  className="w-60 h-16 rounded-xl "/>
//         </Link>

//         <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
//           <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
//           <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
//           <NavLink to="/services" className="hover:text-blue-600">Services</NavLink>
//           <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
//           <NavLink to="/contact" className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">Contact Us</NavLink>
//         </ul>
//       </nav>
//     </header>
//   );
// }



import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/addy-cctv-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-2 px-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img
            src={logo}
            alt="Addy CCTV Shop Logo"
            className="w-52 h-14 rounded-xl object-contain"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
          <NavLink to="/services" className="hover:text-blue-600">Services</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink
            to="/contact"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Contact Us
          </NavLink>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow px-6 py-4 flex flex-col gap-4 text-lg font-medium animate-slideDown">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Products</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Services</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Contact Us
          </NavLink>
        </ul>
      )}
    </header>
  );
}
