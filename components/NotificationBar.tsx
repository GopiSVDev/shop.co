const NotificationBar = () => {
  return (
    <div className="w-full top-0 left-0 right-0 bg-black text-white text-center py-1 font-satoshi">
      <div className="container">
        <p className="font-normal text-[12px] md:text-[14px]">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-medium ">
            Sign Up Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotificationBar;
