"use client"
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const TopContainer = () => {
  const background: BannerLayer = {
    
    image:
      "images/background.jpg",
    translateY: [0, 0],
    opacity: [1, 0.3],
    scale: [1, 1.5, "easeOutCubic"],
    rotate: [0, 30],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center flex-col">
        <h1 className="headline  white text-center font-bold opacity-[85%] max-sm:text-[60px]">Welcome!</h1>
        <p className="mb-[90px] lg:mb-20 max-w-5xl text-center drop-shadow-2xl px-5">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
      </div>
    )
  };

  const foreground: BannerLayer = {
    image:
      "images/forefinal.png",
    translateY: [0, 6],
    scale: [1, 0.98, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };


  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, headline, gradientOverlay]}
      className="full"
    />
  );
};
