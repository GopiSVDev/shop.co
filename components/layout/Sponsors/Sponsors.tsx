import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full bg-black">
      <div className="container px-[clamp(1rem,-0.5rem+7.5vw,6.25rem)] py-10 flex flex-wrap justify-evenly items-center gap-5">
        <Image
          src="/images/versace.png"
          alt="versace"
          width={166}
          height={33}
        />
        <Image src="/images/zara.png" alt="zara" width={92} height={38} />
        <Image src="/images/gucci.png" alt="gucci" width={157} height={36} />
        <Image src="/images/prada.png" alt="prada" width={195} height={32} />
        <Image src="/images/ck.png" alt="ck" width={208} height={33} />
      </div>
    </div>
  );
};

export default Sponsors;
