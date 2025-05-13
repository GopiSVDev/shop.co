import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CartItemCard from "../sections/cart/CartItemCard";
import { CartItem, useCartStore } from "@/store/useCartStore";
import OrderSummary from "../sections/cart/OrderSummary";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Link from "next/link";

const Cart = () => {
  const cartItems: CartItem[] = useCartStore((state) => state.cart);

  return (
    <div className="container px-4 my-5 md:px-10 lg:px-16">
      <Breadcrumbs />

      {cartItems.length > 0 ? (
        <>
          <h1 className="text-[clamp(2rem,1.8571428571428572rem+0.7142857142857143vw,2.5rem)] font-integralCf pb-5">
            YOUR CART
          </h1>
          <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
            {/* Cart Items */}
            <div className="w-full border border-gray-300 rounded-[20px] p-3 min-w-[300px] md:min-w-[400px]">
              {cartItems.map((cartItem, index) => (
                <CartItemCard
                  key={`${cartItem.id}+${index}`}
                  cartItem={cartItem}
                />
              ))}
            </div>

            <OrderSummary cartItems={cartItems} />
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="flex-col md:flex-row gap-5 justify-center items-center"
        >
          <div className="text-center">
            <h1 className="text-[clamp(2rem,1.8571428571428572rem+0.7142857142857143vw,2.5rem)] font-integralCf pb-5 ">
              NO ITEMS IN YOUR CART
            </h1>
            <p>Must add items on the card before you proceed to checkout</p>
          </div>

          <div className="flex justify-center m-5">
            <ShoppingCart size={100} />
          </div>

          <div className="text-center m-8 ">
            <Link href="/shop">
              <Button>SHOP NOW</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
