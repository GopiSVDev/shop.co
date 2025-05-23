import { CartItem, useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Separator } from "@/components/ui/separator";

const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { id, thumbnail, title, size, color, price, quantity } = cartItem;
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <>
      <div className="flex gap-3">
        <div className="min-w-[100px] bg-offWhite rounded-[10px] overflow-hidden max-h-[130px]">
          <Image
            className="md:w-[150px]"
            src={thumbnail}
            width={100}
            height={150}
            alt={title}
          />
        </div>

        <div className="flex flex-col w-full px-2 font-satoshi">
          <div className="flex justify-between items-center text-[12px] md:text-[16px] lg:text-[20px] font-medium gap-4">
            <p>{title}</p>
            <Trash2
              width={16}
              className="text-red-500 md:w-[20px] cursor-pointer"
              onClick={() => removeFromCart(id, size, color)}
            />
          </div>

          <p className="text-[12px] md:text-[14px] lg:text-[16px]">
            Size: <span className="text-gray-500">{size}</span>
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">
            Color: <span className="text-gray-500">{color}</span>
          </p>

          <div className="flex justify-between items-center gap-5 mt-2 w-full">
            {price.toString().length > 6 ? (
              <p className="text-[12px] font-bold">${price}</p>
            ) : (
              <p className="text-[20px] font-bold">${price}</p>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center justify-around px-2 max-w-[120px] border border-gray-300 rounded-[62px] shadow-sm bg-offWhite overflow-hidden lg:gap-4 lg:py-1">
              <button
                className="w-[12px] lg:w-[20px] flex items-center justify-center hover:opacity-70 transition"
                onClick={() => decreaseQuantity(id, size, color)}
              >
                <Minus className="w-full h-full" />
              </button>

              <div className="relative h-[24px] w-[24px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={quantity}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute text-[12px] lg:text-[20px] font-medium"
                  >
                    {quantity}
                  </motion.span>
                </AnimatePresence>
              </div>

              <button
                className="w-[12px] lg:w-[20px] flex items-center justify-center hover:opacity-70 transition"
                onClick={() => increaseQuantity(id, size, color)}
              >
                <Plus className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
    </>
  );
};

export default CartItemCard;
