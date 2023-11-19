import React from "react";
import IntroCard from "./IntroCard";

const Intro = () => {
  return (
    <div
      className="bg-url h-[20rem] "
      style={{
        backgroundImage: "url(/bg-image.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-7xl font-bold pt-16 tracking-normal text-center text-white">
        Showcase Your Work & Get Paid
      </div>
      <div className="text-2xl font-semibold pt-5 text-white text-center">
        Join Behance, the world's largest creative network
      </div>
      <div className="flex justify-center pt-4">
        <div>
          <IntroCard label="Share your work and get discovered by millions of creatives and clients" />
        </div>
        <div className="px-6">
          <IntroCard label="Sell design assets and make money creating what you love" />
        </div>
        <div>
          <IntroCard label="Find your next full time or freelance opportunity" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
