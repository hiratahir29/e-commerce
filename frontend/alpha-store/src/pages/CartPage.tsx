import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeItem,
} from "../store/cartSlice";

const TAX_RATE = 0.13;
const SHIPPING = 10;

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);

  const subtotal = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + (items.length ? SHIPPING : 0);

  // ✅ Empty Cart State
  if (items.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-600">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-4 bg-white transition-all duration-200"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  USD {item.price}
                </p>
              </div>

              {/* Quantity (Animated) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="h-8 w-8 rounded border hover:bg-gray-100 transition"
                >
                  −
                </button>

                <span className="min-w-[24px] text-center font-medium transition-all duration-150 scale-105">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="h-8 w-8 rounded border hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  USD {(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-lg border p-6 bg-white h-fit">
          <h2 className="text-lg font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>USD {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (13%)</span>
              <span>USD {tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>USD {SHIPPING.toFixed(2)}</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>USD {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-black py-3 text-white font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
