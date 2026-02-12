import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import RatingStars from "./RatingStars";
import CommentsSection from "./CommentsSection";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // later you can replace this with API / RTK Query
  const allProducts = useSelector((state: any)=> state.product.allProducts);
  const product = allProducts.find(
    (p: any) => String(p.id) === String(id)
    );


 

  if (!product) return <p>Product not found</p>;
  

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl object-cover w-full"
      />

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">
            {product.currency} {product.price}
          </span>

          <RatingStars rating={product.rating} />
        </div>

        <button
          disabled={!product.inStock}
          className="bg-black text-white px-6 py-3 rounded-lg"
          onClick={() =>
            dispatch(addToCart({ id: product.id, name: product.name, price: product.price }))
          }
        >
          Add to Cart
        </button>
      </div>

      {/* Comments */}
      <div className="md:col-span-2">
        <CommentsSection product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
