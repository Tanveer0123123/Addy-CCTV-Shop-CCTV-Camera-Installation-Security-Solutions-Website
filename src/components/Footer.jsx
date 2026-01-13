import { FaFacebookF, FaLinkedinIn, FaBehance, FaPhoneAlt } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/cctv-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* ------- Company Info ------- */}
        <div>
          <img src={logo} alt=" Cctv home system Logo"  className="w-30 h-18 rounded-xl"/>
          <p className="text-gray-400 text-xl leading-relaxed">
            We provide reliable CCTV installation, security systems, and
            surveillance solutions for homes, shops, offices, and businesses.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <div className="p-2 border rounded-full hover:bg-white hover:text-gray-900 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 border rounded-full hover:bg-white hover:text-gray-900 transition cursor-pointer">
              <TbBrandX />
            </div>
            <div className="p-2 border rounded-full hover:bg-white hover:text-gray-900 transition cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="p-2 border rounded-full hover:bg-white hover:text-gray-900 transition cursor-pointer">
              <FaBehance />
            </div>
          </div>

          {/* Help Line */}
          <div className="flex items-center gap-3 mt-6">
            <div className="p-3 bg-white rounded-full text-gray-900">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-400 text-xl">Need Help?</p>
              <h4 className="text-white font-semibold text-lg">+91 8770146887</h4>
            </div>
          </div>
        </div>

        {/* ------- Services ------- */}
        <div>
          <h4 className="text-3xl font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-xl text-gray-400">
            <li>› CCTV Surveillance Systems</li>
            <li>› Access Control Solutions</li>
            <li>› Fire Alarm Systems</li>
            <li>› Intrusion Alarm Solutions</li>
            <li>› Public Address Systems</li>
            <li>› Networking & Cabling</li>
          </ul>
        </div>

        {/* ------- Useful Links ------- */}
        <div>
          <h4 className="text-3xl font-semibold text-white mb-4">Useful Links</h4>
          <ul className="space-y-2 text-xl text-gray-400">
            <li>› About</li>
            <li>› Products</li>
            <li>› FAQ</li>
            <li>› Contact</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>

        {/* ------- Contact Info ------- */}
        <div>
          <h4 className="text-3xl font-semibold text-white mb-4">Contact Us</h4>

          <div className="flex items-start gap-3 mb-4 text-xl">
            <FaLocationDot className="text-xl text-gray-400 mt-1" />
            <p>
              C-Sector, Indrapuri, Bhopal, Madhya Pradesh – 462021
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4  text-xl">
            <FaPhoneAlt className="text-xl text-gray-400 mt-1" />
            <p>+91 8770146887</p>
          </div>

          <div className="flex items-start gap-3 text-xl">
            <FaEnvelope className="text-xl text-gray-400 mt-1" />
            <p>cctvhomesystem6@gmail
              .com </p>
          </div>
        </div>

      </div>

      {/* -------- Bottom Bar -------- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Cctv home system — All Rights Reserved
      </div>
    </footer>
  );
}
