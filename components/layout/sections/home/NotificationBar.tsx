import * as motion from "motion/react-client";

const NotificationBar = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full top-0 left-0 right-0 bg-black text-white text-center py-1 font-satoshi"
    >
      <div>
        <p className="font-normal text-[12px] md:text-[14px]">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-medium ">
            Sign Up Now
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default NotificationBar;
