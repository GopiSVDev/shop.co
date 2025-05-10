import { Separator } from "@/components/ui/separator";

const OrderSummary = () => {
  return (
    <div className="font-satoshi w-full max-w-[350px] border border-gray-300 rounded-[20px] px-5 py-5 flex flex-col gap-5">
      <h2 className="text-[20px] font-bold">Order Summary</h2>
      <span className="flex justify-between">
        <p>Subtotal</p>
        <p className="font-bold">$565</p>
      </span>
      <span className="flex justify-between">
        <p>Discount (-20%)</p>
        <p className="font-bold text-red-500">-$113</p>
      </span>
      <span className="flex justify-between">
        <p>Delivery Fee</p>
        <p className="font-bold">$15</p>
      </span>
      <Separator />
      <span className="flex justify-between">
        <p>Total</p>
        <p className="font-bold">$467</p>
      </span>
    </div>
  );
};

export default OrderSummary;
