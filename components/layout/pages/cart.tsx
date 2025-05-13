import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CartItemCard from "../sections/cart/CartItemCard";
import { CartItem, useCartStore } from "@/store/useCartStore";
import OrderSummary from "../sections/cart/OrderSummary";

const Cart = () => {
  const cartItems: CartItem[] = useCartStore((state) => state.cart);

  return (
    <div className="container px-4 my-5 md:px-10 lg:px-16">
      <Breadcrumbs />
      <h1 className="text-[clamp(2rem,1.8571428571428572rem+0.7142857142857143vw,2.5rem)] font-integralCf pb-5">
        YOUR CART
      </h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
          {/* Cart Items */}
          <div className="w-full border border-gray-300 rounded-[20px] p-3 min-w-[300px] md:min-w-[400px]">
            {cartItems.map((cartItem) => (
              <CartItemCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          <OrderSummary cartItems={cartItems} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
