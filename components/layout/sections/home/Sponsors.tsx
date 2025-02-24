import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full bg-black">
      <div className="container px-[clamp(1rem,-0.5rem+7.5vw,6.25rem)] py-10 flex flex-wrap justify-evenly items-center gap-5">
        <Image
          src="/images/versace.webp"
          alt="versace"
          width={166}
          height={33}
          style={{ width: "auto", height: "auto" }}
          unoptimized
        />
        <Image
          src="/images/zara.webp"
          alt="zara"
          width={92}
          height={38}
          unoptimized
        />
        <Image
          src="/images/gucci.webp"
          alt="gucci"
          width={157}
          height={36}
          unoptimized
        />
        <Image
          src="/images/prada.webp"
          alt="prada"
          width={195}
          height={32}
          unoptimized
        />
        <Image
          src="/images/ck.webp"
          alt="ck"
          width={208}
          height={33}
          unoptimized
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Sponsors;
