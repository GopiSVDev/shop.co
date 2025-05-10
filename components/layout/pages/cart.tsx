"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CartItemCard from "../sections/cart/CartItemCard";
import { CartItem } from "@/store/useCartStore";
import { useProductStore } from "@/store/useProductStore";
import OrderSummary from "../sections/cart/OrderSummary";

const Cart = () => {
  const products = useProductStore((state) => state.products);
  const thumbnail = products && products[0].thumbnail;

  const cartItem: CartItem = {
    id: 1,
    title: "Gradient Graphic T-shirt",
    thumbnail: thumbnail,
    size: "Small",
    color: "Red",
    price: 224,
    quantity: 10,
  };

  return (
    <div className="container px-4 my-5 md:px-10 lg:px-16">
      <Breadcrumbs />
      <h1 className="text-[clamp(2rem,1.8571428571428572rem+0.7142857142857143vw,2.5rem)] font-integralCf pb-5">
        YOUR CART
      </h1>
      {/* Main Div */}
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Cart Items */}
        <div className="w-full border border-gray-300 rounded-[20px] p-3 min-w-[300px] md:min-w-[400px]">
          <CartItemCard cartItem={cartItem} />
          <CartItemCard cartItem={cartItem} />
        </div>
        {/* Order Summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
