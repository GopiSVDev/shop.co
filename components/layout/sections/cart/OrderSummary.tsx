import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/store/useCartStore";

const OrderSummary = ({ cartItems }: { cartItems: CartItem[] }) => {
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalDiscount = cartItems.reduce((sum, item) => {
    if (!item.discountPercentage) return sum;
    const discountAmount =
      item.price * (item.discountPercentage / 100) * item.quantity;
    return sum + discountAmount;
  }, 0);

  const discountPercentage =
    originalTotal > 0 ? (totalDiscount / originalTotal) * 100 : 0;

  const subtotal = originalTotal - totalDiscount;

  const deliveryFee = subtotal > 500 ? 0 : 15;

  const finalAmount = subtotal - totalDiscount + deliveryFee;

  return (
    <div className="font-satoshi w-full max-w-[350px] border border-gray-300 rounded-[20px] px-5 py-5 flex flex-col gap-5">
      <h2 className="text-[20px] font-bold">Order Summary</h2>
      <span className="flex justify-between">
        <p>Subtotal</p>
        <p className="font-bold">${subtotal.toFixed(2)}</p>
      </span>
      <span className="flex justify-between">
        <p>Discount (-{discountPercentage.toFixed()}%)</p>
        <p className="font-bold text-red-500">-${totalDiscount.toFixed(2)}</p>
      </span>
      <span className="flex justify-between">
        <p>Delivery Fee</p>
        <p className="font-bold">${deliveryFee.toFixed(2)}</p>
      </span>
      <Separator />
      <span className="flex justify-between">
        <p>Total</p>
        <p className="font-bold">${finalAmount.toFixed(2)}</p>
      </span>
    </div>
  );
};

export default OrderSummary;
