import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const p = products.find(x => x.id === id);

  if (!p) return <div>Product not found</div>;

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <img src={p.img} className="rounded-xl shadow" />

      <div>
        <h1 className="text-4xl font-bold">{p.name}</h1>
        <h2 className="text-2xl text-blue-600 font-semibold mt-2">₹{p.price}</h2>
        <p className="mt-4 text-gray-600">{p.short}</p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Enquire Now
        </button>
      </div>
    </div>
  );
}
