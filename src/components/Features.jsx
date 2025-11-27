import { FaShieldAlt, FaBolt, FaTools, FaWallet } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={32} />,
    title: "24/7 Protection",
    desc: "Round-the-clock monitoring with HD clarity.",
  },
  {
    icon: <FaBolt size={32} />,
    title: "Same Day Installation",
    desc: "Get your cameras installed within hours.",
  },
  {
    icon: <FaTools size={32} />,
    title: "Free 1 Year Service",
    desc: "Hassle-free maintenance and support.",
  },
  {
    icon: <FaWallet size={32} />,
    title: "Affordable Price",
    desc: "Best rates for home & business security.",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 text-center rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="text-blue-600 mx-auto">{f.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
