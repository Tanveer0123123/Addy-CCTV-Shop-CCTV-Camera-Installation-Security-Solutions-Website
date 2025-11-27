import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        <p className="text-gray-500 text-sm">{p.short}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold text-xl">₹{p.price}</span>

          <Link
            to={`/products/${p.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
