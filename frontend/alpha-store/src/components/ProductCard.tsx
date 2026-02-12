import { useDispatch } from "react-redux";
import {
  addToCart
} from "../store/cartSlice";
import { Link } from "react-router-dom";

type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    image: string;
    rating: number;
    reviewsCount: number;
    comments: [{id: any, name: string, comment: string, rating: number}]
    inStock: boolean;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  const {
    id,
    name,
    image,
    description,
    price,
    currency,
    rating,
    reviewsCount,
    comments,
    inStock,
  } = product;

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      
      <Link to={`/products/${id}`}>
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      </Link>
      

      {/* Content */}
      <div className="flex-1 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-gray-900">
            {currency} {price}
          </span>

          <span className="flex items-center gap-1 text-sm text-yellow-500">
            ⭐ {rating} ({reviewsCount})
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        disabled={!inStock}
        className={`mt-auto w-full rounded-lg px-4 py-3 text-sm font-semibold transition
          ${
            inStock
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        onClick={()=>dispatch(addToCart({id,name,price}))}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};


export default ProductCard;