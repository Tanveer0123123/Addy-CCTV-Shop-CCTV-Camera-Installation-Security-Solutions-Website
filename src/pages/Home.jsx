import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import heroBg from "../assets/heroimg.png";
import About from "./About";
import Features from "../components/Features";
import Services from './Services';
import img3 from "../assets/img3.jpg";
import OurClients from "../components/OurClients";


export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO */}

      <section
        className="relative rounded-xl bg-cover bg-center h-[500px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        <div className="relative z-20 text-center py-24 px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white pt-26">
            Secure Your Home & Office
          </h1>

          <p className="text-lg mt-4 text-gray-200">
            Best CCTV Solutions | Installation | Maintenance
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Contact Us
            </Link>
            <Link to="/products" className="border border-blue-400 text-blue-300 px-6 py-3 rounded-lg hover:bg-blue-100/20">
              View Products
            </Link>
          </div>
        </div>
      </section>
      <Features />
      <About />


      {/* POPULAR PRODUCTS */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Popular Products</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <Services />

      <section>
        <div className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">

            {/* Top Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="text-gray-600 mt-3 text-lg">
                We provide reliable, advanced and affordable CCTV & security solutions
                designed to protect your home, business, and workplace.
              </p>
            </div>

            {/* Image + Content Row */}
            <div className="md:flex items-center gap-10">

              {/* Left Image */}
              <div className="md:w-1/2">
                <img
                  src={img3}
                  alt="Why Choose Us"
                  className="rounded-xl shadow-lg h-[500px] w-full"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Your Safety Is Our Priority
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  With our expert team and top-quality equipment, we ensure complete
                  security coverage for homes, shops, offices, and large premises.
                  Our installations are fast, clean, and professional—giving you
                  peace of mind at the best price.
                </p>

                {/* List Points */}
                <ul className="mt-6 space-y-4 text-gray-700 text-lg">
                  <li>✔ Certified and experienced technicians</li>
                  <li>✔ High-quality cameras with HD night vision</li>
                  <li>✔ Best price guarantee across all packages</li>
                  <li>✔ Same-day fast & clean installation</li>
                  <li>✔ Mobile live view setup included</li>
                  <li>✔ Free 1-year service & long-term support</li>
                  <li>✔ 24/7 customer assistance for any issue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurClients/>
    </div>
  );
}
