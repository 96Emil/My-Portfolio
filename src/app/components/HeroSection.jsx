import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            My Portfolio
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aliquid nihil hic quaerat fugiat! Voluptates atque maiores a
            inventore perferendis, modi harum iste mollitia in accusantium vero
            consectetur repellat veniam!
          </p>
        </div>
        <div className="col-span-5">
          <Image
            className="rounded-full"
            src="/images/hero-image.jpg"
            alt="hero image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
