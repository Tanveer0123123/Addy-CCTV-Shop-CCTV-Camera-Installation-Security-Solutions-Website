import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Popular Products</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
    </div>
  );
}
